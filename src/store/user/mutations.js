
export const mutations = {
  toLogin(state,data){
    state.avatar = data.avatar;
    state.displayName = data.displayName;
    state.id = data.id;
    state.role = data.role;
    state.isLogin = true;
    window.sessionStorage.setItem("authToken",data.authToken);
    window.localStorage.setItem("authToken",data.authToken);
    const userInfo = {
      avatar:data.avatar,
      displayName :data.displayName,
      id:data.id,
      role:data.role
    }
    window.sessionStorage.setItem("userInfo",JSON.stringify(userInfo));
    window.localStorage.setItem("userInfo",JSON.stringify(userInfo));
  },
  toLogout(state){
    state.avatar = '';
    state.displayName = '';
    state.id = '';
    state.role = '';
    state.isLogin = false;
    window.sessionStorage.removeItem("authToken");
    window.localStorage.removeItem("authToken");
    window.sessionStorage.removeItem("userInfo");
    window.localStorage.removeItem("userInfo");
  }
}