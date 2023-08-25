import React from "react";
import "./faq.scss";

export default function FAQ(props) {
  const{question,answer}=props;
  //console.log("prp",question)

  return (
    <div class="faq-content">
      <div class="faq-head">
        <h1>Frequently Asked Questions</h1>
    
      <div className="faq-accordian-sec">
        <details className="faq-accordian">  
          <summary className="faq-accordian-head">
            {question}
           </summary>
           <div className="faq-accordian-body">
             {/* The tags <strong>details</strong> and <strong>summary</strong> have
            you covered. */}
            {answer}
           </div>  
        </details>
        {/* <details className="faq-accordian">
          <summary className="faq-accordian-head">
            How do I create accordion?
          </summary>
          <div className="faq-accordian-body">
            The tags <strong>details</strong> and <strong>summary</strong> have
            you covered.
          </div>
        </details>
        <details className="faq-accordian">
          <summary className="faq-accordian-head">
            How do I create accordion?
          </summary>
          <div className="faq-accordian-body">
            The tags <strong>details</strong> and <strong>summary</strong> have
            you covered.
          </div>
        </details>
        <details className="faq-accordian">
          <summary className="faq-accordian-head">
            How do I create accordion?
          </summary>
          <div className="faq-accordian-body">
            The tags <strong>details</strong> and <strong>summary</strong> have
            you covered.
          </div>
        </details>
        <details className="faq-accordian">
          <summary className="faq-accordian-head">
            How do I create accordion?
          </summary>
          <div className="faq-accordian-body">
            The tags <strong>details</strong> and <strong>summary</strong> have
            you covered.
          </div>
        </details>
        <details className="faq-accordian">
          <summary className="faq-accordian-head">
            How do I create accordion?
          </summary>
          <div className="faq-accordian-body">
            The tags <strong>details</strong> and <strong>summary</strong> have
            you covered.
          </div>
        </details> */}
     </div>
    </div>
    </div>
  );
}

 
