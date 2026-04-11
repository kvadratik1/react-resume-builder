import "./App.css";
import GeneralInfo from "./components/GeneralInfo";
import EducationInfo from "./components/EducationInfo";
import PracticalExperience from "./components/PracticalExperience";
import html2pdf from "html2pdf.js";

function App() {
  const downloadPDF = () => {
    const element = document.getElementById("resume");

    const opt = {
      margin: 0.5,
      filename: "resume.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save();
  };
  return (
    <div>
      <h1>CV Aplication</h1>

      <div id="resume">
        <GeneralInfo />
        <EducationInfo />
        <PracticalExperience />
      </div>

      <button onClick={downloadPDF}>Download PDF</button>
    </div>
  );
}

export default App;
