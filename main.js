let id = document.getElementById("usrid")
let pass = document.getElementById("usrpass")
let go = document.getElementById("go")

go.style.display = "none";


function check() {
    if (id.value === "admin" && pass.value === "admin") {
        go.style.display = "block";
    }
    else {
        go.style.display = "none";
    }

}