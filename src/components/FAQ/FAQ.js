import React from 'react'

function FAQ() {
  return (
    <div class="container">
    <h1>Frequently Asked Questions</h1>
    <details>
    <summary>How do I create accordion?</summary>
    <div>
   The tags <em>details</em> and <em>summary</em> have you covered.
    </div>
  </details>
  </div>
  )
}

export default FAQ
















// import React, { useState } from 'react';
// import {Link} from 'gatsby'

// const FAQ = () => {
//   const [expanded, setExpanded] = useState(null);

//   const handleToggle = (index) => {
//     if (expanded === index) {
//       setExpanded(null);
//     } else {
//       setExpanded(index);
//     }
//   };

//   return (
//     <div className="faq-container">
//       <div className="question" onClick={() => handleToggle(0)}>
//      Question : How can we test my software 
//       </div>
//       {expanded === 0 && <div className="answer">Answer : You check this process on google</div>}

//       <div className="question" onClick={() => handleToggle(1)}>
//         Question : How we can check the mobile app
//       </div>
//       {expanded === 1 && <div className="answer">Answer : Please check anywhere</div>}
//     </div>
//   );
// };

// export default FAQ;
