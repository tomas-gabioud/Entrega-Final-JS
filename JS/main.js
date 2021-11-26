class Datos {
    constructor(nombre, edad, kilos, centimetros, horasDeEntrenamiento, sexo) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.kilos = kilos;
        this.centimetros = centimetros;
        this.horasDeEntrenamiento = horasDeEntrenamiento;
    }
    //Formula del indice de masa muscular.
    IMC() {
        return (this.kilos / this.centimetros ** 2).toFixed(2);
    }
    //Descripcion de la categoria del peso de cada uno.
    getDescription() {
        switch (true) {
            case this.IMC() <= 18:
                return "Tenes un peso inferior al normal,";

            case this.IMC() <= 24:
                return "Tenes un peso normal,";

            case this.IMC() <= 29:
                return "Tenes un peso superior al normal,";

            default:
                return " Tu Imc esta dentr○ de la categoria obesidad,";
        }
    }
    // Calorias hombres / mujeres / otros.
    kcalH() {
        switch (this.sexo) {
            case "M":
                return (
                    66 +
                    13.7 * this.kilos +
                    5 * (this.centimetros * 100) -
                    6.75 * this.edad
                );
            case "F":
                return (
                    655 +
                    9.6 * this.kilos +
                    1.8 * (this.centimetros * 100) -
                    4.7 * this.edad
                );
            default:
                return (
                    350 +
                    11.5 * this.kilos +
                    3.2 * (this.centimetros * 100) -
                    5.8 * this.edad
                );
        }
    }
}

//  Guardando la información en local storage de los datos del usuario  
let storage = [];

$("#form").submit(function (e) {
    e.preventDefault();
    if($("#cm")[0].value.includes(".")){
    let user = new Datos(
        $("#nombre")[0].value,
        $("#edad")[0].value,
        $("#kg")[0].value,
        $("#cm")[0].value,
        $("#hsE")[0].value,
        $("#sexo")[0].value
    );
    $("#resp")[0].textContent = `Tu IMC es de : ${user.IMC()} 
                                ${user.getDescription()}
                                Calorías sugeridas : ${user.kcalH()} kcal por día.`;
    storage.push(user);
    localStorage.setItem("usuarios", JSON.stringify(storage));}
    else{ 
        Swal.fire(
        `Hola ${$("#nombre")[0].value} `,
        `La altura debe ingresarse en metros, por ejemplo: 1.70 `,
        `error`
    );}
});

/*  Creando una imagen  que despliega la información correspondiente   */

function createCard(nombre, img, text, id3) {
    let div = document.createElement("div");
    div.innerHTML = `<img class="img" id=${id3} src=${img}> <p class="text" id=${nombre}> ${text} </p>`;
    $("section").append(
        `<div class= "boxImg"> <img class="img" id=${id3} src=${img}> <p class="text" id=${nombre}> ${text} </p> </div>`
    );
}

//crear clase Dieta

let diet = [
    {
        nombre: "dieta1",
        text: " Una dieta baja en calorías puede ayudar a perder grasa corporal en poco tiempo y ser un útil aliado para un cambio de alimentación de carácter duradero. Una dieta baja en carbohidratos es adecuada para cualquier persona que quiera perder grasa corporal y definir los músculos. ",
        img: "./Imagenes/comida-bc.jpg",
        id: 1,
    },
    {
        nombre: "dieta2",
        text: "Las dietas hipercalóricas son aquellas que contienen un aporte energético mayor del que necesita un individuo. No sólo es una dieta alta en calorías que permite lograr un aumento de peso, además se mejora la calidad y la cantidad de lo que se come.",
        img: "./Imagenes/comida-ac.jpg",
        id: 2,
    },
    {
        nombre: "dieta3",
        text: "Una dieta de definición muscular está basada en reducir el nivel de grasa corporal y acompañarlo de ejercicios para tonificar y definir el cuerpo. Hay que tener presente que obtendremos mejores resultados si acompañamos este plan dietético con deporte, tanto cardio como ejercicios anaeróbicos.",
        img: "magenes/dieta-volumen.jpg",
        id: 3,
    },
];

for (let diets of diet) {
    createCard(diets.nombre, diets.img, diets.text, diets.id);
}

// id = dieta.nombre

function toggle(id) {
    let dieta = diet.find((d) => d.id == id);
    $(`#${dieta.nombre}`).toggle();
}

$(".img").click((e) => {
    toggle(e.target.id);
});

/* Footer tipado de las redes sociales */
const typed = new Typed(".typed", {
    strings: [
        '<a class="Redes-sociales" href="https://www.whatsapp.com/?lang=es">WhatsApp</a>',
        '<a class="Redes-sociales" href="https://www.facebook.com/">Facebook</a>',
        '<a class="Redes-sociales" href="https://twitter.com/?lang=es">Twitter</a>',
        '<a class="Redes-sociales" href="https://www.instagram.com/">Instagram</a>',
    ],
    typeSpeed: 80,
    startDelay: 500,
    backSpeed: 80,
    loop: true,
    loopCount: false,
    showCursor: true,
});
