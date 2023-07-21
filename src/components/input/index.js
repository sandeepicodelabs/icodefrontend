 import React from 'react'
import './style.css';
 
 export default function InputBox(props) {
    const { type, value, placeholder, className, img, label } = props;
    //console.log("input",props)
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
                />
                 {!isClient || !window.location.pathname.includes('contact') ? (
                  <span className="input-icon">
                    <img src={img} alt="St Logo" />
                  </span>) : <></>
                }
              </div>
            </div>
          </>
   )
 }
 