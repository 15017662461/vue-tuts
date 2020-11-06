export const getters = {
  notificationsCount(state){
    let count = 0;
    state.lists.forEach(item => {
      if(!item.hasRead){
        count ++;
      }
    })
    // console.log(count)
    return count;
  }
}