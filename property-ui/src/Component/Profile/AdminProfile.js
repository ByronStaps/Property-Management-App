import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Form from '../Form/AddTenant';
import RegisterTenant from '../Form/AddTenant';
import DisplayTenantTable from '../Form/TenantTable';
import DisplayApartmentTable from '../Form/ApartmentTable';
import SignUpTable from '../Form/SignUpTable'


class Admin extends Component {


    render() {
        let redirect = null;

        return (
            <div className="container" align="center">

                <h1 font="bold"> Admin Profile </h1>
                <br />
                <SignUpTable />
                <DisplayApartmentTable />
                <DisplayTenantTable />
                <RegisterTenant />
                <br />
                <br />


            </div>




        );
    }
}

export default Admin;