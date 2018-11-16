import React from 'react';

import './DropDown.css'

  const dropDown = props => {
    let dropDownButton = ['dropdown-content'];
    if (props.show) {
      dropDownButton = 'dropdown-content open';
    }
    return(
      
           <div className= {dropDownButton} >
             <ul>
              <li><a href="/">Mission Statement</a></li>
              <li> <a href="/">History</a></li>
              <li> <a href="/">Team</a> </li>
              <li> <a href="/">Partners</a> </li>
              <li> <a href="/">Financials</a> </li>
             </ul>
          </div>                                
       );
      };

export default dropDown; 


