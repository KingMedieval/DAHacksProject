import React from 'react';
import { Post } from './components/common/';
import { Search } from './components/common/';
import { Tags } from './components/common/';

import './App.css';

function App() {
  return (
    <div className="App">
        <Search />
        <Post />
        <Tags />
    </div>
  )
};

export default App;
