import React, { useContext, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import loadJsonFile from 'load-json-file';
import GalleryContext from '../context/GalleryContext';

const FileUpload = () => {
  const { json, setJson } = useContext(GalleryContext);
  const history = useHistory();

  const handleUpload = event => {
    const reader = new FileReader();
    const file = event.target.files[0];

    reader.readAsText(file);

    reader.onload = event => {
      const jsonObj = JSON.parse(event.target.result);

      setJson(jsonObj);
      history.push('/gallery');
    };
  };

  return (
    <div className="FileUpload">
      <Link to="/gallery">Gallery</Link>
      <input type="file" name="file" onChange={handleUpload} />
    </div>
  );
};

export default FileUpload;
