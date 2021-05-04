import React, {useEffect, useState} from "react";

import imgMan from '../../man.jpg'
import {NavLink} from "react-router-dom";


const User = (props) => {



  return (
    <div className='container__user'>
      <div className="user__img">
        <img src={imgMan} alt=""/>
      </div>
      <div className="user__fName-lName">
        <span className='fName'>{props.user.firstName}</span>
        <span className="lName">{props.user.lastName}</span>
      </div>
      <div className="user__aboutMe">{props.user.aboutMe}</div>
      <div className="user__links">
        <ul className='list__links'>
          <li>
            <NavLink id='allarticles'  to='/allarticles'>All
              articles</NavLink>
          </li>

          <li>
            <NavLink id='myarticles'  to='/myarticles'>My
              articles</NavLink>
          </li>

          <li>
            <NavLink id='addarticles'  to='/addarticles'>Add
              article</NavLink>
          </li>

          <li>
            <NavLink id='profile' to='/profile'>
              Profile
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}


export default User;