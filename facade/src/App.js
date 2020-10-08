import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddTask from './components/AddTask';
import ViewTasks from './components/ViewTasks';
import Axios from 'axios';



export default function App() {
  
  
  
  return (
    <div className="App">
      <AddTask ></AddTask>
      <ViewTasks ></ViewTasks>
    </div>
  );
};
