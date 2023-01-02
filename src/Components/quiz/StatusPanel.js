import React from 'react'
import "../Assets/CSS/portal.css"
import Answered from './Answered'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import AllQuestions from './AllQuestions';
import { useState } from 'react';
import UnAnswered from './UnAnswered';
import Marked from './Marked';
export default function StatusPanel() {
  const [active,setactive]=useState('allquestion')
  return (
    <>
    <Router>
    <div className='ark-status-panel'>
      <div className="ark-quiz-info">
        <div className="ark-noofq">
          <p className="ark-info-txt">Total Questions :</p>
          <p className="ark-info-no">62</p>
       </div>
       <div className="ark-score">
          <p className="ark-info-txt">Total Points :</p>
          <p className="ark-info-no">860</p>
       </div>
      </div>  
      <hr className='ark-statuspanel-hr' />
      <div className='ark-statuspanel-info'>
          <div className='ark-answered'><div className="ark-dot-green"></div><p>5 Answered</p></div>
          <div className='ark-marked'><div className="ark-dot-orange"></div> <p>5 Marked</p></div>
          <div className='ark-unanswered'><div className="ark-dot-white"></div><p>5 Unanswered</p></div>
      </div>
      <hr className='ark-statuspanel-hr-2' />
        <div className="ark-quest-status">
          <h2 className='ark-answered-1' onClick={()=>setactive('allquestion')}>All Question</h2>
          <h2 className='ark-answered-1' onClick={()=>setactive('answered')}>Answered</h2>
          <h2 className='ark-answered-1' onClick={()=>setactive('unanswered')}>Unanswered</h2>
          <h2 className='ark-answered-1' onClick={()=>setactive('marked')}>Marked</h2>
        </div>
      <hr className='ark-statuspanel-hr-2' />
      {/* <Routes>
      <Route exact path="/"   element = {<AllQuestions/>}/>
      <Route exact path="/answered"   element = {<Answered/>}/>
      <Route exact path="/unanswered"   element = {<UnAnswered/>}/>
      <Route exact path="/marked"   element = {<Marked/>}/>
      
      </Routes> */}
      {active==="allquestion" && <AllQuestions/>}
      {active==="answered" && <Answered/>}
      {active==="unanswered" && <UnAnswered/>}
      {active==="marked" && <Marked/>}
      {/* {active=="allquestion" && <AllQuestions/>} */}
    </div> 
    </Router>
    </>
  )
}
