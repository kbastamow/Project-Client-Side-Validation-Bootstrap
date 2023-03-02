
const form = document.getElementById("form");
const userName = document.getElementById("name");
const email = document.getElementById("email");
const pw1 = document.getElementById("pw1");
const pw2 = document.getElementById("pw2");

const btn = document.getElementById("btn");
const msg = document.getElementById("msg")


form.addEventListener("submit", onSubmit)

function onSubmit(e) {
    e.preventDefault();

    if (userName.value === "" || email.value === "" || pw1.value === "" || pw2.value === "") {

        console.log("Please complete all fields");
        msg.textContent = "Please complete all fields"

    } else if (pw1.value !== pw2.value) {

        console.log("Passwords are different")
        msg.textContent = "Passwords are different"
        pw1.value = "";
        pw2.value = "";


    } else if (/(\w+?@\w+?\x2E.+)/.test(email.value) !== true) {
        msg.textContent = "Please enter a valid email";

    } else {
        console.log("success");
        msg.textContent = "User created correctly"
    }

    setTimeout(function () {
        msg.textContent = "";
   
    }, 3000);
};



/*
const form = document.getElementById("formulario");
const nombreInput = form.elements['nombre'];
const emailInput = form.elements['email'];
const mensajeInput = form.elements['mensaje'];
const container = document.querySelector(".container");

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = nombreInput.value;
    const email = emailInput.value;
    const mensaje = mensajeInput.value;

    localStorage.setItem('userData', JSON.stringify({ nombre, email, mensaje }));

    container.innerHTML = `<p>${nombre}<br><br>${email}<br><br>${mensaje}</p>`;
});


const form2 = document.getElementById("formulario");
const nombreInput2 = form2.elements['nombre'];
const emailInput2 = form2.elements['email'];
const mensajeInput2 = form2.elements['mensaje'];
const container2 = document.querySelector(".container2");

form2.addEventListener('submit', function (e) {
    e.preventDefault();

    const nombre = nombreInput2.value;
    const email = emailInput2.value;
    const mensaje = mensajeInput2.value;

    const inData = JSON.parse(localStorage.getItem("usuarios")) || [];

    const newData = { nombre, email, mensaje };
    inData.push(newData);

    localStorage.setItem("usuarios", JSON.stringify(inData));

    // Actualiza el DOM con los datos guardados
    const div = document.createElement("div");
    const nombreP = document.createElement("p");
    const emailP = document.createElement("p");
    const mensajeP = document.createElement("p");

    nombreP.textContent = `Nombre: ${nombre}`;
    emailP.textContent = `Email: ${email}`;
    mensajeP.textContent = `Mensaje: ${mensaje}`;

    div.appendChild(nombreP);
    div.appendChild(emailP);
    div.appendChild(mensajeP);
    container2.appendChild(div);
});


const btnBorrar = document.getElementById("btn-borrar");

btnBorrar.addEventListener("click", function () {
    localStorage.removeItem("usuarios");
    container2.innerHTML = ""; // Limpia el contenido del contenedor
});

const inData = JSON.parse(localStorage.getItem("usuarios")) || [];

inData.forEach(function (persona) {
    const div = document.createElement("div");
    const nombreP = document.createElement("p");
    const emailP = document.createElement("p");
    const mensajeP = document.createElement("p");

    nombreP.textContent = `Nombre: ${persona.nombre}`;
    emailP.textContent = `Email: ${persona.email}`;
    mensajeP.textContent = `Mensaje: ${persona.mensaje}`;

    div.appendChild(nombreP);
    div.appendChild(emailP);
    div.appendChild(mensajeP);
    container2.appendChild(div);
});*/