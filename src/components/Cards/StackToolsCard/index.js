import React from 'react'
import './style.css'

const StackToolsCard=(props)=> {
    const { name, techchild } = props;

  return (
    <>
    <div className="stack-card">
        <div className="stack-card-box">
            <div className="stack-label">{name}</div>
            <div className="stack-card-tech">
                <ul>
                    {techchild?.map((i) => (
                        <li
                            key={i}
                        > 
                            {i}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default StackToolsCard