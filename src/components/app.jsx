import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import flats from '../../data/flats';
import FlatList from './flat_list';
import FlatMap from './flat_map';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }

  selectFlat = (index) => {
    this.setState({ selectedFlat: flats[index] });
  }

  center() {
    return {
      lat: this.state.selectedFlat.lat,
      lng: this.state.selectedFlat.lng
    };
  }

  render () {
    return (
      <div>
        <div className="flat-list">
          <FlatList
          flats={this.state.flats}
          selectedFlat={this.state.selectedFlat}
          selectFlat={this.selectFlat}
          />
        </div>
        <div className="map-container">
          <GoogleMapReact defaultCenter={this.center()} defaultZoom={12}>
            <FlatMap lat={this.state.selectedFlat.lat} lng={this.state.selectedFlat.lng} />
          </GoogleMapReact>
        </div>
      </div>
    );
  }
}

export default App;
