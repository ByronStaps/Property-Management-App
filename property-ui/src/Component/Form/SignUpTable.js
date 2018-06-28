import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { ListItemContent } from 'react-mdl';


class SignUpTable extends Component {
    state = {
        signupContact: [],
        loginError: ''
    }

    //api to call the get all the data from the MySQL table
    componentDidMount() {
        axios.get('http://localhost:8080/findallsignupContact')
            .then(Response => {

                const signupcontactArray = Response.data;
                this.setState({

                    signupContact: signupcontactArray
                });
            });

    }

    render() {
        return (
            <div>
            <table className="table table-striped">
                <thead>
                    <h1> Signup Contact Info</h1>
                    <tr>
                        <th scope="col">Signup ID </th>
                        <th scope="col">Email</th>
                        <th scope="col">First Name </th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Telephone</th>
                        <th scope="col">Garage Space</th>
                    </tr>
                </thead>
                <tbody>

                    {this.state.signupContact.map((signupContact, index) =>
                        <tr key={index}>
                            <td>{signupContact.signupID}</td>
                            <td>{signupContact.email}</td>
                            <td>{signupContact.firstName}</td>
                            <td>{signupContact.lastName}</td>
                            <td>{signupContact.telephone}</td>
                            <td>{signupContact.garageSpace}</td>
                        </tr>
                    )}
                </tbody>
            </table>

</div>
        );

    }

}
export default SignUpTable;