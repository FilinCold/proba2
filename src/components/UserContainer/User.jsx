import React from "react";
import {NavLink} from "react-router-dom";


let User = (props) => {
    let user = props.user.map(u => {
        return (
            <div className='container__profile' key={u.id}>
                <div className='profile__img'>
                    <img src={u.img} alt=""/>
                </div>
                <div className="profile__fname-lastname">
                    {`${u.firstName} ${u.lastName}`}
                </div>
                <div className="profile__text">
                   <span>About me:</span> {u.aboutMe}
                </div>
                <ul className='list__menu'>
                    <li>
                        <NavLink to='/allarticles'>All articles</NavLink>
                    </li>
                    <li>
                        <NavLink to='/myarticles'>My articles</NavLink>
                    </li>
                    <li>
                        <NavLink to='/addarticles'>Add articles</NavLink>
                    </li>
                    <li>
                        <NavLink to='/profile'>Profile</NavLink>
                    </li>




                </ul>
            </div>
        )
    })
    return (
        <div>
            {user}
        </div>
    )
}

export default User;