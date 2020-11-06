export const mutations = {
  setNotificationLists(state,list){
    state.lists = list;
  },
  toRead(state,id){
    state.lists.forEach(item =>{
      if(item.id === id){
        item.hasRead = true;
      }
    })
  },
  toReadAll(state){
    state.lists.forEach(item =>{
      item.hasRead = true;
    })
  }
}