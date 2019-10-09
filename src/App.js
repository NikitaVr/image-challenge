import React, { useState } from 'react';
import './App.css';

import Search from './Search'
import Post from './Post'

function App() {
  const [images, setImages] = useState([]);

  return (
    <div style={{ marginTop: "4em" }}>
      <Search onSelect={(previewURL) => setImages([...images, previewURL])} />
      {images ? images.map((image) => {
        return <Post img={image} />
      }
      ) : null}
    </div>

  );
}

export default App;
