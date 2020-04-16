<template>
    <el-table
    :data="parkedCars"
    style="width: 100%">
        <el-table-column
        prop="registration"
        label="Registration"
        width="380"/>
        <el-table-column
        prop="color"
        label="Color"
        width="180"/>
        <el-table-column
        prop="slot"
        label="Parking Slot"
        width="100"/>
    </el-table>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState(['parkedCars']),
};
</script>

<style>

</style>
