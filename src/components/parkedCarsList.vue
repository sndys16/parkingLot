<template>
    <div>
        <p> Parking Lot Size: {{lotSize}}</p>
        <p> Currently parked cars: {{carsCount}}</p>
        <div>
            <h3>List of parked cars :</h3>
            <AddNewCar/>
        </div>

        <el-table
        :data="tableData"
        stripe
        border
        height="350"
        style="width: fit-content">

            <el-table-column
              width="200"
              align="left">

              <template slot="header">
                Registration No.
                <el-popover
                  placement="top"
                  width="200"
                  title="Enter a RegNo to search :"
                  trigger="click">
                  <el-input v-model="search"/>
                  <i class="el-icon-search" slot="reference"></i>
                </el-popover>

              </template>

              <template slot-scope="scope">
                {{scope.row.registration}}
              </template>

            </el-table-column>

            <el-table-column
              prop="color"
              label="Color"
              :filters="filters"
              :filter-method="filterByColor"
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
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import AddNewCar from '@/components/addNewCar.vue';

export default {
  components: {
    AddNewCar,
  },
  data() {
    return {
      stripe: true,
      border: true,
      search: '',
    };
  },
  computed: {
    ...mapState(['parkedCars', 'lotSize', 'carsCount', 'colors']),
    filters() {
      return this.colors.map((color) => ({ text: color, value: color }));
    },
    tableData() {
      // eslint-disable-next-line arrow-body-style
      return this.parkedCars.filter((data) => {
        return !this.search || data.registration.toLowerCase().includes(this.search.toLowerCase());
      });
    },
  },
  methods: {
    handleDelete(row) {
      this.removeParkedCar(row.slot);
    },
    ...mapActions(['removeParkedCar']),
    filterByColor(value, row, column) {
      const { property } = column;
      return row[property] === value;
    },
  },
};
</script>

<style scoped>
h3 {
  display: inline-block;
}
p {
  margin-left: 50px;
  font-size: 24px;
  display: inline-block;
}
</style>
