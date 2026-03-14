import { useState } from "react";

function EducationInfo() {
  const [school, setSchool] = useState("");
  const [major, setMajor] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [educations, setEducations] = useState([]);

  const handleAdd = () => {
    setEducations((prev) => [...prev, { school, major, startDate, endDate }]);

    setSchool("");
    setMajor("");
    setStartDate("");
    setEndDate("");
  };

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
        placeholder="Start Date"
      />

      <input
        type="date"
        name="endDate"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        placeholder="End Date"
      />

      <button onClick={handleAdd}>+ Add Education</button>

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
    </div>
  );
}
export default EducationInfo;
