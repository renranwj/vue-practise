<template>
  <div>
      <h1>联系我们</h1>
    <ul>
      <li>
        <router-link tag="h3" to="/about/contact/email">Email</router-link>
      </li>
      <li>
        <router-link tag="h3" to="/about/contact/qq">QQ</router-link>
      </li>
      <li>
        <router-link tag="h3" to="/about/contact/wechat">微信</router-link>
      </li>
    </ul>
    <div class="show">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
</script>