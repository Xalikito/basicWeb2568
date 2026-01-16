"use client"
import { useState } from "react";

function LightPage() {
    const [isLightOn, setIsLightOn] = useState(false);
    return (
        <div>
            <div className="text-center text-blue-500 text-2xl mt-6 p-4">
                <h1>บทเรียนที่ 1 State ของการเปิด / ปิด หลอดไฟ</h1>
            </div>
            <div className="flex justify-center">
                <button type="button"
                    className="bg-green-400 p-5 rounded-2xl text-xl cursor-pointer hover:bg-red-300"
                    onClick={() => setIsLightOn(!isLightOn)}>
                    เปิด / ปิด หลอดไฟ
                </button>
            </div>
            <div className="text-center text-5xl mt-5">
                <h1>สถานะของหลอดไฟ: {isLightOn ? "เปิด" : "ปิด"}</h1>
                <div className="flex justify-center">
                    {isLightOn ? <img src="https://www.w3schools.com/js/pic_bulbon.gif" /> : <img src="https://www.w3schools.com/js/pic_bulboff.gif" />}
                </div>
            </div>
        </div>
    );
}

export default LightPage