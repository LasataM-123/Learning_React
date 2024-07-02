import React, { useState, useEffect } from "react";
import axios from "axios";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://aligned.corvo.com.np/api/Cart"
        );
        console.log(response.data);
        setCart(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error: ", error);
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error occurred: {error}</p>;
  return (
    <div>
      <h1>CART</h1>
      {cart.length > 0 ? (
        <ol>
          {cart.map((item) => (
            <li key={item.cartId}>
              <p>Cart Id: {item.cartId}</p>
              <p>Customer Name:{item.customerName}</p>
              <p>Total: {item.total}</p>
              <ul>
                Items:
                {item.items.map((value) => (
                  <div key={value.id}>
                    <li>Id: {value.id}</li>
                    <li>Product Id: {value.productId}</li>
                    <li>Item Name: {value.itemName}</li>
                    <li>Price: {value.price}</li>
                    <li>Quantity: {value.quantity}</li>
                    <li>Cart Id:{value.cartId}</li>
                  </div>
                ))}
              </ul>
              <ul>
                Billing Address Data:
                <li>Billing Id:{item.billingAddressData.billingID}</li>
                <li>Customer Id: {item.billingAddressData.customerID}</li>
                <li>Location Name: {item.billingAddressData.locationName}</li>
                <li>City: {item.billingAddressData.city}</li>
                <li>Address: {item.billingAddressData.address}</li>
                <li>Phone Number: {item.billingAddressData.phoneNumber}</li>
              </ul>
            </li>
          ))}
        </ol>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};
export default Cart;
