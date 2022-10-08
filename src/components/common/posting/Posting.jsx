import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Posting.css';



function Posting(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

        return (
            <>
                    <section className="listing-box">
                        <section className="listing-info">
                            <p className="listing-title"> {props.name}</p>
                            <p className="listing-desc">{props.desc}</p>
                            <p className="numMembers">{props.numMembers}</p>
                        </section>
                        <section className="listing-extra">
                            <img
                                src="https://cdn.discordapp.com/attachments/1027411637591875624/1028324317123072060/profile-placeholder.png"
                                className="listing-image"></img>
                            <section className="listing-conjoined">
                                <p className="listing-user">{props.username}</p>
                                <p className="listing-location">{props.location}</p>
                            </section>
                        </section>
                        <section className="listing-buttons">
                            <button className="listing-join" onClick={handleShow}>JOIN</button>
                            <button className="listing-learn" onClick={handleShow}>CONTACT</button>
                        </section>
                        <section className="listing-tags">
                            <a className="listing-tag1">{props.tag1}</a>
                            <a className="listing-tag2">{props.tag2}</a>
                        </section>
                    </section>
            </>
        );
}


export default Posting;