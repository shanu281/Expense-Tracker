import React from "react";
import { useState } from "react";
import { MdCancel } from "react-icons/md";
import { AiOutlineBackward } from "react-icons/ai";
import "./style.css";
import { Link, NavLink } from "react-router-dom";
import AddExpense from "../Add-expense"

const Search = () => {
  const [expense, setExpense] = useState("");

  const handleExpense = (event) => {
    setExpense(event.target.value);
  };

  const handleAdd = () => {};

  return (
    <>
      {window.location.pathname === "/" ? (
        <div className="search-section flex">
          <div>
            <input
              placeholder="Enter expenses"
              value={expense}
              onChange={handleExpense}
            />
          </div>
          <NavLink to="/addexpense">

          <div>
            <button onClick={handleAdd}>Add +</button>
          </div>
          </NavLink>
        </div>
      ) : (
        <div className="flex back-section">
         <NavLink to="/home">
          <div>
            <button className="btn">
              <AiOutlineBackward /> Back
            </button>
          </div>
             </NavLink>  
         <NavLink to="/home">
          <div>
            <button className="btn">
              {" "}
              Cancel <MdCancel />
            </button>
          </div>
             </NavLink>  
          
        </div>
      )}
    </>
  );
};

export default Search;
