<template>
  <v-data-table
    id="dataTable"
    :headers="headers"
    :items="transactions"
    class="elevation-3 mx-12"
  ></v-data-table>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        {
          text: 'Send Token',
          sortable: false,
          value: 'sendToken'
        },
        {
          text: 'Send Amount',
          sortable: false,
          value: 'sendAmount'
        },
        {
          text: 'Receive Token',
          sortable: false,
          value: 'receiveToken'
        },
        {
          text: 'Receive Amount',
          sortable: false,
          value: 'receiveAmount'
        },
        {
          text: 'Block',
          sortable: false,
          value: 'block'
        }
      ]
    };
  },
  props: ['transactions']
};
</script>
