import React, { Component } from 'react';
import {Map, GoogleApiWrapper, Marker, InfoWindow} from 'google-maps-react';
import TimeAgo from 'javascript-time-ago'
import es from 'javascript-time-ago/locale/es'
import InfoWindowModal from '../../components/InfoWindowModal'

TimeAgo.locale(es)
const getTimeAgo = (date) => new TimeAgo('es-AR').format(date);

const listMarkers = (props, clickFunction) =>{
    return(
        props.tickets.all.tickets.map(
          (ticket) => (
              <Marker   google={props.google} key={ticket.code} 
                        title={ticket.title} description={ticket.description} createdOn={getTimeAgo(ticket.createdOn)}
                        position={{lat: ticket.coords[0], lng: ticket.coords[1]}}
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
      selectedTicket: {},
    }

    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  onMarkerClick = (props, marker, e) =>{
    this.setState({
      selectedTicket: props,
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
    // The initial position in the map is the last marker's position. If it doesn't exists, it's InsideOne's position.
    const lastMarker = this.props.tickets.all.tickets[this.props.tickets.all.tickets.length - 1]
    const defaultPosition = {lat: 37.759703, lng: -122.428093}
    const lastMarkerPosition = {lat: lastMarker.coords[0], lng: lastMarker.coords[1]}
    const initialPosition = lastMarker ? lastMarkerPosition : defaultPosition
    return (
        <Map
            google={this.props.google}
            style={{width: '100vw', height: '100vh'}}
            initialCenter={initialPosition}
            zoom={15}
            // The zoom could be the necesary one to show all the markers at once.
        >
            {listMarkers(this.props, this.onMarkerClick)}
            <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow}>
                <InfoWindowModal activeTicket={this.state.selectedTicket}/>
            </InfoWindow>
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GMAPS_API_KEY
})(MapContainer)