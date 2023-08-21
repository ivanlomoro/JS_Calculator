const pantalla=document.querySelector(".pantalla");
const botones=document.querySelectorAll(".btn");
const listaHistorial = document.getElementById("listaHistorial");
const borrarHistorialBtn = document.getElementById("borrarHistorial");

botones.forEach(boton => {
    boton.addEventListener("click", () => {
      event.preventDefault();
        const botonApretado=boton.textContent;

        if(boton.id === "ac"){
            pantalla.textContent = "0";
            return; //I make the function end there, so that everything that follows is not executed.
        }

        if (boton.id === "borrar"){
            if(pantalla.textContent.length===1 || pantalla.textContent==="Error"){
                pantalla.textContent="0";
            }else{
                pantalla.textContent = pantalla.textContent.slice(0,-1); //Slice() returns a string from position 0 and -1 so that it excludes the last num.
            }
            return;
        }

        if (boton.id === "igual") {
          let operacion = pantalla.textContent;
            try {
              let resultado = eval(pantalla.textContent);
              if (isNaN(resultado)) {
                pantalla.textContent = "Error";
              } else {
                //I limit the maximum number of characters.
                const maxCaracteres = 13;
                if (resultado.toString().length > maxCaracteres) {
                  resultado = resultado.toString().substr(0, maxCaracteres);
                }
                pantalla.textContent = resultado;
                agregarHistorial(operacion, resultado);
              }
            } catch {
              pantalla.textContent = "Error";
            }
            return;
          }

          const maxCaracteres = 13; 
          if (pantalla.textContent.length >= maxCaracteres) {
            return; 
          }

        if (boton.id === "cambio") {
            try {
              const numero = parseFloat(pantalla.textContent); //Tries to convert the content of pantalla.textContent to a number 
              if (isNaN(numero)) {
                pantalla.textContent = "Error";
              } else {
                pantalla.textContent = numero * -1;
              }
            } catch (error) {
              pantalla.textContent = "Error";
            }
            return;
          }
          
        if(pantalla.textContent === "0" || pantalla.textContent === "Error"){
            pantalla.textContent= botonApretado
        }else{
            pantalla.textContent +=botonApretado;
        }
    });
  });

  function agregarHistorial(operacion, resultado) {
    const listaHistorial = document.getElementById('listaHistorial');
    const elementoLista = document.createElement('li');
    elementoLista.textContent = operacion + " = " + resultado;
    listaHistorial.appendChild(elementoLista);
  }

  borrarHistorialBtn.addEventListener('click', (event) => {
    event.preventDefault();
    while (listaHistorial.firstChild) {
        listaHistorial.removeChild(listaHistorial.firstChild);
      }
  });

    /*Dark Mode*/
    const calculadora = document.querySelector(".calculadora");
    const switchToggle = document.getElementById('switch');
    const body = document.body;
    const toggleLabel = document.querySelector('.toggle-label');
    const historial = document.querySelector(".historial");
    const historialLista=document.querySelector(".historial-lista");
    const borrarHistorial=document.querySelector("#borrarHistorial");
    const tittle=document.querySelector(".tittle");
    
    switchToggle.addEventListener('change', function() {
        body.classList.toggle('dark-mode');
        calculadora.classList.toggle('dark-mode');
        pantalla.classList.toggle('dark-mode');
        toggleLabel.classList.toggle('dark-mode');
        historial.classList.toggle('dark-mode');
        historialLista.classList.toggle('dark-mode');
        borrarHistorial.classList.toggle('dark-mode');
        tittle.classList.toggle('dark-mode');

        
        botones.forEach(boton => {
            boton.classList.toggle('dark-mode'); //Add the 'dark-mode' class to each button
          });
    });
