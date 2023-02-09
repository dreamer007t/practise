import React, { useState } from 'react';

const ListForm = () => {
  // State to store the items in the list
  const [items, setItems] = useState([]);

  // State to store the values of the form inputs
  const [formData, setFormData] = useState({
    name: '',
    description: ''
  });

  // Function to handle form submissions
  const handleSubmit = event => {
    event.preventDefault();
    setItems([...items, formData]);
    setFormData({ name: '', description: '' });
  };

  // Function to handle changes to the form inputs
  const handleChange = event => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <button type="submit">Add Item</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <h3>{item.name}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListForm;