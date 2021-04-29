import React, {useEffect, useState} from "react";

import imgMan from '../../man.jpg'
import {NavLink} from "react-router-dom";


const User = (props) => {

  const [check, setCheck] = useState(false);
  const changeCheck = (e) => {
    // console.log(e.target.id)
    if (e.target.id && check === false) {

      e.target.className = 'selection'
     return setCheck(true)
    }
    console.log(check)
    return setCheck(false)
  }

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
            <NavLink id='allarticles' onClick={changeCheck} to='/allarticles'>All
              articles</NavLink>
          </li>

          <li>
            <NavLink id='myarticles' onClick={changeCheck} to='/myarticles'>My
              articles</NavLink>
          </li>

          <li>
            <NavLink id='addarticles' onClick={changeCheck} to='/addarticles'>Add
              article</NavLink>
          </li>

          <li>
            <NavLink id='profile' onClick={changeCheck}
                     to='/profile'>Profile</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}


export default User;