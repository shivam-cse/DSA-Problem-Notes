import React from 'react';
import ProblemContext from './problemContext'
import { useState } from 'react';
const ProblemState = (props) => {
const host = "http://localhost:5000";
const problemsInitial = []

const [problems, setproblems] = useState(problemsInitial);

  //get all problems
  const getProblems = async () => {
    //Get all problem - API Call
    const response = await fetch(`${host}/api/problems/fetchall`, {
      method: 'GET', 
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      }
    });

    const json = await response.json()
    setproblems(json)
  }

  //Add a problems
  const addProblem = async (problemName,platformName,topic, description, websiteURL) => {
    
    //API Call
    const response = await fetch(`${host}/api/problems/add`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
        'auth-token': localStorage.getItem('token')
      },
      body: JSON.stringify({problemName,platformName,topic, description, websiteURL}) // body data type must match "Content-Type" header
    });

    const problem =  await response.json()
    setproblems(problems.concat(problem))
  }

  // delete note
  const deleteProblem = async (id) => {
    
    //API call to delete note
    const response = await fetch(`${host}/api/problems/delete/${id}`, {
      method: 'DELETE', 
      headers: {
        'Content-Type': 'application/json',
        'auth-token':localStorage.getItem('token')
      }
    });

    // const json = response.json()
    const newProblem = problems.filter((problems) => { return problems._id !== id })
    setproblems(newProblem)
  }

  
  return (
    <ProblemContext.Provider value={{ problems, addProblem, deleteProblem, getProblems }}>
      {props.children}
    </ProblemContext.Provider>
  )
}

export default ProblemState




