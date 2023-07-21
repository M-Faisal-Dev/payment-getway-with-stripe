"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";

const Pricing = () => {
  const [price, setPrice] = useState([]);
 
 
  useEffect(() => {
    const getData = async () => {
      try {
        const fetchData = await axios.get("/api/product");
        const getData = await fetchData.data
        setPrice(getData);
      } catch (error) {
        console.error("Error fetching data from /api/product:", error);
      }
    };

    getData(); 

   
  }, []); 


  const handleSubmit = async (id) => {
    try {
      const { data } = await axios.post("/api/payment", {
        priceId: id
      });
  
     
      window.location.assign(data);
    } catch (error) {
      console.log(error);
      // Handle error if needed
    }
  };

console.log(price)


   return (
  <div>
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-4xl text-center font-sans  py-8" >Payment Getway With Stripe</h1>
      <div className="flex md:flex-row flex-col flex-wrap justify-center items-center px-4 py-2 gap-y-7 gap-x-7 max-w-7xl">
        {price.slice(0, 1).map((item) => (
          <div key={item.id} className="flex md:flex-row flex-col px-4 py-2  gap-y-7 gap-x-7 max-w-7xl">
            <div
              className="bg-gradient-to-t from-gray-900 to-gray-600 border border-gray-200 rounded-xl drop-shadow-md shadow-current p-5 h-auto w-[300px] hover:shadow-lg hover:transform hover:scale-105 duration-500 ease-in-out"
            >
              <div className="flex flex-col justify-center items-center text-white p-2">
                <div className="text-3xl">Mover</div>
                <div className="flex justify-center my-3 font-medium md:tracking-tighter">
                  <div className="text-3xl md:text-5xl">{(item.unit_amount / 100).toLocaleString(
                    'en-US',{
                      style: 'currency',
                      currency: 'USD'
                    }
                  )}</div>
                  <div className="text-lg md:text-xl mt-[9px] md:mt-[20px]">/mo</div>
                </div>
                <div className="px-8 py-1 rounded-3xl font-medium bg-white text-stone-900 hover:bg-gray-100 cursor-pointer">
                  <button onClick={() => handleSubmit(item.id)}>Order Now</button>
                </div>
                <div className="text-white text-sm my-4 border-t border-white flex flex-col justify-center items-center h-60">
                  <div className="m-1">All basic features</div>
                  <div className="m-1">Drip course content</div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {price.slice(1, 2).map((item) => (
          <div key={item.id} className="flex md:flex-row flex-col px-4 py-2 gap-y-7 gap-x-7 max-w-7xl">
            <div
              className="bg-gradient-to-b from-orange-500 to-yellow-500 border border-gray-200 rounded-xl drop-shadow-md shadow-current p-5 h-auto w-[300px] hover:shadow-lg hover:transform hover:scale-105 duration-500 ease-in-out"
            >
              <div className="flex flex-col justify-center items-center text-white p-2">
                <div className="text-3xl">Shaker</div>
                <div className="flex justify-center my-3 font-medium md:tracking-tighter">
                  <div className="text-3xl md:text-5xl">{(item.unit_amount / 100).toLocaleString(
                    'en-US',{
                      style: 'currency',
                      currency: 'USD'
                    }
                  )}</div>
                  <div className="text-lg md:text-xl mt-[9px] md:mt-[20px]">/mo</div>
                </div>
                <div className="px-8 py-1 rounded-3xl font-medium bg-white text-stone-900 hover:bg-gray-100 cursor-pointer">
                  <button onClick={() => handleSubmit(item.id)}>Order Now</button>
                </div>
                <div className="text-white text-sm my-4 border-t border-white flex flex-col justify-center items-center h-60">
                  <div className="m-1">All basic features</div>
                  <div className="m-1">Advanced tracking</div>
                  <div className="m-1">Onboarding + Migration assistance</div>
                  <div className="m-1">Drip course content</div>
                  <div className="m-1">Affiliates</div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {price.slice(2, 3).map((item) => (
          <div key={item.id} className="flex md:flex-row flex-col px-4 py-2  gap-y-7 gap-x-7 max-w-7xl">
            <div
              className="bg-gradient-to-br from-blue-700 via-blue-800 to-gray-900 border border-gray-200 rounded-xl drop-shadow-md shadow-current p-5 h-auto w-[300px] hover:shadow-lg hover:transform hover:scale-105 duration-500 ease-in-out"
            >
              <div className="flex flex-col justify-center items-center text-white p-2">
                <div className="text-3xl">Earthquaker</div>
                <div className="flex justify-center my-3 font-medium md:tracking-tighter">
                  <div className="text-3xl md:text-5xl">{(item.unit_amount / 100).toLocaleString(
                    'en-US',{
                      style: 'currency',
                      currency: 'USD'
                    }
                  )}</div>
                  <div className="text-lg md:text-xl mt-[9px] md:mt-[20px]">/mo</div>
                </div>
                <div className="px-8 py-1 rounded-3xl font-medium bg-white text-stone-900 hover:bg-gray-100 cursor-pointer">
                <button onClick={() => handleSubmit(item.id)}>Order Now</button>
                </div>
                <div className="text-white text-sm my-4 border-t border-white flex flex-col justify-center items-center h-60">
                  <div className="m-1">All basic features</div>
                  <div className="m-1">Advanced tracking</div>
                  <div className="m-1">Onboarding + Migration assistance</div>
                  <div className="m-1">Drip course content</div>
                  <div className="m-1">Affiliates</div>
                  <div className="m-1">Multiple Payments</div>
                  <div className="m-1">ACH payments</div>
                  <div className="m-1">Team Licenses</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);


};

export default Pricing;
