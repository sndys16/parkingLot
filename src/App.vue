<template>
  <div id="app">

    <div class="form-group">
      <label for="lotSize">Parking Lot Capacity: </label>
      <el-input name="lotSize" v-model.number="N" :min="1"></el-input>
    </div>

    <div class="form-group">
      <label for="lotSize">Initial number of cars: </label>
      <el-input name="lotSize" v-model.number="m" :min="0"></el-input>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data() {
    return {
      N: 1,
      m: 0,
    };
  },
  methods: {
  },
};
</script>

<style scoped>
#app{
  margin: 20px;
}
.el-input{
  width: 120px;
}
.form-group{
  display: inline-block;
  margin: 0 10px;
}
</style>
