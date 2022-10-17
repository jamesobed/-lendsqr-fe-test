import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { ReactComponent as BackArrow } from "../assets/icons/backarrow.svg";
import "../styles/Userdashboard.scss";
import { ReactComponent as Avatar } from "../assets/icons/graceavatar.svg";
import { ReactComponent as Star1 } from "../assets/icons/star1.svg";
import { ReactComponent as Star2 } from "../assets/icons/star2.svg";
import { ReactComponent as Star3 } from "../assets/icons/star3.svg";

const UserDashboard = () => {
  const [general, setGeneral] = useState(false);
  const [document, setDocument] = useState(false);
  const [bankDetails, setbankDetails] = useState(false);
  const [loans, setLoans] = useState(false);
  const [savings, setSavings] = useState(false);
  const [system, setSystem] = useState(false);

  const selectGeneral = () => {
    setGeneral(true);
    setDocument(false);
    setbankDetails(false);
    setLoans(false);
    setSavings(false);
    setSystem(false);
    console.log("WORKING", general);
  };
  const selectDocument = () => {
    setDocument(true);
    setGeneral(false);
    setbankDetails(false);
    setLoans(false);
    setSavings(false);
    setSystem(false);
  };
  const selectBankDetails = () => {
    setbankDetails(true);
    setDocument(false);
    setGeneral(false);
    setLoans(false);
    setSavings(false);
    setSystem(false);
  };
  const selectLoans = () => {
    setLoans(true);
    setbankDetails(false);
    setDocument(false);
    setGeneral(false);
    setSavings(false);
    setSystem(false);
  };
  const selectSystem = () => {
    setLoans(false);
    setbankDetails(false);
    setDocument(false);
    setGeneral(false);
    setSavings(false);
    setSystem(true);
  };
  const selectSavings = () => {
    setSavings(true);
    setLoans(false);
    setbankDetails(false);
    setDocument(false);
    setGeneral(false);
    setSystem(false);
  };

  return (
    <div className="dashboard">
      <Navbar />
      <Sidebar />
      <div className="backToUsers">
        <BackArrow />
        <p className="backToUsers_text">Back to Users</p>
      </div>
      <div className="userdetails">
        <h4 className="userdetails_title">user details</h4>
        <div className="userdetails_btnContainer">
          <button className="blacklistBtn">blacklist user</button>
          <button className="activateUserBtn">activate user</button>
        </div>
      </div>
      <div className="header-container">
        <div className="userImageName">
          <Avatar />
          <div className="name-details">
            <h3 className="name">grace effiom</h3>
            <p className="acctNumber">LSQFf587g90</p>
          </div>
        </div>

        <div className="rating">
          <h4 className="rating_title">User's Tier</h4>
          <i className="rating_stars">
            <Star1 />
            <Star2 />
            <Star3 />
          </i>
        </div>
        <div className="accountDetails">
          <h4 className="amount">#200,000.00</h4>
          <p className="bankname">9912345678/Providus Bank</p>
        </div>

        <ul className="list_items">
          <li
            className={general ? "items active" : "items"}
            onClick={selectGeneral}
          >
            general details
          </li>
          <li
            className={document ? "items active" : "items"}
            onClick={selectDocument}
          >
            documents
          </li>
          <li
            className={bankDetails ? "items active" : "items"}
            onClick={selectBankDetails}
          >
            bank details
          </li>
          <li
            className={loans ? "items active" : "items"}
            onClick={selectLoans}
          >
            loans
          </li>
          <li
            className={savings ? "items active" : "items"}
            onClick={selectSavings}
          >
            savings
          </li>
          <li
            className={system ? "items active" : "items"}
            onClick={selectSystem}
          >
            app and system
          </li>
        </ul>
      </div>
      <section className="details-container">
        <div className="details-container_personalInfo">
          <h3 className="heading">personal information</h3>
          <article className="contentA">
            <div className="contentA-item">
              <h5 className="title">full name</h5>
              <h5 className="name"> grace effiom</h5>
            </div>
            <div className="contentA-item">
              <h5 className="title">phone number</h5>
              <h5 className="name"> 070345678912</h5>
            </div>
            <div className="contentA-item">
              <h5 className="title">email address</h5>
              <h5 className="name email"> grace@gmail.com</h5>
            </div>
            <div className="contentA-item">
              <h5 className="title">bvn</h5>
              <h5 className="name"> 07060780922</h5>
            </div>
            <div className="contentA-item">
              <h5 className="title">gender</h5>
              <h5 className="name"> female</h5>
            </div>
          </article>
          <article className="contentB fix">
            <div className="contentB-item ">
              <h5 className="title">marital status</h5>
              <h5 className="name"> single</h5>
            </div>
            <div className="contentB-item">
              <h5 className="title">children</h5>
              <h5 className="name"> none</h5>
            </div>
            <div className="contentB-item">
              <h5 className="title">type of residence</h5>
              <h5 className="name">parent's apartment</h5>
            </div>
          </article>
        </div>

        {/* EDUCATION AND EMPLOYABILITY */}
        <div className="details-container_personalInfo">
          <h3 className="heading">education and employability</h3>
          <article className="contentA">
            <div className="contentA-item">
              <h5 className="title">level of education</h5>
              <h5 className="name"> B.Sc</h5>
            </div>
            <div className="contentA-item">
              <h5 className="title">employment status</h5>
              <h5 className="name"> employed</h5>
            </div>
            <div className="contentA-item">
              <h5 className="title">sector of employment</h5>
              <h5 className="name email">fintech</h5>
            </div>
            <div className="contentA-item">
              <h5 className="title">duration of employment</h5>
              <h5 className="name"> 2 years</h5>
            </div>
          </article>

          <article className="contentB">
          <div className="contentB-item">
              <h5 className="title">office email</h5>
              <h5 className="name email"> grace@lendsqr.com</h5>
            </div>
            <div className="contentB-item">
              <h5 className="title">monthly income</h5>
              <h5 className="name"> #200,000.00 - #400,000.00</h5>
            </div>
            <div className="contentB-item">
              <h5 className="title">loan repayment</h5>
              <h5 className="name"> #40,000</h5>
            </div>
          </article>
        </div>

         {/* SOCIALS */}
         <div className="details-container_personalInfo social">
          <h3 className="heading">socials</h3>
          <article className="contentA">
            <div className="contentA-item">
              <h5 className="title">twitter</h5>
              <h5 className="name email" > @grace_effrom</h5>
            </div>
            <div className="contentA-item">
              <h5 className="title">facebook</h5>
              <h5 className="name"> grace effiom</h5>
            </div>
            <div className="contentA-item">
              <h5 className="title">instagram</h5>
              <h5 className="name email">@grace_effrom</h5>
            </div>
           </article>
      
        </div>

        {/* GUARANTOR */}
        <div className="details-container_personalInfo">
          <h3 className="heading">guarantor</h3>
          <article className="contentA">
            <div className="contentA-item">
              <h5 className="title">full name</h5>
              <h5 className="name"> debby ogana</h5>
            </div>
            <div className="contentA-item">
              <h5 className="title">phone number</h5>
              <h5 className="name"> 070345678912</h5>
            </div>
            <div className="contentA-item">
              <h5 className="title">email address</h5>
              <h5 className="name email"> grace@gmail.com</h5>
            </div>
            <div className="contentA-item">
              <h5 className="title">relationship</h5>
              <h5 className="name email">sister</h5>
            </div>

          </article>
         
        </div>


        <div className="details-container_personalInfo">

          <article className="contentA">
            <div className="contentA-item">
              <h5 className="title">full name</h5>
              <h5 className="name"> debby ogana</h5>
            </div>
            <div className="contentA-item">
              <h5 className="title">phone number</h5>
              <h5 className="name"> 070345678912</h5>
            </div>
            <div className="contentA-item">
              <h5 className="title">email address</h5>
              <h5 className="name email"> grace@gmail.com</h5>
            </div>
            <div className="contentA-item">
              <h5 className="title">relationship</h5>
              <h5 className="name email">sister</h5>
            </div>

          </article>
         
        </div>

      </section>
    </div>
  );
};

export default UserDashboard;
