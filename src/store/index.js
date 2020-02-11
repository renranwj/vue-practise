import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { //存储数据
    deshiesData: [

    ],
    orderDeshies: [

    ],
    login: {
      username: "",
      isLogin: false  //当前用户是否登录
    }
  },
  getters: {  //获取数据
    getDishesData(state) {
      return state.deshiesData;
    },
    getOrder(state) {
      return state.orderDeshies
    },
    getLogin(state) {
      // console.log(state.login)
      return state.login;
    }

  },
  mutations: { //管理操作数据
    // discount (state) {

    // }
    //this.$store.commit("discount") 用来触发mutatiosn当中的事件（固定写法）

    //存储菜单数据
    stoargeDeshisData(state, data) { //第一个是state，第二个是传过来的参数
      state.deshiesData = data;  //存数据
    },
    addDeshies(state, data) {
      state.deshiesData.push(data);  //data表示添加的那道菜
    },
    delDeshies(state, data) {
      state.deshiesData.forEach((ele, index) => {
        if (ele.name == data.name) {
          state.deshiesData.splice(index, 1);
        }
      })
    },
    //存储订单数据
    storageOrder(state, data) {
      state.orderDeshies = data;
    },
    delOrder(state, index) {
      state.orderDeshies.splice(index, 1);
    },

    //存储用户信息
    storageUser (state, userMessage)  {
      let data = Object.assign({}, state.login, userMessage);
      state.login = data;
      // state.login = userMessage;
      // console.log(data)
    }




  },
  actions: {  //操作mutations
    // discount (context) { 这里的第一个参数不是state，而是一个类似store对象的实例

    // }
    //this.$store.dispatch("discount") 用来触发actions当中的事件（固定写法）
  },
  modules: {

  }


})
