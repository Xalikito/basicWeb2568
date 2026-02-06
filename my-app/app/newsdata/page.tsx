"use client";
import axios from "axios";
import { useEffect, useState } from "react";

function NewsDataPage() {
    const [animations, setAnimations] = useState([]);

    useEffect(() => {
        function fetchAnimations() {
            axios.get('https://newsdata.io/api/1/latest?apikey=pub_5281385ba9e64182517f03918881c22ab1bf1&language=th').then((res) => {
                console.log(res)
                setAnimations(res.data.data);
            })
        }
        fetchAnimations();

    }, [])

    return <div>
        <h1 className="text-4xl text-center my-5">ข่าวจาก NewsData API</h1>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
            {animations.map((item) => {
                return (
                <a key={item.article_id} href={item.link} className="bg-gray-700 w-full rounded-xl p-2 block">
                    <h2 className="text-center text-2xl">{item.title}</h2>
                    <div className="flex justify-center mt-2">
                        <img src={item.image_url} alt={item.title} className="w-full h-48 object-cover rounded-lg" />
                    </div>
                </a>
                );
            })}
        </div>
    </div>;

}

export default NewsDataPage;