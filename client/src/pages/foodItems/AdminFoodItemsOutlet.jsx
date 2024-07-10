import React from 'react'
import AdminFoodItems from './AdminFoodItems'
import { useLoaderData } from 'react-router-dom';
import { useContext, createContext } from 'react';
import customFetch from '../../utils/customFetch';
import { toast } from 'react-toastify';


export const loader = async () => {
  try {
    const response = await customFetch.get("/admin/items");
    const data = response.data;
    console.log(data);
    return { data };
  } catch (error) {
    toast.error(error?.response?.data?.msg || "An error occurred while fetching data.");
    return { error };
  }
};


const AllFoodItemsContext = createContext();
const AdminFoodItemsOutlet = () => {

  const { data } = useLoaderData();
  console.log(data);
  return (
    <AllFoodItemsContext.Provider value={{ data }}>
       <AdminFoodItems/>
    </AllFoodItemsContext.Provider>
  )
}

export default AdminFoodItemsOutlet;
export const useAllFoodItemsContext = () => useContext(AllFoodItemsContext);