<template>
  <div id="manage">
    <h2>管理页</h2>
    <div class="manageCon">
      <div class="add">
        <h3>添加菜品</h3>
        <div class="group">
          <label for="name">菜名：</label>
          <input type="text" id="name" v-model="newDeshies.name" />
        </div>
        <div class="group">
          <label for="classify">分类：</label>
          <input type="text" id="classify" v-model="newDeshies.classify" />
        </div>
        <div class="group">
          <label for="price">单价：</label>
          <input type="text" id="price" v-model="newDeshies.price" />
        </div>

        <div class="addBtn">
          <button @click="addDishes">添加</button>
        </div>
      </div>
      <div class="delete">
        <h3>删除菜品</h3>
        <div class="group1" v-for="item in totalDishes" :key="item.id">
          <span>{{item.name}}</span>
          <a href="javascript:;" @click="deleDeshies(item)">删除</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "manage",
    methods: {
      addDishes() {
        //   添加菜品
        if (
          this.newDeshies.name == "" ||
          this.newDeshies.classify == "" ||
          this.newDeshies.price == ""
        ) {
          alert("请输入内容");
          return;
        }
        this.$axios
          .post("http://localhost:3001/deshies", this.newDeshies)
          .then(res => {
            // switch (this.newDeshies.classify) {
            //   case "热菜":
            //     this.$router.push("/deshies/hotdeshies");
            //     break;
            //   case "凉菜":
            //     this.$router.push("/deshies/codedeshies");
            //     break;
            //   case "汤":
            //     this.$router.push("/deshies/soup");
            //     break;
            //   case "饮料":
            //     this.$router.push("/deshies/drink");
            //     break;
            //   case "其他":
            //     this.$router.push("/deshies/other");
            //     break;
            // }
            //res.config.data 添加的那道菜，是字符串
            this.$store.commit('addDeshies', JSON.parse(res.config.data))
            // console.log(res.config.data)
            this.newDeshies.name = "";
            this.newDeshies.classify = "";
            this.newDeshies.price = "";
          })
          .catch(rej => { });
      },
      deleDeshies(item) {
        // console.log(item)
        this.$axios({
          method: "delete",
          url: "http://localhost:3001/deshies/" + item.id
        })
          .then(res => {
            // switch (item.classify) {
            //   case "热菜":
            //     this.$router.push("/deshies/hotdeshies");
            //     break;
            //   case "凉菜":
            //     this.$router.push("/deshies/codedeshies");
            //     break;
            //   case "汤":
            //     this.$router.push("/deshies/soup");
            //     break;
            //   case "饮料":
            //     this.$router.push("/deshies/drink");
            //     break;
            //   case "其他":
            //     this.$router.push("/deshies/other");
            //     break;
            // }
            this.$store.commit('delDeshies', item)
          })
          .catch(rej => {
            console.log(rej);
          });
      }
    },
    created() {
      //页面实例创建完成后触发，一般数据请求放在这个里面
      this.$axios
        .get("http://localhost:3001/deshies")
        .then(res => {
          // this.totalDishes = res.data;
          // let result = [];
          // for (let prop in res.data) {
          //   result.push(res.data[prop]);
          // }
          // console.log(result)
          console.log(res.data)

          this.$store.commit('stoargeDeshisData', res.data);
        })
        .catch(rej => {
          console.log(rej);
        });
    },
    computed: {
      totalDishes() {
        return this.$store.getters.getDishesData;
      }
    },
    data() {
      return {
        newDeshies: {
          name: "",
          classify: "",
          price: "",
          num: 0, //代表菜品被点击的多少次，为了在订单获取数据的时候，取到这个属性
          // id: ''
        },
        // totalDishes: []
      };
    }
  };

// export default {
//     name: "manage",
//     data () {
//         return {
//             name: '任嘉伦'
//         }
//     },
//     // 组件内守卫
//     // beforeRouteEnter(to, from, next) {
//     //     //当前组件被调用前
//     //     // alert('nihso');

//     //     // alert(this.name);  报错，beforeRouteEnter不能狗访问this对象，因为守卫触发时组件还没有被创建
//     //     //需要使用this 时，可以使用next方法（当作回调还看）
//     //     // next(vm => { //这个vm就相当于this
//     //     //     alert(vm.name);
//     //     // });
//     // },
//     // beforeRouteUpdate(to, from, next) {
//     //     //当前组件改变时调用
//     // },
//     // beforeRouteLeave(to, from, next) {
//     //     //离开组件时调用
//     //     const answer = confirm('你确定要离开吗？');
//     //     if(answer) {
//     //         next();
//     //     }else {
//     //         next(false);  //中断当前路由的跳转
//     //     }
//     // }
// }
</script>

<style scoped>
  .add {
    position: absolute;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid #aaa;
  }

  .delete {
    position: absolute;
    top: 400px;
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid #aaa;
  }

  .group {
    width: 500px;
    height: 50px;
    text-align: center;
  }

  .group label {
    font-size: 18px;
  }

  .group input {
    width: 60%;
    height: 30px;
  }

  .group1 {
    width: 500px;
    height: 40px;
    line-height: 40px;
  }

  .group1 a {
    float: right;
  }
</style>