import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';



class DisplayTenantTable extends Component{
    state = {
        tenants:[],
        loginError:''
    }

    //api to call the get Tenants the data from the MySQL table
componentDidMount(){
    axios.get('http://localhost:8080/findAlltenant')
    .then(Response =>{

        const TenantAaary= Response.data;
        this.setState({

            tenants:TenantAaary
        });
    });
    
  }

render(){
    return(
        <div>
<table className="table table-striped">
    <thead>
        <h1 className="imagefontstyle"> Tenant Table</h1>
        <tr>
           
            <th scope="col">First </th>
            <th scope="col">Last </th>
            <th scope="col">Email</th>
            <th scope="col">Telephone</th>
            <th scope="col">Rent Due</th>
            <th scope="col">Lease Renew</th>
            <th scope="col">Apartment ID</th>
            <th scope="col">Roles</th>



        </tr>
    </thead>
    <tbody>

{this.state.tenants.map((tenant,index)=>
        <tr key={index}>
            <td>{tenant.firstName}</td>
            <td>{tenant.lastName}</td>
            <td>{tenant.email}</td>
            <td>{tenant.telephone}</td>            
            <td>{tenant.rentDue}</td>
            <td>{tenant.leaseRenew}</td>
            <td>{tenant.aprtment_ID}</td>
            <td>{tenant.role}</td>

            </tr>
        )}
    </tbody>
</table>

</div>
    );

}

}
export default DisplayTenantTable;