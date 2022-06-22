import React, { useState } from "react";
import "./UserForm.css";

function UserForm() {
  const [username, setUserName] = useState("default");
  const userNameHandler = (event) => {
    setUserName(event.target.value);
  };

  const [age, setAge] = useState("default");
  const ageHandler = (event) => {
    setAge(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    // console.log(value);
  };

  return (
    <div>
      <form>
        <label className="username">Username</label>
        <input
          type="text"
          value="username"
          id="username"
          onChange={userNameHandler}
        />

        <label className="password">Age</label>

        <input type="text" id="age" value="age" onChange={ageHandler} />

        <button onSubmit={submitHandler}>Add User</button>
      </form>
    </div>
  );
}

export default UserForm;
