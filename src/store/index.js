import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lotSize: '',
    carsCount: '',
    parkedCars: [],
  },
  mutations: {
    SET_UP_INITIAL_LIST(state, { lotSize, carsCount, parkedCars }) {
      state.lotSize = lotSize;
      state.carsCount = carsCount;
      state.parkedCars = parkedCars;
    },
  },
  actions: {
    initialSetUp({ commit }, { lotSize, carsCount }) {
      const parkedCars = [];
      const colors = ['black', 'white', 'red', 'blue'];
      for (let i = 0; i < carsCount; i += 1) {
        const parkedCar = {};
        parkedCar.color = colors[Math.floor((Math.random() * 4))];
        parkedCar.slot = i + 1;
        parkedCar.registration = 'KA-';
        // 1st 2 integers
        parkedCar.registration += Math.floor((Math.random() * 10));
        parkedCar.registration += Math.floor((Math.random() * 10));
        parkedCar.registration += '-';
        // next 2 alpahbets
        parkedCar.registration += String.fromCharCode(65 + Math.floor((Math.random() * 10)));
        parkedCar.registration += String.fromCharCode(65 + Math.floor((Math.random() * 10)));
        parkedCar.registration += '-';
        // last 4 integers
        for (let j = 0; j < 4; j += 1) {
          parkedCar.registration += Math.floor((Math.random() * 10));
        }
        parkedCars.push(parkedCar);
      }
      commit('SET_UP_INITIAL_LIST', { lotSize, carsCount, parkedCars });
    },
  },
  modules: {
  },
});
