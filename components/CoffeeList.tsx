'use client'

import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/db/firebaseConfig";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ProductsTypes } from "@/app/types/productsType";
import Card from "./Card";


const CoffeeList = () => {

  const [dataProducts, setDataProducts] = useState<ProductsTypes[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const productsCollection = collection(db, "products");
      const productsSnapshot = await getDocs(productsCollection);
      const productsData = productsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      })) as ProductsTypes[];
      setDataProducts(productsData);
    }
    fetchData();
  }, [])


  return (
    <div id='produits' className='max-w-[1000px] w-full mx-auto p-5'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {dataProducts.map((item) => (
          <Card key={item.name} item={item} />
        ))}
      </div>
    </div>
  )
}

export default CoffeeList