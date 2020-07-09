export default (state = [], action) => {
  switch(action.type){
    case 'FETCH_FIELDS': 
      return [action.payload];
    default: 
      return state;
  }
};