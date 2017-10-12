import React, { Component } from 'react';
import Banner from './Banner';
import ArtistList from './ArtistList';

const URL_ARTIST = 'http://localhost:3004/artists'

class Home extends Component {
  constructor(props) {
    super(props);
    

    this.state = {
      artists: ''
    }
  }
  
  componentDidMount() {
    fetch(URL_ARTIST, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(json => {
      console.log('ajax request callbackk', json)
      this.setState({
        artists: json
      })
    })
  }

  render() {
    return (
      <div>
        <Banner />
        <ArtistList allArtists={this.state.artists}/>
      </div>
    );
  }
}

export default Home;