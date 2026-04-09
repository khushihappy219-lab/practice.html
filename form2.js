let validation=()=>{
    let name= document.querySelector("#username").value.trim()
    let num= document.querySelector("#usernum").value.trim()
    let email= document.querySelector("#useremail").value.trim()
    let pass= document.querySelector("#userpass").value.trim()
    let cpass= document.querySelector("#userpass").value.trim()
    let add= document.querySelector("#useradd").value.trim()


    let errname= document.querySelector("#errname")
   let errnumber=  document.querySelector("#errnum")
   let erremail= document.querySelector("#erremail")
   let errpass=  document.querySelector("#errpass")
   let errcpass= document.querySelector("#errcpass")
   let erradd = document.querySelector("#erradd")
if(name==""){
    errname.innerHTML="please enter name"
    return false
}
 else if (number==""){
    errnum.innerHTML="please enter number"
    return false
 }
 if (email==""){
    erremail.innerHTML="please enter email"
    return false
 }
 else if (pass==""){
    errpass.innerHTML="please enter password"
    return false
 }
 if (cpass==""){
    errcpass.innerHTML="please enter confirm password"
    return false
 }
 else if (add==""){
    erradd.innerHTML="please enter address"
    return false
 }

}