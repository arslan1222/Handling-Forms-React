import { useState } from "react";

export default function Form() {
  let [fullName, setFullname] = useState("Arslan");
  let [username, setUsername] = useState("");

  function handleFullName(event) {
    setFullname(event.target.value);
  }

  function handleUserName(event) {
    setUsername(event.target.value);
  }

  return (
    <>
      <form>
        <label htmlFor="fullName">Your name</label>
        <input
          placeholder="Type Here"
          value={fullName}
          type="text"
          onChange={handleFullName}
          id="fullName"
        />
        <br />
        <br />
        <br />
        <label htmlFor="username">Your name</label>
        <input
          placeholder="Type Here"
          value={username}
          type="text"
          onChange={handleUserName}
          id="username"
        />
        <button>submit</button>
      </form>
    </>
  );
}
