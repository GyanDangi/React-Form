import React from "react";
import { useState } from "react";

const App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email:"",
    phone:+91,
    isVisible:true,
    mode:"",
    FavCar:""
  
  });

  // console.log(formData);

  function changeHandler(event) {

    // Destructing:
      const{name,value, checked, type}= event.target
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]:type ==="checkbox"? checked: value
      };
    });
  }

  function submitHandler(event){
    event.preventDefault();

    console.log(formData)
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler} className="form">

        <input
          type="text"
          onChange={changeHandler}
          placeholder="Enter your first Name"
          name="firstName"
          value={formData.firstName}
        />

        <input
          type="text"
          onChange={changeHandler}
          placeholder="Enter your Last Name"
          name="lastName"
          value={formData.lastName}
        />

        <input
          type="phone"
          tabIndex={1}
          onChange={changeHandler}
          placeholder="Enter your Phone Number"
          name="phone"
          value={formData.phone}
        />

        <input
          type="email"
          onChange={changeHandler}
          placeholder="Enter your email Id"
          name="email"
          value={formData.email}
        />

        <input
          type="checkbox"
          onChange={changeHandler}
          name="isVisible"
          checked={formData.isVisible}
          id="isVisible"
        />
        <label htmlFor="isVisible">Is Visible ?</label>

        <input type="radio"
        onChange={changeHandler}
        name="mode"
        value="online-mode"
        id="online-mode"
        checked={formData.mode==='online-mode'}
        />
        <label htmlFor="online-mode">Online Mode</label>


        <input type="radio"
        onChange={changeHandler}
        name="mode"
        value="OFfline-mode"
        id="OfFline-mode"
        checked={formData.mode==='OFfline-mode'}
        />
        <label htmlFor="OfFline-mode">Offline Mode</label>

        <select 
        name="FavCar" 
        id="FavCar"
        value={formData.FavCar}
        onChange={changeHandler}
        >
          <option value="Scorpio">Scorpio</option>
          <option value="Fortuner">Fortuner</option>
          <option value="Tharr">Tharr</option>
          <option value="Legendary">Legendary</option>
          <option value="Defender">Defender</option>


        </select>

        <button className=" border-4 border-red-300 w-[150px] ml-5 h-[40px]">Submit</button>

      </form>
    </div>
  );
};

export default App;
