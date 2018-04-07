import React, { Component } from 'react';
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';
import TicketMarkers from '../../components/TicketMarkers'

const listMarkers = (props, clickFunction) =>{
    return(
        props.tickets.all.tickets.map(
          (ticket) => (
              <Marker   google={props.google} key={ticket.code} 
                        name={ticket.description} position={{lat: ticket.coords[0], lng: ticket.coords[1]}}
                        onClick={clickFunction}/>      
          )
        )
    )
}

export class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }

    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  onMarkerClick = (props, marker, e) =>{
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked = (props) =>{
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

render() {
    const pos = {lat: 37.759703, lng: -122.428093}
    return (
        <Map
            google={this.props.google}
            style={{width: '100vw', height: '100vh'}}
            initialCenter={{ lat: -34.623164, lng: -58.365047}}
            zoom={15}
        >
            {listMarkers(this.props, this.onMarkerClick)}
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
                <div>
                  <h1>{this.state.selectedPlace.name}</h1>
                </div>
            </InfoWindow>
        </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GMAPS_API_KEY
})(MapContainer)