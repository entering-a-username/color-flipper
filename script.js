(function() {
    

}()); // iifes
function th() {
    const button = document.querySelector("button");
    const color = document.getElementById("colorID");
    const simple = document.getElementById("simpleID");
    const hex = document.getElementById("hexID");

    simple.addEventListener("click", focusOnSpan);
    hex.addEventListener("click", focusOnSpan);

    button.addEventListener("click", randomgHEXGenerator);

    function focusOnSpan() {
        this.classList.toggle("text-blue-900");
    }

    function randomHEXGenerator() {
        const randomHex = Math.floor(Math.random() * 16777215).toString(16);
        document.body.style.backgroundColor = "#" + randomHex;
        color.innerHTML = "#" + randomHex;
    }

    function randomColorGenerator() {
        
    }

    
}

th();
