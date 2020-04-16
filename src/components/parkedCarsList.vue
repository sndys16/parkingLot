<template>
    <el-table
    :data="parkedCars"
    stripe
    border
    height="350"
    style="width: fit-content">
        <el-table-column
        prop="registration"
        label="Registration No."
        width="250"/>
        <el-table-column
        prop="color"
        label="Color"
        width="150"/>
        <el-table-column
        prop="slot"
        label="Parking Slot"
        width="150"/>
        <el-table-column
        label="Operations"
        width="150">
            <template slot-scope="scope">
                <!-- dont know what this slot-scope is, just copy pasta from element ui docs -->
                <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.row)">Delete</el-button>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  data() {
    return {
      stripe: true,
      border: true,
    };
  },
  computed: mapState(['parkedCars']),
  methods: {
    handleDelete(row) {
      this.removeParkedCar(row.slot);
    },
    ...mapActions(['removeParkedCar']),
  },
};
</script>

<style>

</style>
