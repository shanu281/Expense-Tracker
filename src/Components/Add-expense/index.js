import React from 'react'
import { MdCancel } from "react-icons/md";
import { AiOutlineBackward } from "react-icons/ai";
import {  NavLink } from "react-router-dom";

const AddExpense = () => {
  return (
    <div>
         <div className="flex back-section">
         <NavLink to="/">
          <div>
            <button className="btn">
              <AiOutlineBackward /> Back
            </button>
          </div>
             </NavLink>  
         <NavLink to="/">
          <div>
            <button className="btn">
              {" "}
              Cancel <MdCancel />
            </button>
          </div>
             </NavLink>  
          
        </div>
    </div>
  )
}

export default AddExpense;