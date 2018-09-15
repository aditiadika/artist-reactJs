import React, { Component } from 'react'
import Banner from './Banner'
import ArtistList from './ArtistLIst'

const URL_ARTISTS = 'http://localhost:3004/artists'

export default class Home extends Component {
  state = {
    artists: ''
  }

  componentDidMount() {
    fetch(URL_ARTISTS, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      this.setState({ artists: json})
    })
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <Banner />
        <ArtistList allArtist={this.state.artists}/>
      </div>
    )
  }
}