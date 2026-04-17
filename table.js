let data =[
    { name:"shiv" , city:"bhopal",age:21},
    { name:"dikhsha" , city:"indore",age:20},
    { name:"aamna" , city:"pune",age:16},
];
let table = document.getElementById("#table1");

data.forEach(function(item){
    let row = table.insertRow();

    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);

    cell1.innerHTML = item.name;
    cell2.innerHTML = item.city;
     cell2.innerHTML = item.age;
    
});
console.log(table)