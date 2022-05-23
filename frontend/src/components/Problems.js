import React, { useContext, useEffect } from 'react';
import problemsContext from '../contextApi/problems/problemContext'
import Problemitems from './Problemitems';
import { useNavigate } from 'react-router-dom';
export default function Problems() {
    const navigate = useNavigate();
    const context = useContext(problemsContext)
    const { problems, getProblems } = context

    useEffect(() => {
        if (localStorage.getItem('token') !== null) {
            getProblems();
        }
        else {
            navigate('/login')
        }
    }, []);

    return <div className='problemTable'>
        {/* <div className='container'>
        <h3>{problems.length == 0 && "No problems added"}</h3>
      </div> */}
        <table className="table table-bordered border-primary" >
            <thead className="thead bg-dark" style={{ color: 'whitesmoke', fontSize: '20px' }}>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Problem Name</th>
                    <th scope="col">Platform Name</th>
                    <th scope="col">Topic</th>
                    <th scope="col">Description</th>
                    <th scope="col">URL - Link</th>
                    <th scope="col">Delete</th>
                </tr>
            </thead>
            <tbody>
                {problems.map((problem, index) => {
                    return <Problemitems index={index} key={problem._id} problem={problem} />;
                })}
            </tbody>
        </table>
    </div>;
}
