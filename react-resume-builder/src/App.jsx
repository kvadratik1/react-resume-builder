import "./App.css";
import GeneralInfo from "./components/GeneralInfo";
import EducationInfo from "./components/EducationInfo";
import PracticalExperience from "./components/PracticalExperience";

function App() {
  return (
    <div>
      <h1>CV Aplication</h1>
      <GeneralInfo />
      <EducationInfo />
      <PracticalExperience />
    </div>
  );
}

export default App;
