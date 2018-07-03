import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Form from '../Form/AddTenant';
import RegisterTenant from '../Form/AddTenant';
import DisplayTenantTable from '../Form/TenantTable';
import DisplayApartmentTable from '../Form/ApartmentTable';
import SignUpTable from '../Form/SignUpTable'


class Admin extends Component {

  state={
    clickpage:'AddTenant'

  }

  
  buttonClick = (event) => {
    const value = event.target.value;
    this.setState({ clickpage: value});
  }



    render() {
        let page;

        if(this.state.clickpage === 'SignUpTable'){

          page=(<SignUpTable/>)
        }else if (this.state.clickpage === 'TentantTable'){
          page=(<DisplayTenantTable/>)

        }else if(this.state.clickpage === 'AddTenant'){
          page=(<RegisterTenant/>)
        }else if(this.state.clickpage==='ApartmentTable'){
          page=(<DisplayApartmentTable/>)
        }

      

        return (
      
         
      
              <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                  <h1 className="h2">Adminboard</h1>
                  <div className="btn-toolbar mb-2 mb-md-0">
                    <div className="btn-group mr-2">
                      <button className="btn btn-sm btn-outline-secondary"onClick={this.buttonClick} value="TentantTable">Tenant</button>
                      <button className="btn btn-sm btn-outline-secondary"onClick={this.buttonClick} value="SignUpTable">Sign Up</button>
                      <button className="btn btn-sm btn-outline-secondary"onClick={this.buttonClick} value="AddTenant">Register Tenant</button>
                      <button className="btn btn-sm btn-outline-secondary"onClick={this.buttonClick} value="ApartmentTable">Apartment</button>

                    </div>
                  </div>
                </div>      
                <div class>
                {page}
                </div>
              </main>
            




        );
    }
}

export default Admin;