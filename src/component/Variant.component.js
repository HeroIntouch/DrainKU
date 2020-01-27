import React, { useState } from 'react';
import "../style/Variant.component.css"
import { GoGraph } from "react-icons/go";
import { IoIosArrowDropright , IoIosPlay , IoIosArrowDroprightCircle } from "react-icons/io";



const Variant = (props) => {

  return (
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
    );
}
export default Variant;