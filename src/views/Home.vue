<template>
<div class="grid grid-flow-row auto-rows-max">
  <div>
    <div class="columns-2">
      <div class="w-1/2">
        <lottie-animation 
          ref="anim" 
          :animationData="require('@/assets/umbrellaLanding.json')"
          :speed="1"
          @mouseover="play"
        />
      </div>
      <div class="w-1/2">
        <lottie-animation 
          ref="anim" 
          :animationData="require('@/assets/logoLanding.json')"
          :speed="1"
          @mouseover="play"
        />
      </div>
    </div> 
      
  </div>
</div>
</template>

<script>
export default {
  name: "Nav_Container",
  data: () => ({
    current: 0,
    badge: 999,
    tabs: [{ message: 'Foo', label:'About The Umbrella', name:'' }, { message: 'Bar', label:'Umbrella Software', name:'Umbrella Software' }, { message: 'Bar', label:'Umbrella Design', name:'Umbrella Design' }]
  }),
  methods: {
    goToFirst() {
      this.badge -= 1;
      this.advancedCurrent = 0;
    },
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
