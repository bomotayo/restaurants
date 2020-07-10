import React from 'react';
import { connect } from 'react-redux';
import { fetchRests, fetchFields  } from '../actions';
import { useForm } from "react-hook-form";
import './SearchBar.css';


const SearchBar = (props) => {

  const preloadedValues = {
    city: "",
    refine: ""
  }
  const { handleSubmit, register } = useForm({
    defaultValues: preloadedValues
  });

  //sends input values to both action creators   
  const onSubmit = values => {
    props.fetchFields(values);
    props.fetchRests(values);
    // reset(preloadedValues)
  }

  return (
    <div className="ui container ">
      <form className="ui form form-field" onSubmit={handleSubmit(onSubmit)}>
        <div className="field">
              <div className="inline fields form-container">
                  <div className="field city-field">
                    <label className="city-label">City: </label>
                    <input 
                      className="city-input"
                      type="text"
                      name="city"
                      ref={register({
                        required: "Required",
                      })}
                    />
                  </div>
                  <div className="field ref-field" >
                  <label className="ref-label">Refine Search : </label>
                    <input 
                      type="text"  
                      className="ref-input"
                      name="refine"
                      placeholder="optional" 
                      ref={register}                    
                      />
                  </div> 
                  <button type="submit" className="ui button btn sub-btn">Search</button>
              </div>
            </div> 
    </form>
    </div>
  );
}


export default connect(null, { fetchFields, fetchRests })(SearchBar);

