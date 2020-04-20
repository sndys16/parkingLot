import { mount, createLocalVue } from '@vue/test-utils';
import ParkedCarsList from '@/components/parkedCarsList.vue';
import {
  Form,
  FormItem,
  Input,
  Button,
  Table,
  TableColumn,
  Tooltip,
  Dialog,
  Select,
  Option,
  Popover,
} from 'element-ui';
import AddNewCar from '@/components/addNewCar.vue';

const localVue = createLocalVue();
localVue.use(Form);
localVue.use(FormItem);
localVue.use(Input);
localVue.use(Button);
localVue.use(Table);
localVue.use(TableColumn);
localVue.use(Dialog);
localVue.use(Select);
localVue.use(Option);
localVue.use(Popover);
localVue.use(Tooltip);

const getParkedCarsListWrapper = () => {
  const wrapper = mount(ParkedCarsList, {
    localVue,
    mocks: {
      $store: {
        state: {
          parkedCars: [
            {
              registration: 'KA-12-AS-2345',
              color: 'blue',
              slot: 1,
            },
            {
              registration: 'KA-92-QS-1368',
              color: 'white',
              slot: 2,
            },
            {
              registration: 'KA-19-AS-6475',
              color: 'red',
              slot: 3,
            },
          ],
          lotSize: 4,
          carsCount: 3,
          colors: ['black', 'white', 'red', 'blue'],
        },
        actions: {
          removeParkedCar: jest.fn(),
        },
      },
    },
  });
  return wrapper;
};

describe('ParkedCarsList.vue', () => {
  const wrapper = getParkedCarsListWrapper();

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('renders AddNewCar component', () => {
    expect(wrapper.find(AddNewCar).exists()).toBe(true);
  });

  it('renders table with 4 rows (1 being table header) as store has 3 parkedcars', () => {
    expect(wrapper.find('div.el-table').exists()).toBe(true);
    expect(wrapper.findAll('tr').length).toBe(4);
  });
});
