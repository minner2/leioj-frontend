<template>
  <div id="common-layout">
    <a-layout >
      <a-layout-header class="header"  theme="light" >
        <GlobalHeader/>
      </a-layout-header>
      <a-layout-content class="main">
        <router-view></router-view>
      </a-layout-content>
      <a-layout-footer class="footer">Footer</a-layout-footer>
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import GlobalHeader from '../components/GlobalHeader.vue'
</script>

<style >
#common-layout .header{
  background: #fff;
  margin-bottom: 16px;
  box-shadow: #d6e2f9 1px 1px 5px;
}

#common-layout .main{
/* background-color: rgb(53, 101, 143); */
margin-bottom: 16px;
font-size: 40px;
padding:20px;
}

#common-layout .footer{
  background: #efefef;
  position: absolute;
  bottom: 0;
  left:0;
  right: 0;
  text-align: center;
  padding: 16px;
}
</style>