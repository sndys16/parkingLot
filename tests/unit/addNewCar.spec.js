import { mount, createLocalVue } from '@vue/test-utils';
import AddNewCar from '@/components/addNewCar.vue';
import {
  Form,
  FormItem,
  Input,
  Button,
  Tooltip,
  Dialog,
  Select,
  Option,
} from 'element-ui';

const localVue = createLocalVue();
localVue.use(Form);
localVue.use(FormItem);
localVue.use(Input);
localVue.use(Button);
localVue.use(Dialog);
localVue.use(Select);
localVue.use(Option);
localVue.use(Tooltip);

const getAddNewCarWrapper = (isFull = false) => {
  const wrapper = mount(AddNewCar, {
    localVue,
    mocks: {
      $store: {
        state: {
          isFull,
          colors: ['black', 'white', 'red', 'blue'],
        },
        actions: {
          parkNewCar: jest.fn(),
        },
      },
    },
  });
  return wrapper;
};

describe('AddNewCar.vue', () => {
  const wrapper = getAddNewCarWrapper();

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('renders an enabled button when isFull is false', () => {
    expect(wrapper.find('button').attributes().disabled).not.toBeDefined();
  });

  it('renders an disabled button with a tooltip when isFull is true', () => {
    const wrapper1 = getAddNewCarWrapper(true);
    expect(wrapper1.find('button').attributes().disabled).toBeDefined();
    expect(wrapper1.find('button').attributes().title).toBe('The parking lot is full');
  });

  it('renders an dialog with a form of 2 fields and 2 buttons when add new car button is clicked', async () => {
    wrapper.find('button').trigger('click');

    await wrapper.vm.$nextTick();

    expect(wrapper.contains('div.el-dialog__wrapper')).toBe(true);
    expect(wrapper.contains('form')).toBe(true);
    expect(wrapper.find('form').findAll('div.el-form-item').length).toBe(2);
    expect(wrapper.find('div.el-dialog__footer').findAll('button').length).toBe(2);
  });

});
