import React, { useContext } from 'react';
import problemsContext from '../contextApi/problems/problemContext'

export default function Problemitems(props) {
    const context = useContext(problemsContext)
    const { deleteProblem } = context
    const {index, problem } = props;
    return (
            <tr>
                <th scope="row">{index}</th>
                <td style={{minWidth:'200px'}}>{problem.problemName}</td>
                <td style={{minWidth:'150px'}}>{problem.platformName}</td>
                <td style={{minWidth:'150px'}}>{problem.topic}</td>
                <td>{problem.description}</td>
                <td><a href={problem.websiteURL} target="_blank">Link</a></td>
                <td><i className="fas fa-trash-alt mx-2" onClick={() => { deleteProblem(problem._id) }}></i></td>
            </tr>
    );
}
