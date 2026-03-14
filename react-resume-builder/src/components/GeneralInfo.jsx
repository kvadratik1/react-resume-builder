import { useState } from "react";

function GeneralInfo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  const handleSubmit = () => {
    console.log(name, email, tel);
  };

  return (
    <div>
      <h2>Personal Information</h2>

      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Full name"
      />
      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="tel"
        name="tel"
        value={tel}
        onChange={(e) => setTel(e.target.value)}
        placeholder="Phone number"
      />

      <button onClick={handleSubmit}>Save</button>
    </div>
  );
}

export default GeneralInfo;
