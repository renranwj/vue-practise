<template>
    <div class="app">
        <div class="username">
            <div class="sideLogin" v-show="!loginMes.isLogin">
                <p>
                    <router-link to="/login">登录</router-link> &nbsp;&nbsp;&nbsp;
                    <router-link to="/register">注册</router-link>
                </p>
            </div>
            <div class="sideLogined" v-show="loginMes.isLogin">
                <p> {{loginMes.username}} </p>
                <p>锦衣卫经历</p>
                <p>1234567@qq.com</p>
                <router-link to="/login">[退出]</router-link>
            </div>
        </div>
        <ul class="sliderBar">
            <li>
                <!-- 指定跳转标签 tag -->
                <!-- <router-link to="/home" tag="div">主页</router-link> -->
                <!-- 用属性名代替具体的路由地址 -->
                <!-- <router-link :to="homeLink">主页</router-link> -->
                <!-- 用路由的名字进行跳转 -->
                <!-- <router-link :to="{name:'homeLink'}">主页</router-link> -->
                <router-link to="/home">主页</router-link>
            </li>
            <li>
                <router-link to="/deshies">菜品</router-link>
            </li>
            <li>
                <router-link to="/order">订单</router-link>
            </li>
            <li>
                <router-link to="/manage">管理</router-link>
            </li>
            <li>
                <router-link to="/about">关于</router-link>
            </li>
        </ul>
    </div>
</template>

<script>

    // export default {
    //     data () {
    //         return {
    //             homeLink: '/home'
    //         }
    //     }
    // }

    export default {
       
        created () {
            // 一上来需要获取本地存储，并且发送到store里面
            // localStorage.removeItem('loginMessage')
            const user = localStorage.getItem('loginMessage');
            // console.log(user)

            //如果用户是第一次打开这个项目，并没有登陆过，user为null，就发送一个空的
            let userMessage = {
                username: "",
                islogin: false
            }
            if(user) { //如果有值（登陆过）,
        
            // console.log(JSON.parse(user))
                userMessage = JSON.parse(user);
                // console.log(typeof(userMessage))
            }
            this.$store.commit('storageUser', userMessage);
            // console.log(this.loginMes)
            // console.log(this.loginMes.isLogin)
            // console.log(this.loginMes.username)
        },
         computed: {
            loginMes () {
                return this.$store.getters.getLogin;
            }
        }
    }
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
        list-style: none;
    }

    .app {
        width: 200px;
        /* border: 1px solid ; */
        background: #eee;
    }

    .app .username {
        line-height: 30px;
        padding: 200px 0 0 20px;
        border-bottom: 2px solid #eee;
    }

    ul.sliderBar {
        width: 100%;
    }

    ul.sliderBar li {
        box-sizing: border-box;
        display: inline-block;
        height: 50px;
        width: 100%;
        line-height: 50px;
        text-align: center;
        border-bottom: 1px solid #000;
        font-weight: 600;
    }

    ul.sliderBar li a {
        display: inline-block;
        width: 100%;
        height: 100%;
        text-align: center;
        color: #fff;
        background-color: crimson;
    }

    ul.sliderBar li a:hover,
    ul.sliderBar li a.active {
        color: crimson;
        background-color: #abc;
        border-bottom: 1px solid #eee;
    }
</style>