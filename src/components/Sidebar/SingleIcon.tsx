import React from 'react';
import "../../styles/Sidebar.scss";



interface Istates {
    text: string;
    icon: JSX.Element | null ;
    arrow?: JSX.Element | null ;
  }
const SingleIcon = ({text, icon,arrow}: Istates) => {
  return (
    <div className="sidebar_iconLabel">
      {icon}
    <span className="text">{text}</span>
    {arrow}
  </div>
  )
}

export default SingleIcon;
