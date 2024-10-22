import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCustomer } from "./slices/customerSlice";
import { UseDispatch } from "react-redux";

export default function CustomerView() {
     const customers =  useSelector((state) => state.customers)
     const dispatch = useDispatch();

     function deleteHandler(index) {
         dispatch(deleteCustomer(index))
     }

    return <div>
        <h3 className="text-center">Customer List</h3>
        <ul className="text-center list-unstyled " >
            {
               customers.map((customer, index) =><li className="mt-2">{customer} <button className="btn btn-dark" onClick={() =>deleteHandler(index)}>Delete</button></li> )
            }
        </ul>
    </div>
}