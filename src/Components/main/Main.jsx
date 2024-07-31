import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/context'

const Main = () => {

    const {onSent , recentPrompt,showResult,loading,resultData,setInput,input}=useContext(Context)
  return (
    <div className="main">
        <div className="nav">
            <p>Chat-Bot</p>
            <img src={assets.user_icon} alt=''/>
        </div>
        <div className="main-container">


           {!showResult
           ?<>
           <div className="greet">
                <p><span>Hello, User.</span></p>
                <p>How can I help You ?</p>
            </div>
           </>
           : <div className="result">
                <div className="result-title">
                    <img src={assets.user_icon} alt=''/>
                    <p>{recentPrompt}</p>
                </div>
                <div className="result-data">
                    <img src={assets.chatgpt} alt=''/>
                    {loading
                    ?<div className='loader'>
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                </div>
           </div>
           }

             
            <div className="main-bottom">
                <div className="search-box">
                    <input onChange={(e)=>setInput(e.target.value)} value={input} type='text' placeholder='Enter a prompt'/>
                    <div>
                        {input?<img onClick={()=>onSent()} src={assets.send_icon} alt=''/>:null}
                    </div>
                </div>
                <div>
                    <p className="bottom-info">Hi , I am your Event Planner , I will Help you with planning</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main 