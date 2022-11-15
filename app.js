//numero lo inicializamos en cero
let count = 0;

//span con la clase value
const value = document.querySelector("#value");

//botones con la clase btn
const btns = document.querySelectorAll(".btn");


//funcion
btns.forEach(function (btn) {

    //si le click llama a la function
  btn.addEventListener("click", function (e) {

    const styles = e.currentTarget.classList;

    //tiene q tener la clase btn y despues se fija q otra clase tienes 
    if (styles.contains("decrease")) {
        //resta 1
      count--;
    } else if (styles.contains("increse")) {
        //suma 1
      count++;
    } else {
        //lo pone en cero
      count = 0;
    }

    //para cambiarle el color
    if (count > 0) {
        //verde
      value.style.color = "green";
    }
    if (count < 0) {
        //rojo
      value.style.color = "red";
    }
    if (count === 0) {
        //negro
      value.style.color = "black";
    }


    //cambia el contenido del texto por la varialbe count 
    value.textContent = count;
  });
});
