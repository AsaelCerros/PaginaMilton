

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')

fetch("http://localhost:3000/ejes")
     .then(res => res.json())
     .then(data => {
         data.forEach((rol,i)=>{
          if(i==id){
            document.getElementById("loop").innerHTML=` <img id="moreimage" src="${rol.foto}"/>
            <p id="morename">${rol.titulo}</p>
            <p id="moredesc">${rol.descripcion}</p>
            <p id="moremoredesc">${rol.d_completa}</p>`
          }
         });
     })

     function home(){
       window.location.href="index.html"
     }
     