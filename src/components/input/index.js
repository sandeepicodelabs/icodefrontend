 import React from 'react'
import './style.css';
 
 export default function InputBox(props) {
    const { type, value, placeholder, className, img, label,demo, name } = props;
    //console.log("demo",demo)
    const isClient = typeof window !== 'undefined';
   return (
        <>
            <div className="input-box">
              <div className="form-box">
                <input
                  type={type}
                  value={value}
                  placeholder={placeholder}
                  className={className}
                  name={name}
                />
                
                  {demo?<span className="input-icon">
                    <img src={img} alt="St Logo" />
                  </span>:null}
              </div>
            </div>
          </>
   )
 }
 