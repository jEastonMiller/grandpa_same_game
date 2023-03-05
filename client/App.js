import React, { useState, useEffect, Fragment } from 'react';
import styles from './App.css'

import { BrowserRouter as Router, Route } from "react-router-dom";

function App () {
  const [test, setTest] = useState(`didn't work :((`)

  useEffect(() => {
    try {
      const testReq = async function () {
        const response = await fetch('/api/users/login')
        let successfulReq = await response.json()
        console.log(successfulReq);
        setTest(successfulReq);
      }
      testReq();
    } catch (err) {
      console.log(err);
    }
  }, [])

  return (
    <Router>
      <div>
        <h1>{test}</h1>
      </div>
    </Router>
  )
}

export default App;