function validate(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const age = document.getElementById("age").value;
    const msgbox = document.getElementById("message");
    let message = "";
    if (email==='') {
        message = "please enter your email";
    }
    else if (password==='') {
        message = "please enter your password";
        msgbox.style.color = "red";
    }
    else if (age==='') {
        message = "please enter your age";
        msgbox.style.color = "red";
    }
    else {
        message = "login successfull";
        msgbox.style.color = "green";
    }
    msgbox.innerHTML = message;
}
//run validate when login is clicked
document.getElementById("loginform").addEventListener("submit", validate);
//real-time validation(like the screenshots)
document.getElementById("email").oninput = () => validate({ preventdefault: () => { } });
document.getElementById("password").oninput = () => validate({ preventdefault: () => { } });
document.getElementById("age").oninput = () => validate({ preventdefault: () => { } });