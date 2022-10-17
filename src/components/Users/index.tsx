import React from 'react';
import '../../styles/Users.scss';
import SingleUser from "./SingleUser";
import { ReactComponent as State1 } from "../../assets/userStateIcons/stateicon1.svg";
import { ReactComponent as State2 } from "../../assets/userStateIcons/stateicon2.svg";
import { ReactComponent as State3 } from "../../assets/userStateIcons/stateicon3.svg";
import { ReactComponent as State4 } from "../../assets/userStateIcons/stateicon4.svg";


const index = () => {
  return (
    <div className='users-body'>
        <h2 className="title">users</h2>
        <div className="users-body_states">
            <SingleUser stateTitle="users" pop="2,453" icon={<State1/>}/>
            <SingleUser stateTitle="active users" pop="2,453" icon={<State2/>}/>
            <SingleUser stateTitle="users with loans" pop="12,453" icon={<State3/>}/>
            <SingleUser stateTitle="users with savings" pop="102,453" icon={<State4/>}/>
        </div>
      
    </div>
  )
}

export default index
