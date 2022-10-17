import React, { useState } from "react";
import { ReactComponent as FilterIcon } from "../../assets/filterIcon.svg";
import "../../styles/Board.scss";

const SingleListTitle: React.FC<{ title: string }> = ({ title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal=()=>{
    setIsModalOpen(!isModalOpen);
  }

  return (
    <>
      <div className="singleItem">
        <h4 className="title">{title}</h4>
        <FilterIcon onClick={handleModal} style={{cursor: "pointer"}}/>
      </div>
      {isModalOpen && 
        <div className="dropdown-menu">
          <form className="form">
            <div className="form_group">
              <div className="labelContainer">
                <label htmlFor="organization" className="label">
                  organization
                </label>
              </div>
              <select name="organization" id="organization">
                <option defaultValue="select">select</option>
                <option defaultValue="kudi">kudi</option>
                <option defaultValue="lendqsr">lendqsr</option>
                <option defaultValue="chipper">chipper</option>
              </select>
            </div>
            <div className="form_group">
              <div className="labelContainer">
                <label htmlFor="username" className="label">
                  username
                </label>
              </div>
              <input name="username" type="text" placeholder="user" defaultValue="" />
            </div>
            <div className="form_group">
              <div className="labelContainer">
                <label htmlFor="email" className="label">
                  email
                </label>
              </div>
              <input name="email" type="email" placeholder="email" defaultValue="" />
            </div>
            <div className="form_group">
              <div className="labelContainer">
                <label htmlFor="date" className="label">
                  date
                </label>
              </div>
              <input name="date" type="date" placeholder="date" defaultValue="" />
            </div>
            <div className="form_group">
              <div className="labelContainer">
                <label htmlFor="phonenumber" className="label">
                  phonenumber
                </label>
              </div>
              <input
                name="phonenumber"
                type="text"
                placeholder="phonenumber"
                defaultValue=""
              />
            </div>
            <div className="form_group">
              <div className="labelContainer">
                <label htmlFor="status" className="label">
                  status
                </label>
              </div>
              <select name="status" id="status">
                <option defaultValue="select">select</option>
                <option defaultValue="pending">pending</option>
                <option defaultValue="valid">valid</option>
                <option defaultValue="invalid">invalid</option>
                <option defaultValue="blacklisted">blacklisted</option>
              </select>
            </div>
            <div className="btnContainer">
              <button className="resetBtn">reset</button>
              <button className="filterBtn">filter</button>
            </div>
          </form>
        </div>
      }
    </>
  );
};

export default SingleListTitle;
