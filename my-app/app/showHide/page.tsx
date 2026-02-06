"use client"
import { useState } from "react";

function ShowHide() {
    const [isShow, setIsShow] = useState(false);
    return (
        <div className="bg-pink-200">
            <div>
                <h1 className="text-center text-8xl mt-5">{isShow ? "แสดงข้อความ" : ''}</h1>
            </div>
            <div>
                <button className="bg-purple-300 p-5 rounded-3xl text-xl hover:bg-yellow-400 cursor-pointer mx-auto block"
                    onClick={() => setIsShow(!isShow)}>
                    แสดง/ซ่อน ข้อความ
                </button>
            </div>
        </div>
    );
}

export default ShowHide