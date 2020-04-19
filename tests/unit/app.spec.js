import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import App from '@/App.vue';
import ParkedCarsList from '@/components/parkedCarsList.vue';
import MainForm from '@/components/mainForm.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

const getAppWrapper = (parkedCars = []) => {
  const store = new Vuex.Store({
    state: {
      parkedCars: [...parkedCars],
    },
  });
  const wrapper = shallowMount(App, { store, localVue });
  return wrapper;
};

describe('App.vue', () => {
  const wrapper = getAppWrapper();

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('renders a div with id app', () => {
    expect(wrapper.contains('div#app')).toBe(true);
  });

  it('renders MainForm component', () => {
    expect(wrapper.find(MainForm).exists()).toBe(true);
  });

  it('renders ParkedCarsList when vuex has data in parkedCars array', () => {
    const wrapper2 = getAppWrapper([{ registration: 'KA-12-AS-2345', slot: 1, color: 'blue' }]);
    expect(wrapper2.find(ParkedCarsList).exists()).toBe(true);
  });

  it('does not render ParkedCarsList when vuex has no data in parkedCars array', () => {
    expect(wrapper.find(ParkedCarsList).exists()).toBe(false);
  });
});
