 import React from 'react'
 
 export default function Layout() {
   return (
    <>
  {/* ...other meta tags */}
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-07H9GTQ06L"></script>
  <script>
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-07H9GTQ06L');
    `}
  </script>
</>
   )
 }
 