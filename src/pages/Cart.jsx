import React, { useEffect, useState } from "react";
import CartItem from "../components/CartItem";

async function getcartItems() {
  try {
    const response = await fetch(
      "http://carretailerbackend.vercel.app/api/cart/getcart",
      {
        method: "GET",
        credentials: "include", // include cookies with the request
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    console.log(data);
    return data.parts;
  } catch (error) {
    console.error(error);
  }
}

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const items = await getcartItems();
        if (!items) {
          return;
        }
        setCartItems(items);
      } catch (err) {
        console.error(err);
      }
    };
    fetchCartItems();
  }, []);

  // Function to remove an item from the cart
  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  // Function to update quantity for a specific item
  const handleUpdateQuantity = (id, newQuantity) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
  };

  // Calculate the total price of all items in the cart
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * (item.quantity || 1); // Assuming `quantity` exists or default to 1
    }, 0);
  };

  return (
    <div className="p-6">
      {cartItems.length > 0 ? (
        <div className="grid grid-cols-5">
          <div className="col-span-4">
            {cartItems.map((item) => (
              <CartItem
                key={item._id}
                item={item}
                onRemove={handleRemoveItem}
                onUpdateQuantity={handleUpdateQuantity}
                setCartItems={setCartItems}
                getcartItems={getcartItems}
              />
            ))}
          </div>
          <div className="flex flex-col justify-between">
            <div className="flex justify-center text-center text-2xl h-1/2 pb-4 font-bold mt-4 items-end">
              Total: ₹{calculateTotal().toFixed(2)}
            </div>
            <div className="flex pb-4 justify-center">
              <div className="flex ">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center text-lg">Your cart is empty.</p>
      )}
    </div>
  );
};

export default Cart;
