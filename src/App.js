import React, { useState } from 'react';
import './App.css';

import Search from './Search'

function App() {
  const [images, setImages] = useState([]);

  return (
    <div>
      <Search onSelect={(previewURL) => setImages([...images, previewURL])} />
      {images ? images.map((image) => {
        return <img src={image} />
      }
      ) : null}
    </div>

  );
}

export default App;
