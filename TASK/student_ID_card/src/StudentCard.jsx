function StudentCard(props) {
  return (
    
    <div 
    
    style={{
      border: "1px solid #ccc",
      borderRadius: "10px",
      padding: "20px",
      width: "200px",
      textAlign: "left",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
    }}>
        <h2>ST JOSEPH ENGINEERING COLLEGE</h2>
      
      <img 
        src={props.image} 
        alt="profile"
        style={{ borderRadius: "50", marginBottom: "10px" }}
      />

      <h3>{props.name}</h3>
      <p>{props.course}</p>
      <p>{props.year}</p>

    </div>
  );
}

export default StudentCard;