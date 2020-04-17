<template>

    <el-form :inline="true" :model="form" label-width="auto" :rules="rules">

      <el-form-item label="Total number of parking spaces:" prop="parkingLotSize">
        <el-input v-model.number="form.lotSize" ></el-input>
      </el-form-item>

      <el-form-item label="Initial number of cars:">
        <el-input v-model.number="form.carsCount" ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button
            type="primary"
            :disabled="disabled"
            @click="onSubmit">
                Create parking Lot
        </el-button>
      </el-form-item>

    </el-form>

</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      form: this.newSetUp(),
      rules: {
        parkingLotSize: [
          { required: true, message: 'Please eneter the total number of parking spaces' },
          { type: 'number', message: 'Please eneter a valid number' },
        ],
      },
    };
  },
  methods: {
    onSubmit() {
      this.initialSetUp(this.form);
      this.form = this.newSetUp();
    },
    ...mapActions(['initialSetUp']),
    newSetUp() {
      return {
        lotSize: '',
        carsCount: '',
      };
    },
  },
  computed: {
    disabled() {
      return !((this.form.lotSize > 0)
      && (this.form.carsCount > 0)
      && (this.form.lotSize > this.form.carsCount));
    },
  },
};
</script>

<style scoped>
.el-input{
  width: 120px;
  font-size: 16px;
}
</style>
