import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './product.css'; // Import the CSS file

const AddProduct = () => {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();


  const handleChangeProductName = (e) => {
    setProductName(e.target.value);
  };

  const handleChangeQuantity = (e) => {
    setQuantity(e.target.value);
  };

  const handleChangePrice = (e) => {
    setPrice(e.target.value);
  };

  

  const validate = () => {
    const newErrors = {};
    if (!productName) newErrors.productName = 'Product Name is required';
    if (!quantity) {
      newErrors.quantity = 'Quantity is required';
    } else if (isNaN(quantity)) {
      newErrors.quantity = 'Quantity must be a number';
    }
    if (!price) {
      newErrors.price = 'Price is required';
    } else if (isNaN(price)) {
      newErrors.price = 'Price must be a number';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        // POST request to add the product
        const response = await fetch('http://localhost:5000/products', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            productName,
            quantity,
            price,
          }),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        // Clear the form or perform other actions
        setProductName('');
        setQuantity('');
        setPrice('');
        setErrors({});
        
        // Optionally navigate back after successful submission
        navigate('/product');
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      }
    }
  };

  const handleBackButton=()=>{
   // const history = useHistory();
   navigate('/product');
  }

  return (
    <div className="product-form">
      <form onSubmit={handleSubmit}>
        <h1>Add Product</h1>
        <div className="input-group">
          <input
            type="text"
            placeholder="Product Name"
            value={productName}
            onChange={handleChangeProductName}
          />
          {errors.productName && <span className="error-message">{errors.productName}</span>}
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder="Quantity"
            value={quantity}
            onChange={handleChangeQuantity}
          />
          {errors.quantity && <span className="error-message">{errors.quantity}</span>}
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder="Price"
            value={price}
            onChange={handleChangePrice}
          />
          {errors.price && <span className="error-message">{errors.price}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
      <button onClick={handleBackButton}>back</button>
    </div>
  );
};

export default AddProduct;