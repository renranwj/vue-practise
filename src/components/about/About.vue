<template>
    <div>
        <div class="nav">
            <!-- 最上面的导航 -->

            <ul>
                <li>
                    <router-link to="/about/intro">公司简介</router-link>
                </li>
                <li>
                    <router-link to="/about/join">加入我们</router-link>
                </li>
                <li>
                    <router-link to="/about/contact">联系我们</router-link>
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

    }


</script>

<!-- scoped 给样式分配一个作用域，只在当前组件内生效 -->
<style scoped>
    .nav {
        padding-left: 200px;
    }

    .nav li {
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
        background-color: darkblue;
        color: #fff;
        font-size: 16px;
        border-right: 1px solid #eee;
        box-sizing: border-box;
    }

    .nav li a:hover,
    .nav li a.active {
        background-color: #ccc;
        color: darkblue;
    }
</style>