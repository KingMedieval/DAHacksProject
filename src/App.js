import React from 'react';
import {useState} from "react";
import { Post } from './components/common/';
import { Search } from './components/common/';
import { Tags } from './components/common/';
import { Location } from './components/common/'
import { Submit } from './components/common/'
import { Posting } from './components/common';

import './App.css';

function App() {
    const [state, setState] = useState('');

    const hello =()=> {

        fetch("http:///localhost:6900/getPostinfo?=testUser", {

            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },})
            .then(res => console.log(`app.js ${res.json()}`))
            .then(res => setState(res.json));
        console.log(`state change : ${state}`);
    }

  return (
    <div className="App">
        <Search />
        <Post />
        <Tags />
        <Location />
        <Submit />
    <div className="post-flex">
        <Posting name={'Web Application Project'}
                 desc={'Small web application project that will be used in a hackathon. Thinking of using React with a Node.js backend.'}
                 numMembers={4}
                 username={'deAnzaFan123'}
                 location={'Cupertino, CA'}/>


        <Posting name = {'Graphic Design Newsletter'}
                 desc={"Looking for designers for my block-chain based newsletter. Must be able to use Figma and Photoshop. At least >3 years of experience."}
                 numMembers={4}
                 username={'iLoveCpp1'}
                 location={'Online'}/>

        <Posting name = {'Algorithm Training'}
                 desc={"Just looking to work on algorithm books and study for technical interviews. Preferred language is Python but C++ would suffice."}
                 numMembers={4}
                 username={'pygames-11'}
                 location={'Salem, Oregon'}/>

        <Posting name = {'Stock Market Predictor'}
                 desc={"I want to create an algorithm that predicts stock prices and beats the S&P500. I have a deadline of one week or else I go bankrupt. Unpaid, serious inquirys only."}
                 numMembers={4}
                 username={'sell_me_this_pen_1000011'}
                 location={'Online'}/>

        <Posting name = {'Unreal Engine 4 development'}
                 desc={"Looking for someone to study UE4 Game Engine. I want to create an expansive 3D RPG game. Should have experience in game development. "}
                 numMembers={4}
                 username={'cap_com_universe'}
                 location={'Online'}/>
                </div>
        <div className="footer">
            
        </div>
    </div>
  )
};

export default App;
