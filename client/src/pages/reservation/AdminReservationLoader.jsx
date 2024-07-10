import { toast } from "react-toastify";
import customFetch from "../../utils/customFetch";
import React from 'react'
import { useLoaderData } from 'react-router-dom';
import { useContext, createContext } from 'react';
import AdminReservationTable from "./AdminReservationTable";
import AdminReservation from "./AdminReservation";

export const loader = async () => {
    try {
        const response = await customFetch.get("/reserve/reserve-details");
        const data = response.data;
        console.log(data);
        return { data };
    } catch (error) {
        toast.error(error?.response?.data?.msg || "An error occurred while fetching data.");
        return { error };
    }
};

const AllReserveContext = createContext();
const AdminResrvationLoader = () => {

  const { data } = useLoaderData();
  console.log(data);

  return (
    <AllReserveContext.Provider value={{ data }}>
       <AdminReservation/>
    </AllReserveContext.Provider>
  )
}

export default AdminResrvationLoader;
export const useAllReserveContext = () => useContext(AllReserveContext);
