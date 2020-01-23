<template>
  <div id="app">
    <BancorWidget tokenReceive="OMNIS" />
    <DataTable :transactions="transactions" />
  </div>
</template>

<script>
import toVue from 'svelte-adapter/vue';
import BancorConversionWidget from 'bancor-conversion-widget';
import Eth from 'ethjs-query';
import EthFilter from 'ethjs-filter';
import DataTable from './components/DataTable.vue';

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
      transactions: []
    };
  },
  name: 'app',
  components: {
    BancorWidget: toVue(BancorConversionWidget, baseStyle, 'div'),
    DataTable
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
