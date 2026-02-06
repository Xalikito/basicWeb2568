function HomePage() {
  return (
    <div>
      <div className="text-center mt-5 p-3">
        <h1 className="text-4xl">Welcome to My App</h1>
        <p className="text-lg mt-2">นี่คือ Next.js ที่ฉันเขียนเพื่อสอนนักศึกษา</p>
      </div>
      <div className="text-center text-2xl mt-6 text-cyan-200">
        <a href="/light">บทเรียนที่ 1 State ของการเปิด / ปิด หลอดไฟ</a>
        <br></br>
        <a href="/count">บทเรียนที่ 2 state ของการเพิ่มลดตัวเลข</a>
        <br></br>
        <a href="/form">บทเรียนที่ 3 form กรอกข้อมูล</a>
        <br></br>
        <a href="/jikan">บทเรียนที่ 4 ดึงข้อมูลจาก API ภายนอก</a>
        <br></br>
        <a href="/newsdata">บทเรียนที่ 5 ข่าวสารจาก NewsData API</a>
        <br></br>
        <a href="/cheapshark">บทเรียนที่ 6 ดึงข้อมูลจาก API ของ CheapShark</a>
      </div>
    </div>
  );
}

export default HomePage;