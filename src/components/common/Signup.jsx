import React, { Component } from 'react';
import './Signup.css'
export default class Signup extends Component {
    userData;
    constructor(props) {
        super(props);
        this.onChangeUserID = this.onChangeUserID.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = { apiResponse: "" };
        this.state = {
            userID: '',
            email: '',
            password: '',

        };
    }

    callAPI() {
        fetch("http://localhost:6900/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    componentWillMount() {
        this.callAPI();
    }

    // Form Events
    onChangeUserID(e) {
        this.setState({ userID: e.target.value })
    }
    onChangeEmail(e) {
        this.setState({ email: e.target.value })
    }
    onChangePassword(e) {
        this.setState({ password: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault();
        this.setState({
            userID: '',
            email: '',
            password: ''
        });
        let databody = {
            "userID": this.state.userID,
            "email": this.state.email,
            "password": this.state.password
        }
        fetch('http://localhost:6900/postTest', {
            method: 'POST',
            body: JSON.stringify(databody),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => console.log(data));

        fetch(`http://localhost:6900/userExists?id=${this.state.userID}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(data => console.log(data)); //const variableName = data.userID
    }
    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));
        if (localStorage.getItem('user')) {
            this.setState({
                userID: this.userData.userID,
                email: this.userData.email,
                password: this.userData.password
            })
        } else {
            this.setState({
                userID: '',
                email: '',
                password: ''
            })
        }
    }
    componentWillUpdate(nextProps, nextState) {
        localStorage.setItem('user', JSON.stringify(nextState));
    }

    render() {
        return (
            <div className="container">
                <h1 className ="sign-up-title">Create a new account</h1>
                <hr>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group" className="sign-up-label">
                        <label className="sign-user">Username</label>
                        <input type="text" className="form-control" value={this.state.userID} onChange={this.onChangeUserID} />
                    </div>
                    <div className="form-group" className="sign-up-email">
                        <label>Email</label>
                        <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
                    </div>
                    <div className="form-group" className="sign-up-pass">
                        <label>Password</label>
                        <input type="password" className="form-control" value={this.state.password} onChange={this.onChangePassword} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block"> Submit</button>
                </form>
                <p className="App-intro">{this.state.apiResponse}</p>
                </hr>
            </div>
        )
    }
}