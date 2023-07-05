import React from 'react'
import './style.css';

export default function HeaderBar(props) {
    const { currentpage, pagetitle } = props;
    //console.log("hearderbar",props)
    return (
        <>
            <div className="blog-header-wrap">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb top-breadcrump">
                        <li className="breadcrumb-item"><a href="#">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">{currentpage}</li>
                    </ol>
                </nav>
                <div className="blog-header">
                    <h1><strong>{pagetitle}</strong></h1>
                </div>
            </div>
        </>
    )
}
