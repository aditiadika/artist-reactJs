import React, { Component } from 'react'
import Header from './Header'
import AlbumList from './AlbumList'

const REQ_URL = 'http://localhost:3004/artists'

export default class Artist extends Component {
  state = {
    artist: ''
  }

  componentDidMount(){
    const { artistid } = this.props.match.params
    fetch(`${REQ_URL}/${artistid}`,{
      method: 'GET'
    })
    .then(res => res.json())
    .then(json => {
      this.setState({ artist: json})
    })
  }

  render() {
    return (
        <div>
          <Header />
          <div className='artist_bio'>
            <div className="avatar">
              <span style={{ background:`url('/images/covers/${this.state.artist.cover}.jpg') no-repeat` }}></span>
            </div>
            <div className="bio">
              <h3>{this.state.artist.name}</h3>
              <div className="bio_text">
                {this.state.artist.bio}
              </div>
            </div>
            <AlbumList albumList={this.state.artist.albums}/>
          </div>
        </div>
    )
  }
}