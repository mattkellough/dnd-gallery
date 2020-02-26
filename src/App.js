import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GalleryContext from './context/GalleryContext';
import './App.css';
import FileUpload from './components/FileUpload';
import Gallery from './components/Gallery';

const App = () => {
  const [json, setJson] = useState({});

  return (
    <GalleryContext.Provider value={{ json, setJson }}>
      <Router>
        <Switch>
          <Route exact path="/" component={FileUpload} />
          <Route exact path="/gallery" component={Gallery} />
        </Switch>
      </Router>
    </GalleryContext.Provider>
  );
};

export default App;
