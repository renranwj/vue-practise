<template>
    <div class="login">
        <div class="username">
            <label for="username">用户名:</label>
            <input type="text" placeholder="用户名" id="username" v-model="username">
        </div>
        <div class="passward">
            <label for="password">密码:</label>
            <input type="password" placeholder="密码" id="password" v-model="password">
        </div>
        <div class="btn">
            <button @click="login" class="loginBtn">登录</button>
        </div>
    </div>
</template>

<!-- <script>
    export default {
        methods: {
            login() {

                // vue-resource 请求

                //1.get请求
                // this.$http.get('https://www.easy-mock.com/mock/5c061eec8f1be27163bf6e22/vue/getData', {
                //     params: { //带的参数
                //         name: 'wangjingjing',
                //         age: 22
                //     }
                // }).then(
                //     res => {
                //         //请求成功回调
                //         console.log(res);
                //     },
                //     rej => {
                //         //请求失败回调
                //         console.log(err);
                //     }
                // )


                //2.post请求
                // this.$http.post('https://www.easy-mock.com/mock/5c061eec8f1be27163bf6e22/vue/getData', {
                //     //传参数，直接传
                //     name: '任嘉伦',
                //     age: 23
                // }).then(
                //     res => {
                //         //请求成功
                //         console.log(res);
                //     },
                //     rej => {
                //         //请求失败
                //         console.log('err')
                //     }
                // )

                //3.JSONP请求
                // this.$http.jsonp('https://api.douban.com/v2/movie/search', {
                //     params: {
                //         q: '你',
                //         start: 0
                //     }
                // }).then(
                //     res => {
                //         //请求成功
                //         console.log(res);
                //     },
                //     rej => {
                //         //请求失败
                //         console.log('err')
                //     }
                // )
            }
        }
    }



</script> -->


<script>
    export default {
        data () {
            return {
                username: "",
                password: ""
            }
        },
        // 组件内的守卫，进入前被触发。
        beforeRouteEnter (to, from, next) {
            next(vm =>{  //vm就相当于this
                // 本地存储，删除
                localStorage.removeItem('loginMessage');
                //更新store.js
                vm.$store.commit('storageUser', {username: "", isLogin: false})
            })
        },
        methods: {
            login () {
                if(!this.username || !this.password) {
                    alert('请输入用户名和密码！');
                    return;
                }

                this.$axios.get('http://localhost:3001/users').then(
                    res => {
                        let logined = false;
                        for(let ele of res.data) {
                            if(ele.username == this.username && ele.password == this.password) {
                                // alert('登录成功！');
                                logined = true;
                                // 登录成功了，用户信息存储到localstorage中
                                const local = {
                                    "username": this.username,
                                    "isLogin": true
                                }
                                // 进行本地存储
                                localStorage.setItem('loginMessage', JSON.stringify(local));
                                // console.log(local)
                                this.$store.commit('storageUser', local)
                                this.$router.push('/home');
                                break;//匹配成功后，后面的数据就不需要在进行匹配了，直接跳出循环
                            }else {
                                logined = false;
                            }
                        }
                        if(!logined) {
                            alert('用户名或者密码错误');
                        }
                    }
                ).catch(
                    rej => {
                        console.log(rej);
                    }
                )
            }
        }
    }



</script>
<style>
    .login {
        width: 400px;
        height: 300px;
        box-sizing: border-box;
        border: 1px solid;
        border-radius: 5px;
        position: absolute;
        padding: 70px 110px 100px 0;
        margin: auto;
        left: 0;
        top: 400px;
        right: 0;
        bottom: 0;
    }

    .login div {
        margin: 20px 0;
        font-size: 20px;
        text-align: right;
    }

    .login div input {
        height: 30px;
        width: 180px;
    }

    .login div button {
        padding: 10px 30px;
    }
    .loginBtn {
        margin-left: 200px;
    }
</style>