//boton de modo dark

let modo=localStorage.getItem("modo") || "light";
console.log(modo);

let principal=document.getElementById("principal");
let boton=document.getElementById("mode");
document.body.className=modo;
principal.className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center "+modo;
localStorage.setItem("modo",modo);

boton.onclick=()=>{
    if(modo=="light"){
        document.body.className="dark";
        principal.className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center dark";
        modo="dark";
        boton.innerText="Light Mode";
    }else{
        document.body.className="light";
        principal.className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center light";
        modo="light";
        boton.innerText="Dark Mode";
    }
    localStorage.setItem("modo",modo);
}
