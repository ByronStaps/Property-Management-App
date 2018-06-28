import React from 'react';
import TenantProfile from '../Profile/TenantProfile';
import AdminProfile from '../Profile/AdminProfile';

const profile = (props) => {

let userProfilePage = <TenantProfile email={props.user.email} />;
  console.log(props.user.role);
  if(props.user.role ==='admin'){
  userProfilePage = <AdminProfile user={props.user} />;
  }
  return (
    <div className='container'>
    {userProfilePage}
    </div>
  );

}

export default profile;