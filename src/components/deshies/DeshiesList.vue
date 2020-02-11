<template>
  <div class="DeshiesList">
    <ul class="boxList">
      <li v-for="item in this.deshies" :key="item.id">
        <h3>{{item.name}}</h3>
        <span class="add" @click="order(item)">+</span>
        <p>
          RMB
          <strong>{{item.price}} /份</strong>
        </p>
      </li>
    </ul>
  </div>
</template>
  
  <script>
export default {
  name: "DeshiesList",
  
  methods: {
    order(item) {
      this.$axios({
        method: "get",
        url: "http://localhost:3001/order"
      })
        .then(res => {
          let click = false,
            num = 0,
            id = 0;
          if (res.data) {
            // 已经有菜品被点击了
            for (let prop of res.data) {
              if (item.name == prop.name) {
                //找到对应的菜品
                id = prop.id;
                num = prop.num; // 将之前点击过的数量给到num,
                // console.log(prop.num)
                click = true; //已经点击过的
                break;
              }
            }
          }
          return {
            click,
            num,
            id
          };
        })
        .then(res => {
          if (res.click) {
            //已经点击过的 更新数据
            item.num++;
            res.num++;
            // console.log(item.num);
            this.$axios({
              method: "put",
              url: "http://localhost:3001/order/" + res.id,
              data: item
            }).then(res => {});
          } else {
            //未被点击过的，发送数据
            item.num++;
            this.$axios({
              method: "post",
              url: "http://localhost:3001/order",
              data: item
            }).then(res => {});
          }
        })
        .catch(rej => {});
    }
  },
  props: ["fatherName"],
  created() {
    this.$axios
      .get("http://localhost:3001/deshies")
      .then(res => {
          let result = []; 
        // const deshiesLen = res.data.length;
        // for (let i = 0; i < deshiesLen; i++) {
        //   if (res.data[i].classify == this.fatherName) {
        //     this.deshies.push(res.data[i]);
        //   }
        // }
        for(let prop in res.data) {
          result.push(res.data[prop]);
        }
        // console.log(result)
        this.$store.commit('stoargeDeshisData', result); //通过触发自定义事件，将请求的数据发过去
      })
      .catch(rej => {
        console.log(rej);
      });
  },
  computed: {
    deshies () {
      return this.$store.getters.getDishesData.filter(ele => {
        return ele.classify == this.fatherName;
      });
    }
  }
};
</script>
  
  <style>
</style>


