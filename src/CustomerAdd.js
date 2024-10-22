import React, { useState } from "react";
import { addCustomer as addCustomerAction } from "./slices/customerSlice";
import { UseDispatch, useDispatch } from "react-redux";

export default function CustomerAdd() {
      const [input, setInput] = useState("");
      const dispatch = useDispatch();

      function addCustomer() {
        if (input) {
            dispatch(addCustomerAction(input))
            setInput("");
        }
      }

    return <>
    <div >
        <h3 className="text-bg-warning text-center col-12">Add New Customer</h3>
      <ul style={{listStyle:"none"}} className="list-inline text-center">
       <li className="list-inline-item"><input type="text" placeholder="Enter the Value" value={input} onChange={(e)=> setInput(e.target.value)}/></li> 
      <li className="list-inline-item"> <button  className="btn btn-primary" onClick={addCustomer}>Add</button>     </li>  
      </ul>
       
    </div>
    </>
}