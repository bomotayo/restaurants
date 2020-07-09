import React from 'react';
import RestaurantItem from './RestaurantItem';
import { connect } from 'react-redux';
import { fetchRests, fetchFields } from '../actions';
import './RestaurantList.css';



const RestaurantList = ({fetchRests, restaurants, fields}) => {
//destructured props = (props.)fetchRests, (props.)restaurants 

    let list = restaurants; 
    let refinedList; 
    let city;

    // console.log(fields)
    console.log(list)

  const renderList = () => {
    //somewhat filtering method based on refine values
    refinedList = list;
    return fields.map(x => {
      if(x.fields.refine!==''){
        let refinedVal = typeof(x.fields.refine) === 'string' ? x.fields.refine.toLowerCase() : x.fields.refine;
        
        let nrest = refinedList.filter(restaurant => (restaurant.name.toLowerCase().includes(refinedVal) || restaurant.address.toLowerCase().includes(refinedVal) || restaurant.country.toLowerCase().includes(refinedVal) ||restaurant.postal_code.toLowerCase().includes(refinedVal)));

        if(nrest.length >= 1){
          return nrest.map(restaurant => {
            return  <RestaurantItem key={restaurant.id} list={restaurant} city={x.fields.city}/>
         })   
        }
        else{
          return <h3 className="error-message" key={Math.random()}>No resturants in <span className="error-filter-message">{x.fields.city}</span> city with <span className="error-filter-message">{x.fields.refine}</span> filter. Please try different refined search.</h3>
        }
    
      }
      //if no refined value is entered. This displays the fetched response on the screen

         return list.map(restaurant => {
            return(
              <div className="four wide column">
                <RestaurantItem key={restaurant.id} list={restaurant} />
              </div>
            ) 
       })

    })

  }

    //Displaying City
    fields.map(x => {
      city = x.fields.city
      return city;
    });

  return(
    <div className= "ui container">
      {/* <h2>{city} Restaurants</h2>
        <br/> */}
        <br/>
      <div className="rest-list">
        {renderList()}
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    restaurants: state.restaurants,
    fields: state.fields
  };
}

export default connect(mapStateToProps, { fetchRests, fetchFields })(RestaurantList);