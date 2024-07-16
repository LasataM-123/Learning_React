import axios from "axios";
import React, { useState } from "react";

const PostCart = () => {
  const [formData, setFormData] = useState({
    customerName: "",
    customerID: "",
    total: "",
    items: [
      {
        productId: "",
        itemName: "",
        price: "",
        quantity: "",
      },
    ],
    billingAddressData: {
      customerID: "",
      locationName: "",
      city: "",
      address: "",
      phoneNumber: "",
    },
  });
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleItemChange = (index, field, value) => {
    const newItems = [...formData.items];
    newItems[index][field] = value;
    setFormData({ ...formData, items: newItems });
  };

  const handleBillingChange = (field, value) => {
    setFormData({
      ...formData,
      billingAddressData: {
        ...formData.billingAddressData,
        [field]: value,
      },
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      const formObjectToSend = {
        customerName: formData.customerName,
        customerID: formData.customerID,
        total: formData.total,
        items: formData.items.map((item) => ({
          productId: item.productId,
          itemName: item.itemName,
          price: item.price,
          quantity: item.quantity,
        })),

        billingAddressData: {
          customerID: formData.billingAddressData.customerID,
          locationName: formData.billingAddressData.locationName,
          city: formData.billingAddressData.city,
          address: formData.billingAddressData.address,
          phoneNumber: formData.billingAddressData.phoneNumber,
        },
      };
      console.log("At the time of submit: ", JSON.stringify(formObjectToSend));
      setLoading(true);
      const response = await axios.post(
        "https://aligned.corvo.com.np/api/Cart?email=lasatamaharjan2006@gmail.com",
        JSON.stringify(formObjectToSend),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Form data to send", formDataToSend);
      console.log("Response: ", response);
      if (response.status === 200) {
        alert("Cart data added successfully");
      } else {
        alert("Failed to add cart data. Please Try again.");
      }
    } catch (error) {
      console.log("Error: ", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <h1>Cart Data</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="customerName">Customer Name: </label>
        <input
          type="text"
          name="customerName"
          value={formData.customerName}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="customerID">Customer Id: </label>
        <input
          type="text"
          name="customerID"
          value={formData.customerID}
          onChange={handleChange}
        ></input>
        <br />
        <label htmlFor="total">Total: </label>
        <input
          type="text"
          name="total"
          value={formData.total}
          onChange={handleChange}
        ></input>
        <br />
        <ul>
          <p style={{ fontSize: "20px", marginLeft: "-0.1px" }}>Items: </p>
          {formData.items.map((item, index) => (
            <div key={index}>
              <li></li>
              <li>
                <label htmlFor="productId">Product Id: </label>
                <input
                  type="text"
                  name="productId"
                  value={item.productId}
                  onChange={(e) =>
                    handleItemChange(index, "productId", e.target.value)
                  }
                ></input>
              </li>
              <li>
                <label htmlFor="itemName">Item Name: </label>
                <input
                  type="text"
                  name="itemName"
                  value={item.itemName}
                  onChange={(e) =>
                    handleItemChange(index, "itemName", e.target.value)
                  }
                ></input>
              </li>
              <li>
                <label htmlFor="price">Price: </label>
                <input
                  type="text"
                  name="price"
                  value={item.price}
                  onChange={(e) =>
                    handleItemChange(index, "price", e.target.value)
                  }
                ></input>
              </li>
              <li>
                <label htmlFor="quantity">Quantity: </label>
                <input
                  type="text"
                  name="quantity"
                  value={item.quantity}
                  onChange={(e) =>
                    handleItemChange(index, "quantity", e.target.value)
                  }
                ></input>
              </li>
            </div>
          ))}
        </ul>
        <ul>
          <p style={{ fontSize: "20px", marginLeft: "-0.1px" }}>
            Billing Address Data:{" "}
          </p>
          <li></li>
          <li>
            <label htmlFor="customerID">Customer Id: </label>
            <input
              type="text"
              name="customerID"
              value={formData.billingAddressData.customerID}
              onChange={(e) =>
                handleBillingChange("customerID", e.target.value)
              }
            ></input>
          </li>
          <li>
            <label htmlFor="locationName">Location Name: </label>
            <input
              type="text"
              name="locationName"
              value={formData.billingAddressData.locationName}
              onChange={(e) =>
                handleBillingChange("locationName", e.target.value)
              }
            ></input>
          </li>
          <li>
            <label htmlFor="city">City: </label>
            <input
              type="text"
              name="city"
              value={formData.billingAddressData.city}
              onChange={(e) => handleBillingChange("city", e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="address">Address: </label>
            <input
              type="text"
              name="address"
              value={formData.billingAddressData.address}
              onChange={(e) => handleBillingChange("address", e.target.value)}
            ></input>
          </li>
          <li>
            <label htmlFor="phoneNumber">Phone Number: </label>
            <input
              type="text"
              name="phoneNumber"
              value={formData.billingAddressData.phoneNumber}
              onChange={(e) =>
                handleBillingChange("phoneNumber", e.target.value)
              }
            ></input>
          </li>
        </ul>
        <button type="submit" disabled={loading}>
          {loading ? "Submitting.." : "Submit"}
        </button>
      </form>
    </div>
  );
};
export default PostCart;
