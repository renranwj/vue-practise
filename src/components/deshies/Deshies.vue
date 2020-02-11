<template>
    <div>
        <div class="nav">
            <ul>
                <li>
                    <router-link to="/deshies/hotdeshies">热菜</router-link>
                </li>
                <li>
                    <router-link to="/deshies/codedeshies">凉菜</router-link>
                </li>
                <li>
                    <router-link to="/deshies/soup">汤类</router-link>
                </li>
                <li>
                    <router-link to="/deshies/drink">饮料</router-link>
                </li>
                <li>
                    <router-link to="/deshies/other">其他</router-link>
                </li>
            </ul>
        </div>
        <div class="box">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {

            }
        },
        methods: {

        }
    }

</script>

<style>
.nav {
        padding-left: 200px;
    }
  .nav li{
      display: inline-block;
      width: 200px;
      height: 50px;
      line-height: 50px;
      text-align: center;
  }
  .nav li a {
      display: inline-block;
      width: 100%;
      height: 100%;
      background-color: #000;
      color: #fff;
      font-size: 16px;
      border-right: 1px solid #eee;
      box-sizing: border-box;
  }
  .nav li a:hover,
  .nav li a.active {
      background-color: #ccc;
      color: #000;
  }
  .boxList li {
      margin: 10px;
      width: 400px;
      border: 3px solid chocolate;
      box-sizing: border-box;
      border-radius: 20px;
      position: relative;
      padding-bottom: 10px;
      overflow: hidden;
      display: inline-block;
      margin-right: 200px;
  }
  .boxList li img {
      width: 100%;
  }
  .boxList li h3 {
      display: inline-block;
      margin-left: 10px;
      margin-top: 10px;
  }
  .boxList li p {
    margin-left: 10px;
      margin-top: 10px;
      color: chocolate;
      margin-right: 30px;
      font-size: 20px;
      font-weight: bolder;
  }
  .boxList li .add {
      display: inline-block;
    position: absolute;
    right: 20px;
    text-align: center;
    line-height: 17px;
      margin-right: 30px;
      font-size: 20px;
      font-weight: bolder;
      color: chocolate;
      width: 20px;
      height: 20px;
      border: 3px solid chocolate;
      border-radius: 20px;
      margin-top: 40px;
      cursor: pointer;
  }
</style>