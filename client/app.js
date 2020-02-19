
function moreinfo(){
window.open("info.html",'_blank',
'toolbar=no','location=no','status=no','menubar=no',
'scrollbars=yes','resizable=yes','width=50%','height=50%'); 
return false;
}

const fetchData = async () => {
    try{
        const res = await fetch("http://localhost:3000/ejes");
        const roles = await res.json();
        let con=0;
        roles.forEach((rol,i) => {
            let li= document.createElement('li');
            li.setAttribute('id', `loop-list${i}`);
            li.innerHTML = `<div id="contain-loop"><img id="loop-img${i}" src="${rol.foto}"/><p id="loop-text-bold${i}">${rol.titulo}</p><button id="mas${i}" onclick="send(${i})">Conoce más</button> </div>`;
            document.getElementById("looper").appendChild(li);
        });
    }catch(e){
        console.log("Error", e);
    }
}

window.onload = fetchData;

function buscar(){
        // Declare variables
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById('search');
        filter = input.value.toUpperCase();
        ul = document.getElementById("looper");
        li = ul.getElementsByTagName('li');
      
        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
          a = li[i].getElementsByTagName("p")[0];
          txtValue = a.textContent || a.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
          } else {
            li[i].style.display = "none";
          }
        }
      }

      function send(i){
        window.location.href=`mas_info.html?id=`+i;
        }

        function home(){
            window.location.href="index.html"
          }

