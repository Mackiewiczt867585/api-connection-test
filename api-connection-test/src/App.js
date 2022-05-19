import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Test from './Components/Test';
import axios from 'axios';

function App() {

  const [user, setUser] = useState();
    useEffect(() => {
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => {setUser(res.data[5]);})
      .catch(error => {alert(error);});
    }, []);

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/' element={<Home />} />
        <Route path='/Test' element={<Test user={user} />}  />  
      </Routes>
    </Router>
    </>
  );
}

export default App;
