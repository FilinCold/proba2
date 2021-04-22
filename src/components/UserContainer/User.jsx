import React from "react";


let User = (props) => {
    let user = props.user.map(u => {
        return (
            <div className='container__profile' key={u.id}>
                <div className='profile__img'>
                    <img src={u.img} alt=""/>
                </div>
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