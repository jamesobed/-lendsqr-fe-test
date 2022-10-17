import React, { useState, useEffect } from "react";
import "../../styles/Board.scss";
import SingleListTitle from "./SingleListTitle";
import { ReactComponent as ThreeDots } from "../../assets/Threedots.svg";
import { ReactComponent as ArrowLeft } from "../../assets/arrowLeft.svg";
import { ReactComponent as ArrowRight } from "../../assets/arrowRight.svg";

const Board = () => {

  const weekday = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

  const [data, getData] = useState<any[]>([]);

  const status = ["inactive", "active", "pending", "blacklisted"];
  const URL =
    "https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users";

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(URL)
      .then((res) => res.json())

      .then((response) => {
        console.log(response);
        getData(response);
      });
  };

  return (
    <>
    
    <div className="board-container">
      <tbody>
        <tr>
          <th>
            <SingleListTitle title="organization" />
          </th>
          <th>
            <SingleListTitle title="username" />
          </th>
          <th>
            {" "}
            <SingleListTitle title="email" />
          </th>
          <th>
            <SingleListTitle title="phone number" />
          </th>
          <th>
            <SingleListTitle title="date joined" />
          </th>
          <th>
            <SingleListTitle title="status" />
          </th>
        </tr>
        {data.map((item, i) => (
          <tr key={i} >
            <td>{item.orgName}</td>
            <td>{item.userName}</td>
            <td>{item.email}</td>
            <td>{item.phoneNumber}</td>
            <td>
            {weekday[new Date(item.createdAt).getUTCDay()] +
                  "," +
                  " " +
                  item.createdAt.slice(11, 19)}
              </td>
            <td>
              <button className=  {item.accountBalance === Number("510.9")
                ? "statusBtn inactive"
                : item.accountBalance <= 501.4
                ? "statusBtn pending"
                : item.accountBalance >= 800
                ? "statusBtn active"
                : "statusBtn blacklisted"}>

              {item.accountBalance === Number("510.9")
                ? status[0]
                : item.accountBalance <= 501.4
                ? status[2]
                : item.accountBalance >= 800
                ? status[1]
                : status[3]}
              </button>
            </td>
            <td>
              <ThreeDots />
            </td>
          </tr>
        ))}
      </tbody>

      {/* <div className="board-container_customersDetails">
        <h6 className="text organization">Lendsqr</h6>
        <h6 className="text username">adedeji</h6>
        <h6 className="text email">adedeji@lndsqr.com</h6>
        <h6 className="text phonenumber">0809033478</h6>
        <h6 className="text date">May 15, 2020 10:00 AM</h6>
        <button className="status">inactive</button>
      </div> */}
    </div>
    <div className="board-container_pagination">
    <div className="left">
      <p className="text">showing</p>
      <select className="select">
        <option>100</option>
        <option>50</option>
        <option>20</option>
        <option>10</option>
      </select>
      <p className="text">out of 100</p>
    </div>
    <div className="right">
      <button className="right_pageBtn icon">
      <ArrowLeft/>
      </button>
      <button className="right_pageBtn">1</button>
      <button className="right_pageBtn">2</button>
      <button className="right_pageBtn">3</button>
      <button className="right_pageBtn">...</button>
      <button className="right_pageBtn">15</button>
      <button className="right_pageBtn">16</button>
    <button className="right_pageBtn icon">
      <ArrowRight/>
    </button>
    </div>

  </div>
  </>
  );
};

export default Board;
