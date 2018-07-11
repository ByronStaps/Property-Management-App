import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import RegisterTenant from '../Admin/RegisterTenant';
import DisplayTenantTable from '../Admin/TenantTable';
import DisplayApartmentTable from '../Admin/ApartmentTable';
import SignUpTable from '../Admin/SignUpTable';
import NewApartment from '../Admin/AddApartment';
import Calulator from '../Admin/Calulator'


class Admin extends Component {

  state = {
    clickpage: 'RegisterTenant'

  }
  buttonClick = (event) => {
    const value = event.target.value;
    this.setState({ clickpage: value });
  }
  render() {
    let page;

    if (this.state.clickpage === 'SignUpTable') {

      page = (<SignUpTable />)
    } else if (this.state.clickpage === 'TentantTable') {
      page = (<DisplayTenantTable />)

    } else if (this.state.clickpage === 'RegisterTenant') {
      page = (<RegisterTenant />)
    } else if (this.state.clickpage === 'ApartmentTable') {
      page = (<DisplayApartmentTable />)
    } else if (this.state.clickpage === 'AddApartment') {
      page = (<NewApartment />)
    }
    else if (this.state.clickpage === 'Calulator') {
      page = (<Calulator />)
    }
    return (
      <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
                <button class="nav-link" onClick={this.buttonClick} value="TentantTable">
                  <span data-feather="file"></span>
                  Tenant Table
                </button>
              <li class="nav-item">
                <button class="nav-link" onClick={this.buttonClick} value="SignUpTable">
                  <span data-feather="file"></span>
                  Sign-Up Table
                </button>
              </li>
              <li class="nav-item">
                <button class="nav-link" onClick={this.buttonClick} value="RegisterTenant">
                  <span data-feather="file"></span>
                  Register Tenant
                </button>
              </li>
              <li class="nav-item">
                <button class="nav-link" onClick={this.buttonClick} value="ApartmentTable">
                  <span data-feather="file"></span>
                  Apartment Table
                </button>
              </li>
              <li class="nav-item">
                <button class="nav-link" onClick={this.buttonClick} value="AddApartment">
                  <span data-feather="file"></span>
                  Add Apartment
                </button>
              </li>
              <li class="nav-item">
                <button class="nav-link" onClick={this.buttonClick} value="Calulator">
                  <span data-feather="file"></span>
                  Maintence Calulator
                </button>
              </li>
            </ul>
          </div>
        </nav>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 class="imagefontstyle"> Admin Dashboard</h1>
          </div> 
          <div>
          {page}
        </div>       
        </main>
      </div>
    </div>
    );
  }
}

export default Admin;