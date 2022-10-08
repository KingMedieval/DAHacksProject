import React from 'react'
import './Tags.css'

function Tags(){
    return (
        <section className="tag-box">
        <h1 className="tag-title">Tags</h1>
            <ul>
                <li className="li-tags">
                    <input type="checkbox" className="tag-check-box" name="machine-learning"></input>
                    <label for="machine-learning">Machine Learning</label>
                </li>
                <li className="li-tags">
                    <input type="checkbox" className="tag-check-box" name="robotics"></input>
                    <label ff="robotics">Robotics</label>
                </li>
                <li className="li-tags">
                    <input type="checkbox" className="tag-check-box" name="web-development"></input>
                    <label htmlFor="web-development">Web Development</label>
                </li>
                <li className="li-tags">
                    <input type="checkbox" className="tag-check-box" name="video-game-development"></input>
                    <label for="video-game-development">Video Game Development</label>
                </li>
                <li className="li-tags">
                    <input type="checkbox" className="tag-check-box" name="mechanical-engineering"></input>
                    <label for="mechanical-engineering">Mechanical Engineering</label>
                </li>
                <li className="li-tags">
                    <input type="checkbox" className="tag-check-box" name="cybersecurity"></input>
                    <label for="cybersecurity">Cybersecurity</label>
                </li>
                <li className="li-tags">
                    <input type="checkbox" className="tag-check-box" name="data-science"></input>
                    <label for="data-science">Data Science</label>
                </li>
                <li className="li-tags">
                    <input type="checkbox" className="tag-check-box" name="cloud-computing"></input>
                    <label for="cloud-computing">Cloud Computing</label>
                </li>
                <li className="li-tags">
                    <input type="checkbox" className="tag-check-box" name="art"></input>
                    <label htmlFor="art">Information Technology</label>
                </li>
                <li className="li-tags">
                    <input type="checkbox" className="tag-check-box" name="other"></input>
                    <label htmlFor="other">Other</label>
                </li>
            </ul>
        </section>
    )
}

export default Tags;