const express = require('express'); //สำหรับทำเว็บ ดึงexpress มาใช้
const debug = require('debug')('app'); //สำหรับดูหาบัคแบบง่ายๆ
const app = express(); //เรียกใช้ตัวไฟล์ app.js ให้สามารถใช้งาน express
const port = 3000; //กำหนด port local:3000
const morgan = require('morgan'); //ดู request log ใน cmd
const path = require('path'); //กำหนดไฟล์ที่จะเข้าถึง indel.html

app.use(morgan('combined')) //เรียกใช้ตัว morgan
app.use(express.static(path.join(__dirname,"/public/")) ) //เรียกใช้ตัว path โดยผ่าน directname แล้วหาชื่อจากในโฟลเดอร์ public

app.get("/", (req,res) =>{ //รับข้อมูลเมื่อเข้าเว็บ

    res.send('Hello FriendMaker');//ส่งข้อมูล hello ไปเมื่อเข้าเว็บ
})

app.listen(port, ()=>{ //ดูport จากใน terminal
    debug("Listening on port" + port); //แสดงขึ้นมาใน terminal
})