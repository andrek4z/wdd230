
const p1 = document.querySelector("#password");
const p2 = document.querySelector("#rpassword");
const message = document.querySelector("#formmessage");

p2.addEventListener("focusout", checkSame);

function checkSame()
{
    if(p1.value !== p2.value)
    {
        message.textContent = "Passwords DO NOT match, try again";
        message.style.visibility = "show";
        p1.value = "";
        p2.value = "";
        p1.focus();
    }
    else
    {
        message.style.display = "none";
        p1.style.backgroundColor = "rgb(179, 222, 179)";
        p2.style.backgroundColor = "rgb(179, 222, 179)";
    }
}