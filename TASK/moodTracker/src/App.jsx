
import { useState } from 'react';
import './App.css';

const MOODS = [ 
  { name: 'Happy', emoji: '😊', color: '#10B981' }, 
  { name: 'Sad', emoji: '😢', color: '#EF4444' }, 
  { name: 'Angry', emoji: '😡', color: '#F59E0B' }, 
  { name: 'Excited', emoji: '🎉', color: '#8B5CF6' }, 
  { name: 'Calm', emoji: '😌', color: '#06B6D4' }, 
  { name: 'Anxious', emoji: '😰', color: '#F87171' }, 
  { name: 'Tired', emoji: '😴', color: '#6B7280' }, 
  { name: 'Grateful', emoji: '🙏', color: '#FBBF24' } 
];

function MoodTracker () {
  const [mood,setMood]=useState("Neutral");

  return (
    <div className="app">
      <div className="container1" >
        <h1>🌈Mood Tracker </h1>
        <p>Log your daily emotions and see your patterns</p>
      </div>
    

      <section className="current-mood">
        <h1>Current Mood : {mood}</h1>
      </section>

      <section className="container2">
        <h3>How do you feel right now?</h3> 
        <div className="buttons-grid" >
          <button onClick={() => setMood("Happy")} style={{backgroundColor: mood === "Happy" ?"#10B981":"rgb(141, 185, 185);"}}>😊 Happy </button>
          <button onClick={() => setMood("Sad")} style={{backgroundColor: mood === "Sad" ?"#EF4444":"rgb(141, 185, 185);"}}>😢 Sad</button>
          <button onClick={() => setMood("Angry")} style={{backgroundColor: mood === "Angry" ?"#F59E0B":"rgb(141, 185, 185);"}}>😡Angry </button>
          <button onClick={() => setMood("Excited")} style={{backgroundColor: mood === "Excited" ?"#8B5CF6":"rgb(141, 185, 185);"}}>🎉 Excited</button>
          <button onClick={() => setMood("Calm")} style={{backgroundColor: mood === "Calm" ?"#06B6D4":"rgb(141, 185, 185);"}}>😌 Calm </button>
          <button onClick={() => setMood("Anxious")} style={{backgroundColor: mood === "Anxious" ?"#F87171":"rgb(141, 185, 185);"}}>😰 Anxious</button>
          <button onClick={() => setMood("Tired")} style={{backgroundColor: mood === "Tired" ?"#6B7280":"rgb(141, 185, 185);"}}>😴 Tired</button>
          <button onClick={() => setMood("Grateful")} style={{backgroundColor: mood === "Grateful" ?"#FBBF24":"rgb(141, 185, 185);"}}>🙏 Grateful</button>
          </div>
      </section>
    </div>
  )

}

export default MoodTracker;

