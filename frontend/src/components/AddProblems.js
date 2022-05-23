import React,{useContext, useState} from 'react';
import problemsContext from '../contextApi/problems/problemContext'
export default function AddProblems() {
    const context = useContext(problemsContext)
    const {addProblem} = context

    const [problem, setproblem] = useState({problemName:"", platformName:"",topic:"", description:"", websiteURL:""});

    const handleClick = (e) => {
        e.preventDefault();
        addProblem(problem.problemName, problem.platformName, problem.topic, problem.description, problem.websiteURL)
        setproblem({problemName:"",platformName:"",topic:"", description:"", websiteURL:""})
    }
    
    const onChange = (e) => {
        setproblem({...problem, [e.target.name]:e.target.value})
    }

  return <div>
      <div className='container my-3 addproblem'>
      <h1 style={{textAlign:'center', margin:'8px'}}>Add your problems</h1>
      <form className='my-2 container'>
        <div className="mb-3">
          <label htmlFor="problemName" className="form-label">Problem Name</label>
          <input type="text" className="form-control" value={problem.problemName} id="problemName" name='problemName' placeholder="e.g Target sum " onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="platformName" className="form-label">Platform Name</label>
          <input type="text" className="form-control" value={problem.platformName} id="platformName" name='platformName' placeholder="e.g Leetcode" onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="topic" className="form-label">Topic</label>
          <input type="text" className="form-control" value={problem.topic} id="topic" name='topic' placeholder="e.g Array & D.P" onChange={onChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea className="form-control" id="description" value={problem.description} name='description' rows="3" onChange={onChange}></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="websiteURL" className="form-label">Website URL</label>
          <input className="form-control" id="websiteURL" value={problem.websiteURL} name='websiteURL' placeholder='e.g https://practice.geeksforgeeks.org/problems/array-to-bst4443/1' onChange={onChange}></input>
        </div>
        <button disabled={problem.platformName.length < 2 || problem.description.length < 8} type="button" className="btn btn-success" onClick={handleClick}>Add problem</button>
      </form>

    </div>
  </div>;
}
