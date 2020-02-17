<template>
  <v-container>
    <v-sparkline
      :value="value"
      :gradient="gradient"
      :smooth="radius || false"
      :padding="padding"
      :line-width="width"
      :stroke-linecap="lineCap"
      :gradient-direction="gradientDirection"
      :fill="fill"
      :type="type"
      :auto-line-width="autoLineWidth"
      :show-labels="showLabels"
      :label-size="4"
      color="black"
      auto-draw
      id="graphic"
      class="mx-auto"
    >
      <template v-slot:label="item"> {{ item.value }} </template>
    </v-sparkline>
    <v-card-text>
      <div class="display-1 font-weight-thin" style="color:black">Price evolution</div>
    </v-card-text>
  </v-container>
</template>

<script>
const gradients = [
  ['#222'],
  ['#42b3f4'],
  ['red', 'orange', 'yellow'],
  ['purple', 'violet'],
  ['#00c6ff', '#F0F', '#FF0'],
  ['#f72047', '#ffd200', '#1feaea']
];

export default {
  data: () => ({
    width: 2,
    radius: 10,
    padding: 8,
    lineCap: 'round',
    gradient: gradients[5],
    gradientDirection: 'top',
    gradients,
    fill: false,
    type: 'trend',
    autoLineWidth: false,
    showLabels: true
  }),
  props: ['value']
};
</script>
