<template>
  <div id="app">
    <BancorWidget tokenReceive="OMNIS" />
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
      txFilter: null,
      txFilter2: null,
      transactions: [],
      value: []
    };
  },
  name: 'app',
  components: {
    BancorWidget: toVue(BancorConversionWidget, baseStyle, 'div'),
    DataTable,
    Chart
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
                sendToken: `0x${element.topics[1].substring(26, 66)}`,
                sendAmount: parseInt(`0x${element.data.substring(2, 66)}`, 16) / 1e18,
                receiveToken: `0x${element.topics[2].substring(26, 66)}`,
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
