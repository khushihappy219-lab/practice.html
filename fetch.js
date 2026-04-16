let fetchdata= async()=>{
    let api='https://jsonplaceholder.typicode.com/albums'
    let res= await fetch(api,{method:"GET"})
    let data= await  res.json()
    console.log(data);
}
let show = document.querySelector("#khushi")
data.map((e)=>{
    show.innerHTML +=`
    
    <link rel="stylesheet" href="https://jsonplaceholder.typicode.com/albums">
    
    `

})
fetchdata()