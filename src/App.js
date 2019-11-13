import React from 'react';
import { render } from "react-dom";

import Tabs from './Components/Tabs';
require('./styles.css');

function App() {
  return (
    <div style={{background: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)'}}>
      <h1 style={{color:'black',fontSize:'40px',fontWeight:'bold' ,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}}>
        Railways in the Industrail Revolution
        <img src='https://railwaywondersoftheworld.com/wpimages/wp45737414_05_06.jpg'></img>
      </h1>
     <Tabs style={{display:'flex',justifyContent:'center'}}>
      <div label="Background">
        See ya later, <em>Alligator</em>!
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, debitis laborum. Eius enim tenetur inventore ad, laboriosam soluta. Vero architecto similique voluptas natus non dolor, itaque odit aliquam excepturi laudantium.
        </p>
      </div>
      <div label="Britain">
        After 'while, <em>Crocodile</em>!
      </div>
      <div label="Netherlands">
        Nothing to see here, this tab is <em>extinct</em>!
      </div>
    </Tabs>
    </div>
  );
}



export default App;