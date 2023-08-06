import PERMISSON from "./permissonEnum"

/**
 * 检查权限，判断当前用户是否具有某个权限
 * @param loginUser  当前登陆用户
 * @param needPermission  需要的权限
 * @return boolean 有无权限
 */
const checkPermisson =(loginUser:any,needPermission)=>{
  //获取当前登录用户的权限，如果没有loginUser则未登录
  const loginUserPermisson = loginUser?.userRole ?? PERMISSON.NOT_LOGIN
  //如果需要的权限是未登录，则直接返回true
  if(needPermission === PERMISSON.NOT_LOGIN){
    return true;
  }

  //如果需要的权限是user,则表示只需要登录就行
  if(needPermission === PERMISSON.USER){
    //如果没登录
    if(loginUserPermisson===PERMISSON.NOT_LOGIN){
      return false;
    }
  }

  //如果需要的权限是admin
  if(needPermission === PERMISSON.ADMIN){
    //如果当前登录用户不是admin
    if(loginUserPermisson!=PERMISSON.ADMIN){
      return false;
    }
  }
  return true;

}

export default checkPermisson;