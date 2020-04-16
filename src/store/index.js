import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    lotSize: '',
    carsCount: '',
    parkedCars: [],
    colors: ['black', 'white', 'red', 'blue'],
    isFull: false,
  },
  mutations: {
    SET_UP_INITIAL_LIST(state, { lotSize, carsCount, parkedCars }) {
      state.lotSize = lotSize;
      state.carsCount = carsCount;
      state.parkedCars = parkedCars;
      if (lotSize === carsCount) state.isFull = true;
    },
    REMOVE_PARKED_CAR(state, slot) {
      state.parkedCars = state.parkedCars.filter((parkedCar) => parkedCar.slot !== slot);
      state.isFull = false;
    },
    PARK_NEW_CAR(state, car) {
      state.parkedCars.push(car);
      if (state.lotSize === state.parkedCars.length) state.isFull = true;
    },
  },
  actions: {
    initialSetUp({ state, commit }, { lotSize, carsCount }) {
      const parkedCars = [];
      for (let i = 0; i < carsCount; i += 1) {
        const parkedCar = {};
        parkedCar.color = state.colors[Math.floor((Math.random() * 4))];
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
    removeParkedCar({ commit }, slot) {
      commit('REMOVE_PARKED_CAR', slot);
    },
    parkNewCar({ state, commit }, details) {
      if (!state.isFull) {
        const car = { registration: '', color: '' };
        car.registration = details.regNo;
        car.color = details.color;
        if (state.parkedCars.length === 0) car.slot = 1;
        else {
          const usedSlots = new Set(state.parkedCars.map((parkedCar) => parkedCar.slot));
          for (let q = 1; q <= usedSlots.size + 1; q += 1) {
            if (!usedSlots.has(q)) {
              car.slot = q;
              break;
            }
          }
        }
        commit('PARK_NEW_CAR', car);
      }
    },
  },
  modules: {
  },
});
