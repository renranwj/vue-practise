<template>
  <div class="order">
    <nav class="conNav">
      <ul>
        <li>
          <a href="#">订单页</a>
        </li>
      </ul>
    </nav>
    <div class="box">
      <table>
        <thead>
          <tr>
            <th colspan="4">单号：0514954975979</th>
            <th colspan="4">
              <button class="submit">提交订单</button>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>序号</td>
            <td>菜名</td>
            <td>单价</td>
            <td>数量</td>
            <td>价格</td>
            <td>种类</td>
            <td>删除</td>
          </tr>
          <tr v-for="(item, index) in orderList" :key="item.id">
            <td>{{index + 1}}</td>
            <td>{{item.name}}</td>
            <td>{{item.price + '.00'}}</td>
            <td>
              <span class="btn reduce" @click="reduce(item, index)">-</span>
              <input type="text" class="num" v-model="item.num" />
              <span class="btn add" @click="add(item)">+</span>
            </td>
            <td>{{item.price * item.num + ".00"}}</td>
            <td>{{item.classify}}</td>
            <td>
              <button class="dele" @click="deleDeshies(item, index)">删除</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    
    methods: {
      reduce(item, index) {
        //修改数据
        item.num--;
        if (item.num == 0) {
          this.deleDeshies(item, index);
        } else {
          this.$axios({
            method: "put",
            url: "http://localhost:3001/order/" + item.id,
            data: item
          });
        }
      },
      add(item) {
        item.num++;
        this.$axios({
          method: "put",
          url: "http://localhost:3001/order/" + item.id,
          data: item
        });
      },
      deleDeshies(item, index) {
        item.num = 0;
        this.$axios({
          method: "delete",
          url: "http://localhost:3001/order/" + item.id
        }).then(res => {
          // this.orderList.splice(index, 1);
          this.$store.commit('delOrder', index)

        });
      }
    },
    created() {
      this.$axios.get("http://localhost:3001/order").then(res => {
        // this.orderList = res.data;
        // console.log(res.data)
        this.$store.commit('storageOrder', res.data);
      });
    },
    computed: {
      orderList () {
        return this.$store.getters.getOrder;
      }
    }
  };
</script>


<style>
  table {
    /* 设置边框为一条框线 */
    border-collapse: collapse;
    position: absolute;
    left: 50%;
    top: 100px;
    transform: translatex(-50%);
    border: 1px solid chocolate;
  }

  td,
  th {
    border: 2px solid chocolate;
    height: 50px;
    padding: 10px 15px;
    text-align: center;
  }

  .submit,
  .dele {
    padding: 5px 8px;
    background-color: chocolate;
    color: #fff;
    border: none;
    border-radius: 5px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);
    outline: none;
    cursor: pointer;
  }

  .btn {
    display: inline-block;
    width: 15px;
    height: 18px;
    line-height: 18px;
    border: 1px solid #aaa;
    vertical-align: middle;
    text-align: center;
    padding: 0 5px;
    cursor: pointer;
  }

  .num {
    width: 20px;
    outline: none;
    text-align: center;
  }
</style>