import React, { useState } from "react";
import "./App.css";
import * as yup from "yup";

const PizzaOrder = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Name is a required field")
  });

  const [allMyData, setAllMyData] = useState({
    name: "",
    size: "Small",
    pepperoni: false,
    olives: false,
    bacon: false,
    pepperoncini: false,
    special: ""
  })

  const [errors, setErrors] = useState({
    name: "",
  });

  const [orderPizza, setOrderPizza] = useState({
    name: "",
    size: "Small",
    pepperoni: false,
    olives: false,
    bacon: false,
    pepperoncini: false,
    special: ""
  })

  const inputChange = (event) => {
    event.persist()
    let value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setOrderPizza({
      ...orderPizza,
      [event.target.name]: value
    });
  }

  const formSubmit = (event) => {
    event.preventDefault();
    setAllMyData(orderPizza)
    console.log(allMyData)
  };

  const handleName = (event) => {
    event.persist()
    setOrderPizza({
      ...orderPizza,
      [event.target.name]: event.target.value
    });

    yup.reach(formSchema, event.target.name)
    .validate(event.target.value)
    .then( valid => {
      setErrors({
        ...errors,
        [event.target.name]: ""
      })
    })
    .catch( err => {
      console.log(err.errors);
      setErrors({
        ...errors,
        [event.target.name]: err.errors[0]
      })
    })
  }

  return (
    <div className="options">
      <div className="pizzaHeader" />
      <form onSubmit={formSubmit}> 
        <label htmlFor="name">Name:
          <input 
            id="name"
            name="name"
            type="text" 
            placeholder="Enter Name" 
            value={orderPizza.name}
            onChange={handleName}
          />
          {errors.name.length > 0 ? <p className="error">{errors.name}</p> : null}
        </label>
        <br />
        <label htmlFor="size">Select Pizza Size:
          <select
            id="size"
            name="size"
            value={orderPizza.size}
            onChange={inputChange}>
              <option value="Small">Small</option>
              <option value="Medium">Medium</option>
              <option value="Large">Large</option>
          </select>
        </label>

        <h2>Select toppings that you want:</h2>

        <label htmlFor="pepperoni">Pepperoni:
          <input 
            id="pepperoni"
            name="pepperoni"
            type="checkbox"
            checked={orderPizza.pepperoni}
            onChange={inputChange}
          />
        </label>

        <label htmlFor="olives">Olives:
          <input 
            id="olives"
            name="olives"
            type="checkbox"
            checked={orderPizza.olives}
            onChange={inputChange}
          />
        </label>

        <label htmlFor="bacon">Bacon:
          <input 
            id="bacon"
            name="bacon"
            type="checkbox"
            checked={orderPizza.bacon}
            onChange={inputChange}
          />
        </label>

        <label htmlFor="pepperoncini">Pepperoncini:
          <input 
            id="pepperoncini"
            name="pepperoncini"
            type="checkbox"
            checked={orderPizza.pepperoncini}
            onChange={inputChange}
          />
        </label>

        <h2>Anything we should know:</h2>

        <label htmlFor="special">
          <textarea 
            id="special"
            name="special"
            rows="5"
            cols="50" 
            placeholder="Enter Here" 
            value={orderPizza.special}
            onChange={inputChange}
          />
        </label>

        <br /><button type="submit" className="Submit">Submit Order</button>
      </form>
    </div>
  );
};
export default PizzaOrder;