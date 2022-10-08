import React, {Component, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import InputGroup from 'react-bootstrap/InputGroup';

import 'bootstrap/dist/css/bootstrap.min.css';

import "./Modal.css";

import './Post.css'
import Navbar from "../navbar";
//import * as constants from "constants";

function Post() {

    const [show, setShow] = useState(false);
    const [validated, setValidated] = useState(false);

    const userID = 'testUser';
    const [projName, setProjName] = useState('');
    const [projDesc, setProjDesc] = useState('');
    const [projMem, setProjMem] = useState('');
    const [projTopic, setProjTopic] = useState('');
    const [projLocale, setProjLocale] = useState('');

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        //event.preventDefault();
        let databody = {
            "userID": userID,
            "projName": projName,
            "projDesc": projDesc,
            "projMem": projMem,
            "projTopic": projTopic,
            "projLocale": projLocale
        }
        console.log(JSON.stringify(databody));

        fetch('http://localhost:6900/newPost', {
            method: 'POST',
            body: JSON.stringify(databody),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => console.log(data));

        setValidated(true);
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

        return (
            <>
                <Modal show={show} onHide={handleClose} backdrop={true}>
                    <Modal.Header closeButton>
                        <Modal.Title>Create a project</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="validationProjName">
                                <Form.Label>Project Name</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="project name"
                                    value={projName}
                                    onChange={(e)=>setProjName(e.target.value)}
                                />
                                <Form.Control.Feedback type="invalid">Please enter project name.</Form.Control.Feedback>
                            </Form.Group>


                            <Form.Group
                                className="mb-3"
                                controlId="validationDesc"
                            >
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Insert a short, brief description of your project."
                                    value={projDesc}
                                    onChange={(e)=>setProjDesc(e.target.value)}
                                />
                                <Form.Control.Feedback type="invalid">Please enter a description of project.</Form.Control.Feedback>
                            </Form.Group>


                            <Form.Group
                                required
                                className="mb-3"
                                controlId="ControlMemNum"
                            >
                                <Form.Label>How many members in total?</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="Insert a number ranging from 1-4."
                                    value={projMem}
                                    onChange={(e)=>setProjMem(e.target.value)}
                                />
                                <Form.Control.Feedback type="invalid">Please enter the number of members.</Form.Control.Feedback>
                            </Form.Group>


                            <Form.Group
                                required
                                className="mb-3"
                                controlId="ControlTags"
                            >
                                <Form.Label>What topics relate to your project?</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="Ex. (Machine Learning, Robotics, Data Science)"
                                    value={projTopic}
                                    onChange={(e)=>setProjTopic(e.target.value)}
                                />
                                <Form.Control.Feedback type="invalid">Please enter the the tags.</Form.Control.Feedback>
                            </Form.Group>


                            <Form.Group
                                required
                                className="mb-3"
                                controlId="ControlLocale"
                            >
                                <Form.Label>Where will your project take place?</Form.Label>
                                <Form.Control
                                    required type="text"
                                    placeholder="Ex. (Online; Cupertino, CA; Boston, MA)"
                                    value={projLocale}
                                    onChange={(e)=>setProjLocale(e.target.value)}
                                />
                                <Form.Control.Feedback type="invalid">Please enter the the location.</Form.Control.Feedback>
                            </Form.Group>
                            <Button type="submit">
                                Post
                            </Button>
                        </Form>


                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
                <section className = "post-outer">
                    <section className = "post-text">
                        <p>Need an extra-partner to complete your personal project? Create a post for free with an account.</p>
                    </section>
                    <section className = "post-bottom">
                        <button className="post-button" onClick={handleShow}>CREATE A POST</button>
                    </section>
                </section>
            </>

        );
};
export default Post;