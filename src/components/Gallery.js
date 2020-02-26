import React, { useContext } from 'react';
import GalleryContext from '../context/GalleryContext';
import Card from './Card';

const Gallery = () => {
  const { json, setJson } = useContext(GalleryContext);

  return (
    <div className="Gallery">
      {Object.values(json.images).map(image => (
        <Card {...image} mediaURL={json.uri} />
      ))}
    </div>
  );
};

export default Gallery;
