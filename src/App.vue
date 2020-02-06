<template>
  <div id="app" class="d-flex flex-row justify-center">
    <v-card max-width="500px" style="margin: auto">
      <v-avatar color="white" size="62">
        <img src="./assets/smallomnislogo.png" alt="OMNIS" />
      </v-avatar>
      <p>Current Average Price ${{ value[value.length - 1] }}</p>
      <v-btn min-height="20" elevation="24" outlined @click="showConverter = true">
        Convert
      </v-btn>
    </v-card>
    <Modal v-if="showConverter" @close="showConverter = false">
      <BancorWidget slot="body" class="modal-container" tokenReceive="OMNIS" :colors="colors" />
    </Modal>
    <Chart :value="value" />
    <DataTable :transactions="transactions" />
  </div>
</template>

<script>
import toVue from 'svelte-adapter/vue';
import BancorConversionWidget from 'bancor-conversion-widget';
import Eth from 'ethjs-query';
import EthFilter from 'ethjs-filter';
import DataTable from './components/DataTable.vue';
import Chart from './components/Chart.vue';
import Modal from './components/Modal.vue';
import officialTokens from './officialTokens';

let provider;
let eth;
let filters;

const baseStyle = {
  width: '50%',
  margin: 'auto'
};

export default {
  data() {
    return {
      showConverter: false,
      txFilter: null,
      txFilter2: null,
      transactions: [],
      value: [],
      colors: {
        containerBg: 'white',
        containerFont: 'black',
        topTokenBg: '#0D1A2C',
        topTokenFont: 'white',
        bottomTokenBg: 'white',
        bottomTokenFont: 'black',
        summaryBg: '#E1E1E1',
        selectBorder: '#E1E1E1',
        summaryFont: 'black',
        disabledFont: '#787878',
        buttonBg: '#0D1A2C',
        buttonFont: 'white',
        compareArrows: 'black',
        hoverBackgroundColor: '#EDEDED',
        successColor: '#0EAD00'
      }
    };
  },
  methods: {
    getSymbol(address) {
      const token = officialTokens.find(
        el => el.tokenAddress.toLowerCase() === address.toLowerCase()
      );
      return token !== undefined ? token.symbol : 'Token Not Found';
    }
  },
  name: 'app',
  components: {
    BancorWidget: toVue(BancorConversionWidget, baseStyle, 'div'),
    DataTable,
    Chart,
    Modal
  },
  beforeMount() {
    if (typeof window.ethereum !== 'undefined') {
      provider = window.ethereum;
      eth = new Eth(provider);
      filters = new EthFilter(eth);

      this.txFilter = new filters.Filter({ delay: 300 })
        .new({
          fromBlock: 9269547,
          toBlock: 'latest',
          address: '0x8e748dc7b9dab8bf9ef4b84c5f38a6ae954096e0',
          topics: ['0x276856b36cbc45526a0ba64f44611557a2a8b68662c5388e9fe6d72e86e1c8cb', null]
        })
        .then(res => {
          eth.getFilterLogs(res).then(result => {
            this.transactions = [];
            result.forEach(element => {
              const tx = {
                sendToken: this.getSymbol(`0x${element.topics[1].substring(26, 66)}`),
                sendAmount: parseInt(`0x${element.data.substring(2, 66)}`, 16) / 1e18,
                receiveToken: this.getSymbol(`0x${element.topics[2].substring(26, 66)}`),
                receiveAmount: parseInt(`0x${element.data.substring(66, 130)}`, 16) / 1e18,
                block: element.blockNumber.toString()
              };
              this.transactions.push(tx);
            });
          });
        })
        .catch();

      this.txFilter2 = new filters.Filter({ delay: 300 })
        .new({
          fromBlock: 9269547,
          toBlock: 'latest',
          address: '0x8e748dc7b9dab8bf9ef4b84c5f38a6ae954096e0',
          topics: [
            '0x8a6a7f53b3c8fa1dc4b83e3f1be668c1b251ff8d44cdcb83eb3acec3fec6a788',
            '0x0000000000000000000000002b17b8927a8e9844b6ca11c5e0e818bb633c044d',
            null
          ]
        })
        .then(res => {
          eth.getFilterLogs(res).then(result => {
            result.forEach(element => {
              const smartSupply = parseInt(`0x${element.data.substring(2, 66)}`, 16) / 1e18;
              const reserve = parseInt(`0x${element.data.substring(66, 130)}`, 16) / 1e18;
              const ratio = parseInt(`0x${element.data.substring(130, 194)}`, 16) / 1e6;
              this.value.push(parseFloat(((smartSupply * ratio) / reserve).toFixed(3)));
            });
          });
        })
        .catch();
    }
  }
};
</script>

<style>
#app {
  flex-direction: row;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
