import React from 'react';
import { Post } from './components/common/';
import { Search } from './components/common/';
import { Tags } from './components/common/';
import { Location } from './components/common/'
import { Submit } from './components/common/'
import { Posting } from './components/common';

import './App.css';

function App() {
  return (
    <div className="App">
        <Search />
        <Post />
        <Tags />
        <Location />
        <Submit />
    <div className="post-flex">
        <Posting name={'Helo'} desc={"Hello"} numMembers={4} username={'username'} location={'location'} tag1={'Literature'} tag2={'Social Studies'}/>
        <Posting name = {'Hello1'} desc={"Hello"} numMembers={4} username={'username'} location={'location'} tag1={'Science'} tag2={'Math'} />
    </div>
    </div>
  )
};

export default App;
