import React, {Component, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import InputGroup from 'react-bootstrap/InputGroup';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'

function Login() {

    const [validated, setValidated] = useState(false);

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = (event) => {
        const form = event.currentTarget;

        if (form.checkValidity() === false) { //checks are not met
            event.preventDefault();
            event.stopPropagation();
        }
        else{
            let result;
            let databody = {
                "userID": userName,
                "password": password,
            }
            fetch(`http://localhost:6900/login?userID=${userName}?userInputPass=${password}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then(res => {
                    result = res.json();
                });
        }
        setValidated(true);
        }


    return (
        <>
            <h>
                <section className="sign-up-outer">
                    <h1 className="sign-title">Login With your Account</h1>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="validationProjName">
                            <Form.Label>Username</Form.Label>
                            <Form.Control
                                required
                                type="text"
                                placeholder="Username"
                                value={userName}
                                onChange={(e)=>setUserName(e.target.value)}
                                className="input-line"/>
                            <Form.Control.Feedback type="invalid">Please enter username.</Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group
                            className="mb-3"
                            controlId="validationPass"
                        >
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="password"
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}
                                className="input-line"/>
                            <Form.Control.Feedback type="invalid">Enter Password</Form.Control.Feedback>
                        </Form.Group>
                        <Button className= "submit-button" type="submit">
                            Sign up
                        </Button>
                    </Form>
                </section>
            </h>
        </>
    )
};

export default Login;