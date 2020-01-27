import React, { useState } from 'react';
import "../style/GraphVariant.component.css"
import Event11Img from "../asset/Event1-1_GraphVariant.jpg" ;
import Event12Img from "../asset/Event1-2_GraphVariant.jpg" ;
import {
  Form,
} from 'reactstrap';
import { GoGraph } from "react-icons/go";
import { IoIosArrowDropright , IoIosPlay , IoIosArrowDroprightCircle } from "react-icons/io";



const GraphVariant = (props) => {

  return (
    <div className="GraphVariant">
      <div>
        	<br/>
        <center><h3>ตัวอย่างความสัมพันธ์ของแต่ละกราฟ</h3></center>
          <br/>
        {/* <h4 className="positionText1"><GoGraph/> สถานการณ์ที่ 1 </h4> */}
        <div className="positionText2"><GoGraph/> 2017-08-03 (15:30:00) to 2017-08-03 (16:10:00)</div>
        
          <div>
              <br/>
              <img className="imgExEvent1-1" src={Event11Img} />
                <div>
                <img className="imgExEvent1-2" src={Event12Img} />
          </div>
        </div> 
      </div>

    </div>
  );
}

export default GraphVariant;