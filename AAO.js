let mydata=[{
    Image:"apple.jpg",
    name:"shiv",
    city:"bhopal",
    age:"21",
    
},{
    Image:"strawberry.jpg",
    name:"dikhsha",
    city:"indore",
    age:"20",

},{
    Image:"santra.jpg",
    name:"aamna",
    city:"pune",
    age:"16",
}]

let show = document.querySelector("#show")
mydata.map((e)=>{
    show.innerHTML +=`
    <div>
    <img src="${e.Image}">
    <h1> name:${e.name}  </h1>
    <h1> city:${e.city}  </h1>
    <h1> age:${e.age}  </h1>
    </div>
    `

})
console.log(mydata)