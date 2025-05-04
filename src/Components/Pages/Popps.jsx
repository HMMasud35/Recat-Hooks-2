import axios from "axios";
import React, { useEffect, useState } from "react";
import { RiShoppingCart2Line } from "react-icons/ri";

const Popps = () => {
  const [products, setProducts] = useState([]);
  let [Qty, setNumber] = useState(1);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  function handleIncrement() {
    setNumber(Qty + 1);
  }
  function handleDicrement() {
    if (Qty > 1) {
      setNumber(Qty - 1);
    }
  }

  return (
    <div className="absolute rounded-2xl top-2/8 left-3/12 w-2xl h-100 bg-black flex gap-6 p-5 m-auto">
      {products.map((item) => {
        return (
          <div>
            <div className="w-2/4 h-full">
              <img src={item.image} alt="fan.jpg" />
            </div>
            <div className="w-2/4 h-full">
              <h4 className="text-2xl text-white">{item.title}</h4>
              <div className="border-b border-t py-4 border-white/35 mt-5">
                <h3 className="text-3xl text-orange-400 font-semibold ">Rs. 499</h3>
                <h6 className="text-white/65 line-through inline-block mr-2">Rs. 700</h6>
                <span className="text-white/85">-29%</span>
              </div>
              <div>
                <div className="flex mt-5 gap-4">
                  <p className="text-white/55 mr-7">Quantity</p>
                  <button onClick={handleDicrement} className="text-3xl text-white/55 w-8 bg-white/40">-</button>
                  <div className="text-2xl text-white/55 w-6">{Qty}</div>
                  <button onClick={handleIncrement} className="text-3xl text-white/55 w-8 bg-white/40">+</button>
                </div>
                <div className="mt-8 flex">
                  <button className="text-xl text-white py-3 w-40 mr-3 bg-orange-600 rounded-md" href="">Buy Now</button>
                  <button className="flex justify-center text-xl text-white py-3 w-40  bg-sky-600 rounded-md" href=""><RiShoppingCart2Line className="mr-1 text-2xl" />Add to Cart</button>
                </div>
              </div>
            </div>
          </div>
        )
      })}

    </div>
  )
}

export default Popps;