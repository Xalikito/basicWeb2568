"use client";

import axios from "axios";
import { useEffect, useState } from "react";

type Deal = {
  title: string;
  normalPrice: string; // API returns strings
  salePrice: string;
  thumb: string;
  storeID?: string;
  dealID?: string;
};

export default function CheapSharkPage() {
  const [deals, setDeals] = useState<Deal[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchDeals() {
      try {
        const res = await axios.get("https://www.cheapshark.com/api/1.0/deals");
        setDeals(res.data || []);
      } catch (e) {
        console.error(e);
        setError("เกิดข้อผิดพลาดในการดึงดีล");
      } finally {
        setLoading(false);
      }
    }
    fetchDeals();
  }, []);

  function calcPercent(normalStr: string, saleStr: string) {
    const normal = parseFloat(normalStr || "0");
    const sale = parseFloat(saleStr || "0");
    if (!normal || !sale) return "0%";
    const diff = ((normal - sale) / normal) * 100;
    return `${diff.toFixed(0)}%`;
  }

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-6">CheapShark Deals</h1>

      {loading ? (
        <p className="text-center">กำลังโหลดดีล...</p>
      ) : error ? (
        <p className="text-center text-red-600">{error}</p>
      ) : deals.length === 0 ? (
        <p className="text-center">ไม่พบดีล</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {deals.map((d: any, idx) => (
            <div key={d.dealID || idx} className="bg-white rounded-lg shadow p-3">
              <div className="flex items-center gap-3">
                <img src={d.thumb} alt={d.title} className="w-24 h-24 object-cover rounded" />
                <div className="flex-1">
                  <h2 className="font-semibold text-lg">{d.title}</h2>
                  <p className="text-sm text-gray-600">ราคาเต็ม: ฿{parseFloat(d.normalPrice).toFixed(2)}</p>
                  <p className="text-sm text-green-700 font-bold">ราคาโปรโมชั่น: ฿{parseFloat(d.salePrice).toFixed(2)}</p>
                  <p className="text-sm text-indigo-600">ส่วนลด: {calcPercent(d.normalPrice, d.salePrice)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
