

<template>
 <div id="app">
  <BasicLayout/>
 </div>
</template>
<script setup lang="ts">
import BasicLayout from "@/layouts/BasicLayout.vue"
import { useRouter } from "vue-router";
import { useUserStore } from "./stores/user";
import {onMounted} from 'vue'


const userStore =useUserStore();
const router = useRouter()
const loginUser = userStore.getLoginUser

//TODO 全局初始化函数 
const doInit=()=>{
  console.log("hello 欢迎来到leioj!!!");
  
}
onMounted(()=>{

})

router.beforeEach((to,from,next)=>{
  if(to.meta.access==='admin'){
    if(loginUser.userRole!=='admin'){
      next('/noAuth')
    }
  }
  next()
})

</script>
<style scoped>

#app{
  /* height: 100vh;
  widows: 100vw; */
}

  </style>
