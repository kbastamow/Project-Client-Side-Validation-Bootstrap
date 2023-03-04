const form = document.getElementById("form");
form.addEventListener("submit", onSubmit)

//Form validation

function onSubmit(e) {
    e.preventDefault();

    const userName = document.getElementById("name");
    const email = document.getElementById("email");
    const pw1 = document.getElementById("pw1");
    const pw2 = document.getElementById("pw2");

    const msg = document.getElementById("msg");
    const msg2 = document.getElementById("msg2")

    if (userName.value === "" || email.value === "" || pw1.value === "" || pw2.value === "") {

        console.log("Please complete all fields");
        msg.textContent = "Please complete all fields"
        msg.setAttribute("class", "alert alert-warning");

    } else if (pw1.value !== pw2.value) {

        console.log("Passwords are different")
        msg.textContent = "Passwords are different"
        msg.setAttribute("class", "alert alert-warning");
        pw1.value = "";
        pw2.value = "";


    } else if (/(\w+?@\w+?\x2E.+)/.test(email.value) !== true) {
        msg.textContent = "Please enter a valid email";
        msg.setAttribute("class", "alert alert-warning");

    } else {
        console.log("success");
        msg2.textContent = "User created correctly"
        msg2.setAttribute("class", "alert alert-success");


        //LOCAL STORAGE HERE!!

        let userArray = JSON.parse(localStorage.getItem("existing")) || []; //without this, new submit will always overwrite the existing data!!!  

        const inputName = userName.value;
        const inputEmail = email.value;
        const inputPassword = pw1.value

        const userObject = { inputName, inputEmail, inputPassword };     //This is called "PROPERTY VALUE SHORTHAND" - investigate!!!

        userArray.push(userObject);

        localStorage.setItem("existing", JSON.stringify(userArray));


        //REDIRECT TO SECOND PAGE   - BUT HAPPENS TOO SOON - must be delayed!!!
        setTimeout(function () {
            msg2.textContent = "";
            msg2.removeAttribute("class")
        }, 3000);

        setTimeout(function () {
            window.location.href = "/pages/userview.html";
        }, 3500);

    }

    setTimeout(function () {
        msg.textContent = "";
        msg.removeAttribute("class")
    }, 3000);
};

