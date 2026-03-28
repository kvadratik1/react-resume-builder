import { useState } from "react";

function PracticalExperience() {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [experiences, setExperiences] = useState([]);

  const [isEditing, setIsEditing] = useState(true);

  const handleAdd = () => {
    setExperiences((prev) => [
      ...prev,
      { company, position, responsibilities, from, to },
    ]);

    setCompany("");
    setPosition("");
    setResponsibilities("");
    setFrom("");
    setTo("");
  };

  if (!isEditing) {
    return (
      <div>
        <h2>Practical Experience</h2>

        {experiences.map((exp, index) => (
          <div key={index}>
            <p>
              {exp.company} — {exp.position}
            </p>
            <p>{exp.responsibilities}</p>
            <p>
              {exp.from} / {exp.to}
            </p>
          </div>
        ))}

        <button onClick={() => setIsEditing(true)}>Edit</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Practical Experience</h2>

      <input
        type="text"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        placeholder="Company name"
      />

      <input
        type="text"
        value={position}
        onChange={(e) => setPosition(e.target.value)}
        placeholder="Position"
      />

      <input
        type="text"
        value={responsibilities}
        onChange={(e) => setResponsibilities(e.target.value)}
        placeholder="Responsibilities"
      />

      <input
        type="date"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
      />

      <input type="date" value={to} onChange={(e) => setTo(e.target.value)} />

      <button onClick={handleAdd}>+ Add Experience</button>

      <button onClick={() => setIsEditing(false)}>Save</button>
    </div>
  );
}

export default PracticalExperience;
