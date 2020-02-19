import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

import {connect} from 'react-redux'
import {Add, Remove, Update} from './actions/mainActions'



const App = (props) => {
  
  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.Remove(item)
    props.Update(-item.price)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    props.Add(item)
    props.Update(item.price)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} />
        <AddedFeatures car={props.car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
      </div>
    </div>
  );
};

// export default App

const mapStateToProps = state => {
  return {
    car:state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  }
}

export default connect(mapStateToProps, {Add, Remove, Update})(App)
