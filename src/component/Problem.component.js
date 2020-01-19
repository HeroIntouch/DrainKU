import React, { useState } from 'react'
import "../style/Problem.component.css"
import MapProblem from "../asset/mapProblem.jpg"
import {
  Card
} from 'reactstrap';
import { MdMailOutline } from 'react-icons/md';
import { GoGraph } from "react-icons/go";
import { FiFlag } from "react-icons/fi";


function Problem() {
    return (
    <div>
        <div className="Problem">
            <div className="problemImg"></div>
        </div>
            <div class="bg-text">
                <h1 className="fontProblem">ปัญหาที่เกิดขึ้น</h1>
            </div>
            <div className="cardProblem">
                <div>
                <p class="fontDetailProblem">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ปัญหาที่เกิดขึ้นนั้นคือ น้ำท่วมที่เกิดขึ้นจากฝนตกติดต่อกันเป็นเวลานาน ทำให้การเดินทางนั้นไม่สะดวก
                 ซึ่งเรามีข้อมูลจากสถานีวัดน้ำท่วมขังรวมทั้งสิ้น 2 สถานีดังนี้</p>
                 <center><img className="sizeMapProblem" src={MapProblem} /></center>
                {/* <div style={{height:"500px"}}></div> */}
                </div>
            </div>
        
    </div>
    )
}
export default Problem;