import store from '@/store';

const genNewState = (isFull = false) => {
  const newState = {
    lotSize: 5,
    carsCount: 3,
    parkedCars: [
      {
        registration: 'KA-12-AS-2312',
        color: 'blue',
        slot: 1,
      },
      {
        registration: 'KA-07-IO-5369',
        color: 'red',
        slot: 2,
      },
      {
        registration: 'KA-24-GH-7781',
        color: 'white',
        slot: 3,
      },
    ],
  };
  if (isFull) newState.lotSize = newState.carsCount;
  return newState;
};

describe('Mutations', () => {
  it('Setting up initial parking lot with cars less than full capacity', () => {
    const newState = genNewState();
    store.commit('SET_UP_INITIAL_LIST', { ...newState });
    expect(store.state.parkedCars).toEqual(newState.parkedCars);
    expect(store.state.carsCount).toEqual(3);
    expect(store.state.lotSize).toEqual(5);
    expect(store.state.isFull).toBe(false);
  });

  it('Setting up initial parking lot with cars at full capacity', () => {
    const newState = genNewState(true);
    store.commit('SET_UP_INITIAL_LIST', { ...newState });
    expect(store.state.parkedCars).toEqual(newState.parkedCars);
    expect(store.state.carsCount).toEqual(3);
    expect(store.state.lotSize).toEqual(3);
    expect(store.state.isFull).toBe(true);
  });

  it('Adding a new car to the parking lot', () => {
    const newState = genNewState();
    store.commit('SET_UP_INITIAL_LIST', { ...newState });
    const newCar = {
      registration: 'KA-06-BF-3310',
      color: 'black',
      slot: 4,
    };
    const carsCountBeforeParkingNewCar = store.state.carsCount;
    store.commit('PARK_NEW_CAR', newCar);
    expect(store.state.carsCount).toBeGreaterThan(carsCountBeforeParkingNewCar);
  });

  it('Adding a new car to the parking lot when its almost full', () => {
    const newCar = {
      registration: 'KA-02-ED-0158',
      color: 'red',
      slot: 5,
    };
    const carsCountBeforeParkingNewCar = store.state.carsCount;
    store.commit('PARK_NEW_CAR', newCar);
    expect(store.state.carsCount).toBeGreaterThan(carsCountBeforeParkingNewCar);
    expect(store.state.isFull).toBe(true);
  });

  it('Removing a parked Car', () => {
    const slot = 1;
    const carsCountBeforeParkingNewCar = store.state.carsCount;
    store.commit('REMOVE_PARKED_CAR', slot);
    expect(store.state.carsCount).toBeLessThan(carsCountBeforeParkingNewCar);
    expect(store.state.isFull).toBe(false);
  });
});

describe('Actions', () => {
  it('Generating initial setup of parking lot with cars less than full capacity', () => {
    const lotSize = 2;
    const carsCount = 1;
    store.dispatch('initialSetUp', { lotSize, carsCount });
    expect(store.state.lotSize).toBe(2);
    expect(store.state.carsCount).toBe(1);
  });

  it('Removing a parked Car', () => {
    const slot = 1;
    const carsCountBeforeDispatch = store.state.carsCount;
    store.dispatch('removeParkedCar', slot);
    expect(carsCountBeforeDispatch).toBeGreaterThan(store.state.carsCount);
  });

  it('Parking a new Car when parking slot is empty', () => {
    const details = {
      registration: 'KA-02-ED-0158',
      color: 'red',
    };
    const carsCountBeforeDispatch = store.state.carsCount;
    store.dispatch('parkNewCar', { details });
    expect(carsCountBeforeDispatch).toBeLessThan(store.state.carsCount);
  });

  it('Parking a new Car', () => {
    const details = {
      registration: 'KA-02-ED-0158',
      color: 'red',
    };
    const carsCountBeforeDispatch = store.state.carsCount;
    store.dispatch('parkNewCar', { details });
    expect(carsCountBeforeDispatch).toBeLessThan(store.state.carsCount);
  });
});
