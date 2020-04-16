<template>

    <el-form :inline="true" :model="form" label-width="auto">

      <el-form-item label="Parking Lot Capacity:">
        <el-input-number v-model.number="form.lotSize" ></el-input-number>
      </el-form-item>

      <el-form-item label="Initial number of cars:">
        <el-input-number v-model.number="form.carsCount" ></el-input-number>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">Create parking Lot</el-button>
      </el-form-item>

    </el-form>

</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      form: {
        lotSize: '',
        carsCount: '',
      },
    };
  },
  methods: {
    onSubmit() {
      this.initialSetUp(this.form);
    },
    ...mapActions(['initialSetUp']),
  },
};
</script>

<style scoped>
.el-input{
  width: 120px;
  font-size: 16px;
}
</style>
