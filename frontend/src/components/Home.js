import React from 'react';
import img from '../image/home2.jpg'
import leetcode from '../image/Leetcode.png'
import gfg from '../image/gfg.png'
import interview from '../image/interview.png'

export default function Home() {
  return <>
    <div style={{
      backgroundImage: `url(${img})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100vw',
      height: '100vh'
    }}>
      <div className="container "  style={{marginTop:'30px'}}>
        <div className="row">
          <div className="col">
            <div className="card" style={{width: "18rem"}}>
              <img src= {leetcode} style ={{height:'170px'}} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">LeetCode</h5>
                <p className="card-text">Start Coding</p>
                <a target="_blank" href="https://leetcode.com/problemset/all/" className="btn btn-primary">Go</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{width: "18rem"}}>
              <img src={gfg} style ={{height:'170px'}} className="card-img-top" alt="..." />
              <div className="card-body">
              <h5 className="card-title">Geeks For Geeks</h5>
                <p className="card-text">Start Coding</p>
                <a target="_blank" href="https://practice.geeksforgeeks.org/explore?page=1&sortBy=submissions&utm_source=gfg&utm_medium=gfg_header&utm_campaign=gfgpractice_header" className="btn btn-primary">Go</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{width: "18rem"}}>
              <img src={interview} style ={{height:'170px'}} className="card-img-top" alt="..." />
              <div className="card-body">
              <h5 className="card-title">Interview Bit</h5>
                <p className="card-text">Start Coding</p>
                <a target="_blank" href="https://www.interviewbit.com/" className="btn btn-primary">Go</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </>;
}
