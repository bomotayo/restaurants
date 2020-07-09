export default (state = [], action) => {
 switch (action.type) {
   case 'FETCH_RESTS':
     return action.payload;
   default:
    return state;
 }
};