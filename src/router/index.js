import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);  //使用一下路由组件

// 引入一级路由
import Home from '../components/Home';
import Deshies from '../components/deshies/Deshies';
import Order from '../components/Order';
import Manage from '../components/Manage';
import About from '../components/about/About';
import Login from '../components/Login';
import Register from '../components/Register';

//引入二级路由
import Intro from '../components/about/Intro';
import Join from '../components/about/Join';
import Contact from '../components/about/Contact';

//引入三级路由
import Email from '../components/about/contact/Email';
import QQ from '../components/about/contact/QQ';
import WeChat from '../components/about/contact/WeChat';
import HotDeshies from '../components/deshies/HotDeshies';
import CodeDeshies from '../components/deshies/CodeDeshies';
import Soup from '../components/deshies/Soup';
import Drink from '../components/deshies/Drink';
import Other from '../components/deshies/Other';


const router = new VueRouter({
  mode: 'history',  //去掉导航里面的#
  linkActiveClass: 'active',  //指定激活项的class, 当然这个active 样式是需要自己进行设定的
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      component: Home,
      name: 'homeLink'  //给路由起个名字
    },
    {
      path: '/deshies',
      component: Deshies,
      redirect: '/deshies/hotdeshies',
      children: [ //二级路由
        {
          path: '/deshies/hotdeshies',
          component: HotDeshies
        },
        {
          path: '/deshies/codedeshies',
          component: CodeDeshies
        },
        {
          path: '/deshies/soup',
          component: Soup
        },
        {
          path: '/deshies/drink',
          component: Drink
        },
        {
          path: '/deshies/other',
          component: Other
        }
      ]
    },
    {
      path: '/order',
      component: Order
    },
    {
      path: '/manage',
      component: Manage,
      name: 'manageLink',
      //路由独享守卫（只是针对当前路由，上有一个beforeEnter方法）
      // beforeEnter(to, from, next) {
      //   alert('非登录状态下，无法进行管理，请登录');
      //   next('/login');
      // }
    },
    {
      path: '/login',
      component: Login
    },
    {
      path: '/register',
      component: Register
    },
    {
      path: '/about',
      component: About,
      redirect: '/about/intro',  //点击进来的默认路由
      children: [ //配置二级路由
        {
          path: '/about/intro',
          component: Intro
        },
        {
          path: '/about/join',
          component: Join
        },
        {
          path: '/about/contact',
          component: Contact,
          redirect: '/about/contact/email',
          children: [ //三级路由
            {
              path: '/about/contact/email',
              component: Email
            },
            {
              path: '/about/contact/qq',
              component: QQ
            },
            {
              path: '/about/contact/wechat',
              component: WeChat
            }
          ]
        }
      ]
    },
    { //这个路由是当用户输入一个错误地址后跳转的页面
      path: '*',
      redirect: '/home'
    }
  ]
});
router.push('/home');

export default router
