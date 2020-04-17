import Vue from 'vue';
import {
  Form,
  FormItem,
  Input,
  Button,
  InputNumber,
  Table,
  TableColumn,
  Dialog,
  Select,
  Option,
  Tooltip,
  Popover,
} from 'element-ui';
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';
import App from './App.vue';
import store from './store';

// configure language
locale.use(lang);

Vue.config.productionTip = false;
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(InputNumber);
Vue.use(Button);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Dialog);
Vue.use(Select);
Vue.use(Option);
Vue.use(Tooltip);
Vue.use(Popover);

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
