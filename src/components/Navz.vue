<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="10vw">
      <div id="container-lottie">
        <lottie-animation 
          ref="anim" 
          :animationData="require('@/assets/wifi.json')"
          :speed="1"
          @mouseover="play"
        />
      </div>
      </el-aside>
  
    <el-main>
      <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">

        <el-tab-pane :label="item.label" :name="item.name"  v-for="item in tabs" :key="item.message"  >{{ item.message }}</el-tab-pane>

      </el-tabs>
    </el-main>
    </el-container>
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
.el-link {

  font-size: large;
}
.el-link .el-icon--right.el-icon {
  vertical-align: text-bottom;
}
#container-lottie{
  padding: 1vw 0 0 0;
  margin-left: 5vw;
  position: relative;
  width: 5vw;
  float: left;
  
}
#container-nav-items{
  position: relative;

  float: right;
}
</style>
