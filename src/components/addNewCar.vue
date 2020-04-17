<template>
    <div class="newCarDialog">
        <el-tooltip content="Top center" placement="top">
            <el-button
                v-if="isFull"
                type="primary"
                disabled
                title="The parking lot is full"
                class="dialogButton">
                    + Add new car
            </el-button>
        </el-tooltip>
        <el-button
            v-if="!isFull"
            type="primary"
            @click="dialogFormVisible = true"
            class="dialogButton">
                + Add new car
        </el-button>
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
                <el-button
                    type="primary"
                    :disabled="disabled"
                    @click="addNewCar">
                        Confirm
                </el-button>
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
    ...mapState(['colors', 'isFull']),
    disabled() {
      return !(this.form.regNo && this.form.color);
    },
  },
};
</script>

<style scoped>
.newCarDialog {
    display: inline-block;
}
.dialogButton {
    height: 41px;
    font-size: 16px;
    margin-left: 20px;
    vertical-align: text-bottom;
}
</style>
