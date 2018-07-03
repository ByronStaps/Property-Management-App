import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
// import {ListItemContent} from 'react-mdl';



class DisplayApartmentTable extends Component{
    state = {
        apartments:[],
        loginError:''
    }

    //api to call the get all the data from the MySQL table
componentDidMount(){
    axios.get('http://localhost:8080/findallApartment')
    .then(Response =>{

        const apartmentArray= Response.data;
        this.setState({

            apartments:apartmentArray
        });
    });
    
  }
  removeItem=(id)=>{
    axios.delete('http://localhost:8080/deleteApartment',{
        params:{
            id:id
        }
    })
    .then(response =>{

        const apartments= response.data;
        this.setState({
            apartments:apartments
        });
    });

}
render(){
    return(
        

<table className="table table-striped">

    <thead>
    <h1> Apartment Table</h1>

        <tr>
            <th scope="col">Apartment_ID </th>
            <th scope="col">Bedrooms </th>
            <th scope="col">Bathrooms</th>
            <th scope="col">Rent Price</th>
            <th scope="col">Square Feet</th>
            <th scope="col">Garage Space</th>
            <th scope="col">Delete Apartment</th>
            
        




        </tr>
    </thead>
    <tbody>

{this.state.apartments.map((apartment,index)=>
        <tr key={index}>
            <td>{apartment.aprtment_ID}</td>
            <td>{apartment.bedRooms}</td>
            <td>{apartment.bathRooms}</td>
            <td>{apartment.rentPrice}</td>
            <td>{apartment.sqFeet}</td>
            <td>{apartment.garageSpace}</td>
            <button onClick={()=>this.removeItem(apartment.aprtment_ID)} className="btn btn-danger">Delete</button> 

            </tr>
        )}
    </tbody>
</table>

    );

}

}
export default DisplayApartmentTable;