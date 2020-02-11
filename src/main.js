import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueResource from 'vue-resource';   //数据交互 引入vue-resource 
import Axios from 'axios';  //数据交互 引入axios
import store from './store'

Vue.config.productionTip = false

Vue.use(VueResource); //使用

Vue.prototype.$axios = Axios;  //把axios存在Vue的原型身上是为了在其他的组件里面都可以使用

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');


// 1.全局守卫

// router.beforeEach((to, from, next) => { // 在所有路由展示前触发
//   // alert('您还没有登录，请登录');
//   //to 即将要进入到的路由，值为路由
//   // from  离开的路由（从哪个路由离开），值为路由
//   // next 值为函数，这个函数决定你接下来要展示的路由页面（调用这个方法之后，对应点击的路由的页面就会显示了）
//   // next();
//   // console.log(to);


//   if(to.path === '/login') { //如果点击的是登录的路由，直接跳转
//     next();
//   }else { // 如果不是登录的路由，直接跳转到登录的路由
//     alert('您还没有登录，请登录');
//     next('/login');
//   }
// });

//2.后置勾子（路由展示后触发，其实没有多大的意义）
// router.afterEach((to, from) => {
//   alert('这是后置勾子函数')
// });


//3.路由独享的守卫（在当前路由展示前触发，在router中来实现）

//4.组件内守卫（针对某一个组件，有一个守卫的功能）
//  manage (管理组件)