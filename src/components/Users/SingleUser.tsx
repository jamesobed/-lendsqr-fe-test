import React from 'react';
import '../../styles/Users.scss';


interface Istates {
  stateTitle: string;
  pop: number| string;
  icon: JSX.Element | null ;
}

const SingleUser = ({stateTitle, pop, icon}:Istates) => {
  return (
    <>
    <div className="singleState">
                {icon}
                <h5 className="text">
                    {stateTitle}
                </h5>
                <h3 className="pop">{pop}</h3>
            </div>
    </>
  )
}

export default SingleUser
