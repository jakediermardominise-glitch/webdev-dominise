console.log(document)

const var1 = document.getElementById("h1")
console.log(var1)

const var2 = document.getElementById("p")
console.log(var2)

const image = document.getElementById("img")
console.log(image)

const nickname = document.getElementById("nickname")
console.log(nickname)

nickname.addEventListener("focus", () =>{
    nickname.style.borderColor = "yellow";
    outout.innerHTML = "input is active";
})

nickname.addEventListener( "blur", () =>{
    nickname.style.borderColor = "white";
    output.innerHTML = "input is active";
})
