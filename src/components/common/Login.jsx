import React, { Component } from 'react';

export default class Login extends Component {
    userData;
    constructor(props) {
        super(props);
        this.onChangeUserID = this.onChangeUserID.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = { apiResponse: "" };
        this.state = {
            userID: '',
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
    onChangePassword(e) {
        this.setState({ password: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault();
        this.setState({
            userID: '',
            password: ''
        });
        let databody = {
            "userID": this.state.userID,
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
    }
    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));
        if (localStorage.getItem('user')) {
            this.setState({
                userID: this.userData.userID,
                password: this.userData.password
            })
        } else {
            this.setState({
                userID: '',
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
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" className="form-control" value={this.state.userID} onChange={this.onChangeUserID} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" value={this.state.password} onChange={this.onChangePassword} />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block"> Submit</button>
                </form>
                <p className="App-intro">{this.state.apiResponse}</p>
            </div>
        )
    }
}