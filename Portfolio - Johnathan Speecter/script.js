document.querySelector(".bar-toggle-button").onclick = function () {
    let myDiv = document.querySelector(".toggleDiv");
    if (myDiv.style.display === "none") {
        return myDiv.style.display = "block";
    } else {
        return myDiv.style.display = "none"
    }
    }