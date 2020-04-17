<template>
  <div id="app">

    <MainForm/>
    <ParkedCarsList v-if="parkedCars.length"/>

  </div>
</template>

<script>
import MainForm from '@/components/mainForm.vue';
import ParkedCarsList from '@/components/parkedCarsList.vue';
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    MainForm,
    ParkedCarsList,
  },
  computed: mapState(['parkedCars']),
};
</script>

<style scoped>
#app{
  font: 32px sans-serif;
  width: fit-content;
  margin: auto;
  margin-top: 40px;
}
</style>
