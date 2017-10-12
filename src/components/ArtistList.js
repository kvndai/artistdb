import React from 'react';
import { Link } from 'react-router-dom';

const ArtistList = (props) => {
  console.log('allArtists props', props)

  const list = ({allArtists}) => {
    if(allArtists) {
      return allArtists.map(item => {
        const style = {
          background: `url('/images/covers/${item.cover}.jpg')
          no-repeat`
        }
        return (
          <Link className="artist_item" 
                key={item.id} 
                to={`/artist/${item.id}`}
                style={style}>
              <div>{item.name}</div>
          </Link>
        )
      })
    }
  }

  return (
    <div className="artists_list">
      <h4>Browse the Artists</h4>
      {list(props)}
    </div>
  );
};

export default ArtistList;