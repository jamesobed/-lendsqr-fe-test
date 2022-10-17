import React from "react";
import { NavLink } from "react-router-dom";

import "../../styles/Sidebar.scss";
// import SingleIcon from "./SingleIcon";
// import DownArrow from "../../assets/arrowDown.svg";

// import Briefcase from "../../assets/icons/briefcase.svg";
// import HomeIcon from "../../assets/icons/home.svg";
// import UserIcon from "../../assets/icons/userfriends.svg";
// import GuarantorIcon from "../../assets/icons/users.svg";
// import LoanIcon from "../../assets/icons/loan.svg";
// import HandshakeIcon from "../../assets/icons/handshake.svg";
// import PiggyIcon from "../../assets/icons/piggybank.svg";
// import LoanReqIcon from "../../assets/icons/loanreq.svg";
// import WhiteListIcon from "../../assets/icons/whitelist.svg";
// import KarmaIcon from "../../assets/icons/karma.svg";
// import BankIcon from "../../assets/icons/bank.svg";
// import FeesIcon from "../../assets/icons/feescharges.svg";
// import TransactionIcon from "../../assets/icons/transactions.svg";
// import ServiceIcon from "../../assets/icons/services.svg";
// import ServiceAcctIcon from "../../assets/icons/serviceaccount.svg";
// import SettlementsIcon from "../../assets/icons/settlements.svg";
// import ReportIcon from "../../assets/icons/chartbar.svg";
// import PreferenceIcon from "../../assets/icons/preference.svg";
// import FeepricingIcon from "../../assets/icons/feepricing.svg";
// import AuditIcon from "../../assets/icons/audit.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const index = () => {
  return (
    <div className="pl-0 d-none d-md-block">
      <nav id="sideNav" className="position-fixed">
        <header className="py-1">
          <FontAwesomeIcon className="pr-2" icon="briefcase" />
          Switch Organisation
          <select name="" id="switch"></select>
        </header>
        <ul className="pl-0 pb-2 sidebar">
          <NavLink to="#" className="nav-link">
            <FontAwesomeIcon className="pr-2" icon="house-chimney" />
            Dashboard
          </NavLink>
          <p className="nav-text">CUSTOMERS</p>
          <NavLink to="#" className="nav-link">
            <FontAwesomeIcon className="pr-2" icon="users" />
            Users
          </NavLink>
          <NavLink to="#" className="nav-link">
            <FontAwesomeIcon className="pr-2" icon="user-group" />
            Guarantors
          </NavLink>
          <NavLink to="#" className="nav-link">
            <FontAwesomeIcon className="pr-2" icon="sack-dollar" />
            Loans
          </NavLink>
          <NavLink to="#" className="nav-link">
            <FontAwesomeIcon className="pr-2" icon="handshake" />
            Decision Models
          </NavLink>
          <NavLink to="#" className="nav-link">
            <FontAwesomeIcon className="pr-2" icon="piggy-bank" />
            Savings
          </NavLink>
          <NavLink to="#" className="nav-link">
            <FontAwesomeIcon className="pr-2" icon="hand-holding-dollar" />
            Loan Requests
          </NavLink>
          <NavLink to="#" className="nav-link">
            <FontAwesomeIcon className="pr-2" icon="user-check" />
            Whitelist
          </NavLink>
          <NavLink to="#" className="nav-link">
            <FontAwesomeIcon className="pr-2" icon="user-xmark" />
            Karma
          </NavLink>
          <p className="nav-text">BUSINESSES</p>
          <NavLink to="#" className="nav-link">
            <FontAwesomeIcon className="pr-2" icon="briefcase" />
            Organization
          </NavLink>
          <NavLink to="#" className="nav-link">
            <FontAwesomeIcon className="pr-2" icon="hand-holding-dollar" />
            Loan Products
          </NavLink>
          <NavLink to="#" className="nav-link">
            <i className="bi bi-house-heart"></i>Savings Products
          </NavLink>
          <NavLink to="#" className="nav-link">
            <FontAwesomeIcon className="pr-2" icon="coins" />
            Fees and Charges
          </NavLink>
          <NavLink to="#" className="nav-link">
            <FontAwesomeIcon className="pr-2" icon="money-bill-transfer" />
            Transactions
          </NavLink>
          <NavLink to="#" className="nav-link">
            <FontAwesomeIcon className="pr-2" icon="dharmachakra" />
            Services
          </NavLink>
          <NavLink to="#" className="nav-link">
            <FontAwesomeIcon className="pr-2" icon="user-gear" />
            Service Account
          </NavLink>
          <NavLink to="#" className="nav-link">
            <FontAwesomeIcon className="pr-2" icon="file-lines" />
            Settlements
          </NavLink>
          <NavLink to="#" className="nav-link">
            <FontAwesomeIcon className="pr-2" icon="chart-column" />
            Reports
          </NavLink>
          <p className="nav-text">SETTINGS</p>
          <NavLink to="#" className="nav-link">
            <FontAwesomeIcon className="pr-2" icon="sliders" />
            Preferences
          </NavLink>
          <NavLink to="#" className="nav-link">
            <i className="bi bi-patch-check-fill pr-2"></i>Fees and Pricing
          </NavLink>
          <NavLink to="#" className="nav-link">
            <i className="bi bi-journal-text pr-2"></i>Audit Logs
          </NavLink>
          <NavLink to="#" className="nav-link">
            <FontAwesomeIcon className="pr-2" icon="gear" />
            Systems Messages
          </NavLink>
          <NavLink to="#" className="nav-link">
            <FontAwesomeIcon className="pr-2" icon="right-from-bracket" />
          </NavLink>
          <NavLink to="#" className="nav-link">
            Logout
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default index;
