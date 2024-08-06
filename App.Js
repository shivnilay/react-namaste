import React from 'react';
import ReactDOM from "react-dom/client"


const Title =()  => (
  <h1 className="head" tabIndex="5">Namaste React using JSX</h1>
);


const Header =() =>{
  return(
    <div className='header'> 
    <div className='logo-container'>
     <img  className='logo' src='https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All' />
    </div>
    <div  className="nav-items">
       <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
        <li>Cart</li>
       </ul>
    </div>
    </div>
  )
}
  



const AppLayout =() =>{
  return(
    <div className="app">
    <Header/>
    <Body/>
    </div>
  )
}


const  HeadingComponet =() =>(
<div  id="container">
  <Title/>
  <h1 className="heading">Namaste React Functonal Componet</h1>
</div>
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)