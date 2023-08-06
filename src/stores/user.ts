import { ref, computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import PERMISSON from '@/permission/permissonEnum'

export const useUserStore = defineStore('user', () => {
  const loginUser =reactive({
    userName:"未登录",
    userRole:PERMISSON.NOT_LOGIN
  })
  const getLoginUser = computed(()=> loginUser)
  //TODO 改成远程登录
  function login(name:string,role:string){
    loginUser.userName=name
    loginUser.userRole=role
  }

  return { getLoginUser,login }
})
