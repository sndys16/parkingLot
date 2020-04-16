<template>
    <div class="newCarDialog">
        <el-button type="text" @click="dialogFormVisible = true" id="dialogButton">
            + Add new car to the parking lot</el-button>

        <el-dialog title="Enter details of the car" :visible.sync="dialogFormVisible">
            <el-form :model="form">
                <el-form-item label="Vehicle Registration Number" :label-width="formLabelWidth">
                    <el-input v-model="form.regNo" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="Color" :label-width="formLabelWidth">
                    <el-select v-model="form.color" placeholder="Please select a color">
                      <el-option v-for="color in colors" :value="color" :label="color" :key="color">
                      </el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">Cancel</el-button>
                <el-button type="primary" @click="addNewCar">Confirm</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      dialogFormVisible: false,
      form: this.createNewCar(),
      formLabelWidth: '240px',
    };
  },
  methods: {
    addNewCar() {
      this.dialogFormVisible = false;
      this.parkNewCar(this.form);
      this.form = this.createNewCar();
    },
    ...mapActions(['parkNewCar']),
    createNewCar() {
      return {
        regNo: '',
        color: '',
      };
    },
  },
  computed: {
    ...mapState(['colors']),
  },
};
</script>

<style scoped>
.newCarDialog {
    display: inline-block;
}
#dialogButton {
    height: 44px;
    font-size: 24px;
    margin-left: 20px;
}
</style>
