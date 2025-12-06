let data = {
    name:"Kamonchanok",
    surname:"Theprod",
    nick:"Yu",
    nick2:"Yuyu",
    age:17,
    fav_food: ["shabu","ramen","water"],
}

const name1 = document.getElementById("name")
name1.innerHTML = (`My name is ${data.name} ${data.surname}`)
const nick1 = document.getElementById("nick")
nick1.innerHTML = (`you can call me ${data.nick} , ${data.nick2} or whatever you want`)
const age1 = document.getElementById("age")
age1.innerHTML = (`Im ${data.age} years old ^_^ `)


const fie1 = document.getElementById("fie1")
fie1.addEventListener("click", () => {
        alert("HI! welcome to my webpage")
    })

const smt1 = document.getElementById("smt1")
smt1.addEventListener("click", () => {
        alert("actually มันต้องเปนผลงานแต่ไม่มีหนินา")
    })

const smt2 = document.getElementById("smt2")
smt2.addEventListener("click", () => {
        alert("อันนี้ก้อด้วย")
    })
