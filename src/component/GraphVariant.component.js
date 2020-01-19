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
      <div className="exVariant">
        <br/>
        <h3 >นิยามตัวแปร</h3>
        <br/>
          <span style={{paddingLeft:"120px"}}>
          &nbsp;&nbsp;มีดังนี้&nbsp;&nbsp;<IoIosArrowDroprightCircle/><br/>
          <span ><IoIosArrowDropright/>ตัวแปรหลัก<br/></span>
          <p>
              <IoIosPlay/>&nbsp;WL   :   ระดับน้ำในคลอง (ม.รทก.) <br/>
              <IoIosPlay/>&nbsp;Q   :   อัตราการไหลน้ำในคลอง (ลบ.ม./วินาที) <br/>
              <IoIosPlay/>&nbsp;Velocity   :   ความเร็วกระแสน้ำ (ม./วินาที) <br/>
              <IoIosPlay/>&nbsp;Area   :   พื้นที่หน้าตัด (ตร.ม.) <br/>
              <IoIosPlay/>&nbsp;raining_time   :   ปริมาณเวลาที่ฝนตก คำนวณจาก t2-t1 (นาที)  <br/>
              <IoIosPlay/>&nbsp;Tmax   :   ช่วงเวลาตั้งแต่ฝนเริ่มตกจนระดับน้ำขึ้นสูงสุด คำนวณจาก t3-t1 (นาที)  <br/>
              <IoIosPlay/>&nbsp;Tdrain   :   ช่วงเวลาตั้งแต่ระดับน้ำสูงสุดหลังฝนตกลดลงถึงระดับความสูงค่าวิกฤติของคลองบางบัว หรือ หมายถึงเวลาที่ใช้ในการระบายน้ำ คำนวณจาก t4-t3 (นาที) <br/>
              <IoIosPlay/>&nbsp;ΔV   :   ผลต่างระหว่าง V2 และ V1 <br/>
          </p>
          <span><IoIosArrowDropright/>คำย่อ<br/></span>
          <p >
              <IoIosPlay/>&nbsp;FW.BBU.01_WL  :   ระดับน้ำในคลองบางบัว <br/>
              <IoIosPlay/>&nbsp;RF.BKA.02_5 min  :   ปริมาณน้ำฝนราย 5 นาที <br/>
              <IoIosPlay/>&nbsp;RF.BKA.02_5 min  :   ปริมาณน้ำฝนราย 5 นาที <br/>
              <IoIosPlay/>&nbsp;RF.BKA.02_1 hr   :   ปริมาณน้ำฝนราย 1 ชั่วโมง <br/>
              <IoIosPlay/>&nbsp;FLOOD_DEPTH   :   ปริมาณน้ำท่วมขังผิวถนน <br/>
              <IoIosPlay/>&nbsp;RF.BKA.02   :   ข้อมูลปริมาณน้ำฝนของสถานีคลองบางบัว <br/>
              <IoIosPlay/>&nbsp;FW.BBU.01   :   ข้อมูลการไหลน้ำในคลองของสถานีคลองบางบัว <br/>
              <IoIosPlay/>&nbsp;sum_rain_tomax   :   ผลรวมปริมาณฝนสะสมราย 1 ชั่วโมง ทุก ๆ 5 นาที ตั้งแต่ t1 ถึง t3 (มม.) <br/>
              <IoIosPlay/>&nbsp;sum_rain_drain   :   ผลรวมปริมาณฝนสะสมราย 1 ชั่วโมง ทุก ๆ 5 นาที ตั้งแต่ t3 ถึง t4 (มม.) <br/>
              </p>
          </span>
      </div>

    </div>
  );
}

export default GraphVariant;