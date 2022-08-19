<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-container>
          <el-main>Main</el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
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

</style>
