import Vue from 'vue';
import Router from 'vue-router';
import { Tabs, Tab } from 'vue-tabs-component';
import Main from '@/components/main';
import InputField from '@/components/inputField';
import DropZone from '@/components/dropZone';
import ViewHtml from '@/components/viewHtml';
import Item from '@/components/item';
import Modal from '@/components/modal';
import '../css/tab.scss';

Vue.component('InputField', InputField);
Vue.component('DropZone', DropZone);
Vue.component('ViewHtml', ViewHtml);
Vue.component('Item', Item);
Vue.component('Modal', Modal);
Vue.component('tabs', Tabs);
Vue.component('tab', Tab);

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
    },
  ],
  mode: 'history',
});
