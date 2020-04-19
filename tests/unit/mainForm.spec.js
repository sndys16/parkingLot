import { mount, createLocalVue } from '@vue/test-utils';
import MainForm from '@/components/mainForm.vue';
import {
  Form,
  FormItem,
  Input,
  Button,
} from 'element-ui';

const localVue = createLocalVue();
localVue.use(Form);
localVue.use(FormItem);
localVue.use(Input);
localVue.use(Button);

const getMainFormWrapper = () => {
  const wrapper = mount(MainForm, {
    localVue,
    mocks: {
      $store: {
        actions: {
          initialSetUp: jest.fn(),
        },
      },
    },
  });
  return wrapper;
};

describe('App.vue', () => {
  const wrapper = getMainFormWrapper();

  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy();
  });

  it('renders a form', () => {
    expect(wrapper.find('form.el-form').exists()).toBe(true);
  });

  it('renders 3 form items', () => {
    // console.log(wrapper.findAll('div.el-form-item'));
    expect(wrapper.findAll('div.el-form-item').length).toBe(3);
  });
});
