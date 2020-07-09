import openTable from '../apis/openTable';


//API request is made here. Action creator has redux thunk
// dispatch allows us to change the data we get & get state allows us to get data
export const fetchRests =  (input) => {
  return async (dispatch, getState ) => {
    const response =  await openTable.get('/api/restaurants', {
      params: {
        city: input.city
      }
    });

    dispatch({
      type: 'FETCH_RESTS',
      payload: response.data.restaurants
    });
  }

};

//Action creators that take in input values from search bar components
export const fetchFields = (fields) => {
  return  dispatch => {

    dispatch({
      type: 'FETCH_FIELDS',
      payload:{
        fields: fields
      }
    })
  }
}