let container = document.getElementById("id");
let div = document.createElement("div");

const fetchData = async () => {
    try{
        const res = await fetch("http://localhost:3000/ejes");
        const roles = await res.json();
        let resText = "";
        roles.forEach(rol => {
            resText += `${rol.titulo}<br />`;
        });
        document.body.textContent = resText;
    }catch(e){
        console.log("Error", e);
    }
}


window.onload = fetchData;