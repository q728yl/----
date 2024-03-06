import logo from "./logo.svg";
import "./App.css";
import "./css/backgroud.css";
import LoginView from "./View/LoginView";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from "react";
import BasicView from "./View/BasicView";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/login" element={<LoginView />}/>
          <Route path="/*" element={<BasicView />}/>
        </Routes>
      </Router>
  );
}

export default App;
