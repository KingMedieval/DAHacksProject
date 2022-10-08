import React from 'react'

import './Location.css';

function Location(){
    return (
        <section className="location-box">
            <ul>
                <li>
                    <input className= "location-checkbox" type="checkbox" name="in-person"></input>
                    <label for="in-person">In-person</label>
                </li>
                <li>
                    <input className="location-checkbox" type="checkbox" name="online"></input>
                    <label for="online">Online</label>
                </li>
            </ul>
        </section>
    )
}

export default Location;