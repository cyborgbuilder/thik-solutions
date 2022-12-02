import React, { Component } from 'react'
import {Map, GoogleApiWrapper } from 'google-maps-react'

class MapContainer extends Component {
    render(){
        return(
            <Map 
            google = {this.props.google}
            style={{width: "100%", height: "100%"}}
            zoom = {10}
            initialCenter = {
              {
                  lat: 6.802120,
                  lng: 79.922990
              }
            }
            />
        )
    }
}
export default GoogleApiWrapper({
    apiKey: "AIzaSyD0BK2ILQtM6dh1m-4YQQ5fLYLMLP-sDLk"
})(MapContainer)