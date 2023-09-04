import React from "react";
import "./faq.scss";

export default function FAQ(props) {
  const { question, answer } = props;
  //console.log("prp", question);

  return (
    <details className="faq-accordian">
      <summary className="faq-accordian-head"><div>{question}</div></summary>
      <div className="faq-accordian-body">{answer}</div>
    </details>
  );
}
