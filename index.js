const express = require('express')
const app = express()

app.get('/',(req, res) => {
    res.send('Hello World')
})

app.get('/getname', (req, res) => {
    res.send('Tanatcha Buratakan')
})

app.get('/getprofile', (req, res) => {
    let data = {
        name: 'Tanatcha Buratakan',
        age: 19,
        apocalypse: 'ทำวันนี้ให้ดีที่สุด',
        detail: 'ปัจจุบันเป็นนักศึกษาชั้นปีที่สอง คณะวิศวกรรมศาสตร์ สาขามัลติมีเดียและเอนเตอร์เทนเม้น มหาวิทยาลัยกรุงเทพ \
            เล่นดนตรีไทย(ขิม),วาดรูป\
            เวลาว่างชอบอ่านนิยาย ดูอนิเมะ อ่านมังงะ ฟังเพลง'
    }
    res.send(data)
})

app.get('/getabout', (req, res) => {
    let data = {

        name: 'Tanatcha Buratakan',
        
        age: 19,
        
        email: 'Tanatcha.bura@bumail.net',
        
        address: '40/1 ม.5 ต.มะมุ อ.กระบุรี จ.ระนอง 85110',
        
        }
    res.send(data)
})

app.get('/getproject', (req, res) => {
    let data = {

        project_name: 'LE SSERAFIM (르세라핌) ANTIFRAGILE OFFICIAL M/V',

        project_description: 'LE SSERAFIM ได้ประกาศการคัมแบ็คของพวกเธอในมินิอัลบั้มชุดที่ 2 ANTIFRAGILE ผ่าน Weverse แพลตฟอร์มการสื่อสารระหว่างศิลปิน K-POP และแฟนๆ\
                อีกทั้งยังได้ปล่อยคลิปทีเซอร์ LE SSERAFIM DO YOU THINK IM FRAGILE ผ่านทางช่อง YouTube ของ Hybe Labels ก่อนการประกาศประมาณครึ่งชั่วโมง \
                และเพลง DO YOU THINK IM FRAGILE ที่เป็นคำบรรยายตอนช่วงท้ายของเอ็มวี Fearless ก็เป็นอีกหนึ่งสัญญาณของมินิอัลบั้มชุดที่ 2 ANTIFRAGILE ของ LE SSERAFIM \
                ที่จะคัมแบ็คในวันที่ 17 ตุลาคมนี้ เวลา 18.00 น.ตามเวลาเกาหลี และเปิดพรีออเดอร์อัลบั้มในวันที่ 19 กันยายนนี้',

        project_link: 'https://www.youtube.com/watch?v=pyf8cbqyfPs'
        
        }
    res.send(data)
})

app.get('/getcontact', (req, res) => {
    let data = {

        address: '40/1 ม.5 ต.มะมุ อ.กระบุรี จ.ระนอง 85110',

        email: 'Tanatcha.bura@bumail.net',

        phone_number: '0846276578'
        
        }
    res.send(data)
})

app.listen(3000, () => {
    console.log('start server at port 3000.')
})