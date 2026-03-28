import { useState } from "react";

function EducationInfo() {
  const [school, setSchool] = useState("");
  const [major, setMajor] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [educations, setEducations] = useState([]);

  const [isEditing, setIsEditing] = useState(true);

  const handleAdd = () => {
    setEducations((prev) => [...prev, { school, major, startDate, endDate }]);

    setSchool("");
    setMajor("");
    setStartDate("");
    setEndDate("");
  };

  if (!isEditing) {
    return (
      <div>
        <h2>Education</h2>

        {educations.map((edu, index) => (
          <div key={index}>
            <p>
              {edu.school} — {edu.major}
            </p>
            <p>
              {edu.startDate} / {edu.endDate}
            </p>
          </div>
        ))}

        <button onClick={() => setIsEditing(true)}>Edit</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Education</h2>

      <input
        type="text"
        name="school"
        value={school}
        onChange={(e) => setSchool(e.target.value)}
        placeholder="School name"
      />

      <input
        type="text"
        name="major"
        value={major}
        onChange={(e) => setMajor(e.target.value)}
        placeholder="Major"
      />

      <input
        type="date"
        name="startDate"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
      />

      <input
        type="date"
        name="endDate"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
      />

      <button onClick={handleAdd}>+ Add Education</button>

      <button onClick={() => setIsEditing(false)}>Save</button>
    </div>
  );
}

export default EducationInfo;
