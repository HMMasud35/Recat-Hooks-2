import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoIosStar } from "react-icons/io";
import { CiDeliveryTruck } from "react-icons/ci";
import { ImPriceTags } from "react-icons/im";
import { RiShoppingCart2Line } from "react-icons/ri";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (

    <div>
      <section className="w-full bg-gray-50 py-30 dark:bg-gray-900" >
        <div className="container">
          <div className="grid gap-4 grid-cols-4">
            {products.map((item) => {
              return (
                <div className="rounded-lg border-gray-200 p-4 dark:border-gray-700 dark:bg-gray-800 hover:bg-gray-700/60">
                  <div className="h-56 w-full bg-white flex justify-center items-center rounded-md relative">
                    <span className="absolute top-3 left-0 me-2 rounded-br-md rounded-tr-md bg-gray-800 px-2.5 py-0.5 text-sm font-medium text-amber-600 dark:bg-primary-900 dark:text-primary-300">Product ID : 100{item.id}</span>
                    <a href="#">
                      <img className="mx-auto w-full  dark:hidden"
                        src={item.image}
                        alt="products" />

                      <img className="mx-auto w-full hidden h-50 dark:block"
                        src={item.image}
                        alt="products" />
                    </a>
                  </div>

                  <div className="mt-5">
                    <div className="h-25">
                      <a href="#" className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white">
                        {item.title}
                      </a>
                    </div>
                    <div className="flex items-center ">
                      <IoIosStar className="text-yellow-400 mr-1 text-xl" />
                      <IoIosStar className="text-yellow-400 mr-1 text-xl" />
                      <IoIosStar className="text-yellow-400 mr-1 text-xl" />
                      <IoIosStar className="text-yellow-400 mr-1 text-xl" />
                      <IoIosStar className="text-yellow-400 mr-1 text-xl" />
                      <p className="ml-2 text-xl text-white">5.0</p>
                    </div>
                    <div className="flex justify-between mt-2">
                      <p className="flex items-center text-sm group text-white"><CiDeliveryTruck className="mr-2 text-xl " />Fast Delivery</p>
                      <p className="flex items-center text-sm group text-white"><ImPriceTags className="mr-2 text-xl " />Best Price</p>
                    </div>
                    <div className="flex gap-5 mt-5 mb-2">
                      <h3 className="text-white text-xl font-bold">Tk. {item.price}</h3>
                      <p className="text-white/30 text-xl  font-semibold">Tk. {item.price}</p>
                    </div>
                    <button className="flex items-center text-xl font-bold text-white m-auto justify-center bg-amber-600 w-full py-2 rounded-md"><RiShoppingCart2Line className="mr-2 text-2xl" />Add to cart</button>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="w-full text-center mt-10">
            <button
              type="button"
              className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Show more
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Products;

