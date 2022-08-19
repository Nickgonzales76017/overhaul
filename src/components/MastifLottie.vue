<template>
      <div id="container-lottie">
        <lottie-animation 
          ref="anim" 
          :animationData="require('@/assets/wifi.json')"
          :speed="1"
        />
      </div>
</template>

<script>
export default {
  name: "MastifLottie",
  data: () => ({

  }),
  methods: {
    
  },
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#container-lottie{
  position: relative;
  width: 10vw;
  float: left;
  
}

</style>
