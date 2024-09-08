(function() {
    const button = document.querySelector("button");
    const color = document.getElementById("colorID");
    
    button.addEventListener("click", randomHEXGenerator);

    function randomHEXGenerator() {
        const randomHex = Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomHex;
        color.innerHTML = "#" + randomHex;
    }
}());
