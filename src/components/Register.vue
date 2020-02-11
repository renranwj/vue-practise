<template>
    <div class="register">
        <div class="username">
            <label for="username">用户名:</label>
            <input type="text" placeholder="用户名" id="username" v-model="username">
        </div>
        <div class="passward">
            <label for="password">密码:</label>
            <input type="password" placeholder="密码" id="password" v-model="password">
        </div>
        <div class="confirm">
            <label for="confirm">确认密码:</label>
            <input type="password" placeholder="确认密码" id="confirm" v-model="confirm">
        </div>
        <div class="btn">
            <button @click="register">注册</button>
        </div>
    </div>
</template>

<!-- <script>

    //https://www.easy-mock.com/mock/5c061eec8f1be27163bf6e22/vue/getData
    export default {
        methods: {
            register() {

                //axios

                //1.get请求
                // this.$axios.get('https://www.easy-mock.com/mock/5c061eec8f1be27163bf6e22/vue/getData', {
                //     params: {
                //         name: 'haha',
                //         age: 12
                //     }
                // }).then(
                //     res => {
                //         //请求成功
                //         console.log(res);
                //     }
                // ).catch(
                //     err => {
                //         //请求失败

                //     }
                // );

                //2.post请求
                // this.$axios.post('https://www.easy-mock.com/mock/5c061eec8f1be27163bf6e22/vue/getData', {
                //     name: 'haha',
                //     age: 12
                // }).then(
                //     res => {
                //         //请求成功
                //         console.log(res);
                //     }
                // ).catch(
                //     err => {
                //         //请求失败

                //     }
                // )

                //3.method
                // this.$axios({
                //     method: 'get',
                //     url: 'https://www.easy-mock.com/mock/5c061eec8f1be27163bf6e22/vue/getData',
                //     params: {  // 如果method为get，这里使用params。如果是post，使用data
                //         name: 'hah',
                //         age: 12
                //     }
                // }).then(
                //     res => {
                //         console.log(res);
                //     }
                // ).catch(
                //     rej => {
                //         console.log('err');
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
                username: '',
                password: '',
                confirm: ''
            }
        },
        methods: {
            register () {
                // console.log(this.username);
                if(this.username == '') {
                    alert('请输入用户名');
                    return;
                }

                if(this.password == '') {
                    alert('请输入密码');
                    return;
                }

                if(this.confirm != this.password) {
                    alert('两次输入密码不一致');
                    return;
                }

                //把要传递的数据存储在一个对象里，作为数据交互的第二个参数
                const formData = {
                    username: this.username,
                    password: this.password
                }

                //请求数据接口
                this.$axios.post('http://localhost:3000/users', formData).then(
                    res => {
                        // console.log(res);
                        this.$router.push('/login');
                    }
                ).catch(
                    rej => {

                    }
                )
            }
        }
    }
</script>
<style>
    .register {
        width: 500px;
        height: 400px;
        box-sizing: border-box;
        border: 1px solid;
        border-radius: 5px;
        position: absolute;
        padding: 70px 110px 100px 0;
        margin: auto;
        left: 0;
        top: 300px;
        right: 0;
        bottom: 0;
    }

    .register div {
        margin: 20px 0;
        font-size: 20px;
        text-align: right;
    }

    .register div input {
        height: 30px;
        width: 180px;
    }

    .register div button {
        padding: 10px 30px;
    }
</style>