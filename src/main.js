import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import echarts from "echarts";
import * as Three from "three";
import _ from "lodash";
import "./plugins/element.js";
import './assets/basic_style.less';
import api from "@/Api/api";
import commonFunc from "@assets/commonFunc"

Vue.config.productionTip = false;
Vue.prototype.$api = api;
global.echarts = echarts;
global.THREE = Three;
global._ = _
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app")