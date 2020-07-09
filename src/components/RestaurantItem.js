import React from 'react';
import './RestaurantItem.css';

const RestaurantItem = ({ list }) => {
  return(
     <div className="ui cards">
        <a className="ui raised link card" href={list.reserve_url} target="_blank">
            <div className="content">
               <img class="right floated mini ui image" src="https://www.opentable.com/img/restimages/21307.jpg" />
               <div className="header title">
                  {list.name} 
               </div>
               <div className="description">
                  {list.address}  <br/> {list.city}, {list.state} {list.postal_code}. {list.country}
                  <br/>   
                  <br/>
                  Tel: <a className="phone" href={`tel:${list.phone}`}>{list.phone}</a>     
               </div>
            </div>
            <div className="extra content">
               <div className="ui two buttons">
                  <a className="ui button btn" href={list.reserve_url} target="_blank">More Details</a>
               </div>
            </div>            
        </a>
     </div>
  )
}

export default RestaurantItem;