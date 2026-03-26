import StudentCard from "./StudentCard";
import deekshithaImg from "./assets/deekshitha.jpg";
import rahulImg from "./assets/rahul.jpg";
import anjaliImg from "./assets/anjali.png";
import "./App.css";

function App() {
  return (
    <div style={{ display: "flex", gap: "25px", justifyContent: "center" }}>
      <StudentCard 
        name="Name : Deekshitha"
        course="Course : CSBS"
        year="Validity : 2026"
        image={deekshithaImg}
      />

      <StudentCard 
        name="Name : Rahul"
        course="Course : CSE"
        year="Validity : 2026"
        image={rahulImg}
      />

      <StudentCard 
        name="Name : Anjali"
        course="Course : IT"
        year="Validity : 2026"
        image={anjaliImg}
      />

    </div>
  );
}

export default App;