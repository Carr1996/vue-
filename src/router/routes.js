
const routes = [
  {
    path: '/',
    redirect: 'echarts/line'
  },
  {
    name: "echarts",
    path: "/echarts",
    icon: "el-icon-s-data",
    component: () => import('../views/echarts_index.vue'),
    children: [
      { name: "折线图（带背景色）", path: "line", component: resolve => require(['../components/Echats/lineChartOne.vue'], resolve) },
      { name: "柱状图", path: "bar", component: resolve => require(['../components/Echats/barChartOne.vue'], resolve) },
      { name: "横向气泡图", path: "scatter", component: resolve => require(['../components/Echats/scatterChartOne.vue'], resolve) },
      { name: "饼图", path: "pie", component: resolve => require(['../components/Echats/pieChartOne.vue'], resolve) },
      { name: "迁徙地图", path: "effectScatter", component: resolve => require(['../components/Echats/effectScatter.vue'], resolve) },
    ]
  },
  {
    name: "threeJS",
    path: "/threeJS",
    icon: "el-icon-attract",
    component: () => import('../views/threeJS_index.vue')
  },
  {
    name: "canvas",
    path: "/canvas",
    icon: "el-icon-document",
    disabled: true,
    component: () => import('../views/canvas_index.vue'),
    children: [
      { name: "基础", path: "basic", component: resolve => require(['../components/Canvas/basicCanvas.vue'], resolve) },
    ]
  },
  {
    name: "常规效果",
    path: "/common_content",
    icon: "el-icon-ice-cream-round",
    component: () => import('../components/Common_content/common_content.vue')
  },
]
export default routes;
