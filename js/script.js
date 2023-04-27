const imgHangman1 = document.getElementById("imgHangman1");
const imgHangman2 = document.getElementById("imgHangman2");
const imgHangman3 = document.getElementById("imgHangman3");

var fails1 = localStorage.getItem("fails1");
if (fails1 === null) {
    fails1 = 0;
    document.getElementById("txtFails1").innerHTML = "Fails: " + fails1;
} else {
    document.getElementById("txtFails1").innerHTML = "Fails: " + fails1;
    if (fails1 == 1) {
        imgHangman1.src = "./images/hangman1.jpg";
    } else if (fails1 == 2) {
        imgHangman1.src = "./images/hangman2.jpg";
    } else if (fails1 == 3) {
        imgHangman1.src = "./images/hangman3.jpg";
    } else if (fails1 == 4) {
        imgHangman1.src = "./images/hangman4.jpg";
    } else if (fails1 == 5) {
        imgHangman1.src = "./images/hangman5.jpg";
        document.getElementById("hint1").innerHTML =
            "Hint: Spain, Belgium, Switzerland";
    } else if (fails1 == 6) {
        imgHangman1.src = "./images/hangman6.jpg";
        document.getElementById("hint1").innerHTML =
            "Hint: Spain, Belgium, Switzerland";
    } else if (fails1 == 7) {
        imgHangman1.src = "./images/hangman7.jpg";
        document.getElementById("hint1").innerHTML =
            "Hint: Spain, Belgium, Switzerland";
        document.getElementById("btnCheckChar1").classList.add("disabled");
    }
}

var fails2 = localStorage.getItem("fails2");
if (fails2 === null) {
    fails2 = 0;
    document.getElementById("txtFails2").innerHTML = "Fails: " + fails2;
} else {
    document.getElementById("txtFails2").innerHTML = "Fails: " + fails2;
    if (fails2 == 1) {
        imgHangman2.src = "./images/hangman1.jpg";
    } else if (fails2 == 2) {
        imgHangman2.src = "./images/hangman2.jpg";
    } else if (fails2 == 3) {
        imgHangman2.src = "./images/hangman3.jpg";
    } else if (fails2 == 4) {
        imgHangman2.src = "./images/hangman4.jpg";
    } else if (fails2 == 5) {
        imgHangman2.src = "./images/hangman5.jpg";
        document.getElementById("hint2").innerHTML = "Hint: A drink";
    } else if (fails2 == 6) {
        imgHangman2.src = "./images/hangman6.jpg";
        document.getElementById("hint2").innerHTML = "Hint: A drink";
    } else if (fails2 == 7) {
        imgHangman2.src = "./images/hangman7.jpg";
        document.getElementById("hint2").innerHTML = "Hint: A drink";
        document.getElementById("btnCheckChar2").classList.add("disabled");
    }
}

var fails3 = localStorage.getItem("fails3");
if (fails3 === null) {
    fails3 = 0;
    document.getElementById("txtFails3").innerHTML = "Fails: " + fails3;
} else {
    document.getElementById("txtFails3").innerHTML = "Fails: " + fails3;
    if (fails3 == 1) {
        imgHangman3.src = "./images/hangman1.jpg";
    } else if (fails3 == 2) {
        imgHangman3.src = "./images/hangman2.jpg";
    } else if (fails3 == 3) {
        imgHangman3.src = "./images/hangman3.jpg";
    } else if (fails3 == 4) {
        imgHangman3.src = "./images/hangman4.jpg";
    } else if (fails3 == 5) {
        imgHangman3.src = "./images/hangman5.jpg";
        document.getElementById("hint3").innerHTML = "Hint: Tires";
    } else if (fails3 == 6) {
        imgHangman3.src = "./images/hangman6.jpg";
        document.getElementById("hint3").innerHTML = "Hint: Tires";
    } else if (fails3 == 7) {
        imgHangman3.src = "./images/hangman7.jpg";
        document.getElementById("hint3").innerHTML = "Hint: Tires";
        document.getElementById("btnCheckChar3").classList.add("disabled");
    }
}

var currentWord1 = "";
var currentWord2 = "";
var currentWord3 = "";

try {
    var estadoJuego = localStorage.getItem("estadoJuego");
    if (estadoJuego === "f") {
        alert("Sorry, ¡you lost!");
    }
} catch (error) {}

/* Parte del ahorcado 1 */
document
    .getElementById("checkchar1")
    .addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que se envíe el formulario
        var char1 = document.getElementById("char1").value;
        if (char1.trim() !== "") {
            let char = char1.split("");
            if (char.length > 1) {
                $("#WrongModal2").modal("show");
            } else {
                if (char.includes("f") || char.includes("F")) {
                    document.getElementById("c11").innerHTML = "F";
                    currentWord1 += "f";
                } else if (char.includes("r") || char.includes("R")) {
                    document.getElementById("c12").innerHTML = "R";
                    currentWord1 += "r";
                } else if (char.includes("a") || char.includes("A")) {
                    document.getElementById("c13").innerHTML = "A";
                    currentWord1 += "a";
                } else if (char.includes("n") || char.includes("N")) {
                    document.getElementById("c14").innerHTML = "N";
                    currentWord1 += "n";
                } else if (char.includes("c") || char.includes("C")) {
                    document.getElementById("c15").innerHTML = "C";
                    currentWord1 += "c";
                } else if (char.includes("e") || char.includes("E")) {
                    document.getElementById("c16").innerHTML = "E";
                    currentWord1 += "e";
                } else {
                    fails1++;
                    localStorage.setItem("fails1", fails1);
                    if (fails1 === 1) {
                        imgHangman1.src = "./images/hangman1.jpg";
                    } else if (fails1 === 2) {
                        imgHangman1.src = "./images/hangman2.jpg";
                    } else if (fails1 === 3) {
                        imgHangman1.src = "./images/hangman3.jpg";
                    } else if (fails1 === 4) {
                        imgHangman1.src = "./images/hangman4.jpg";
                    } else if (fails1 === 5) {
                        imgHangman1.src = "./images/hangman5.jpg";
                        document.getElementById("hint1").innerHTML =
                            "Hint: Spain, Belgium, Switzerland";
                    } else if (fails1 === 6) {
                        imgHangman1.src = "./images/hangman6.jpg";
                    } else if (fails1 >= 7) {
                        imgHangman1.src = "./images/hangman7.jpg";
                        $("#WrongModal5").modal("show");
                        document
                            .getElementById("btnCheckChar1")
                            .classList.add("disabled");
                        localStorage.setItem("estadoJuego", "f");
                    }
                    document.getElementById("txtFails1").innerHTML =
                        "Fails: " + fails1;
                }

                if (
                    currentWord1.includes("f") &&
                    currentWord1.includes("r") &&
                    currentWord1.includes("a") &&
                    currentWord1.includes("n") &&
                    currentWord1.includes("c") &&
                    currentWord1.includes("e")
                ) {
                    $("#CorrectModal2").modal("show");
                    imgHangman1.src = "./images/hangman8.jpg";
                    document
                        .getElementById("btnCheckChar1")
                        .classList.add("disabled");
                }
            }
        } else {
            $("#EmptyModal1").modal("show");
        }
    });

/* Parte del ahorcado 2 */
document
    .getElementById("checkchar2")
    .addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que se envíe el formulario
        var char2 = document.getElementById("char2").value;
        if (char2.trim() !== "") {
            let char = char2.split("");
            if (char.length > 1) {
                $("#WrongModal2").modal("show");
            } else {
                if (char.includes("w") || char.includes("W")) {
                    document.getElementById("c21").innerHTML = "W";
                    currentWord2 += "w";
                } else if (char.includes("i") || char.includes("I")) {
                    document.getElementById("c22").innerHTML = "I";
                    currentWord2 += "i";
                } else if (char.includes("n") || char.includes("N")) {
                    document.getElementById("c23").innerHTML = "N";
                    currentWord2 += "n";
                } else if (char.includes("e") || char.includes("E")) {
                    document.getElementById("c24").innerHTML = "E";
                    currentWord2 += "e";
                } else {
                    fails2++;
                    localStorage.setItem("fails2", fails2);
                    if (fails2 === 1) {
                        imgHangman2.src = "./images/hangman1.jpg";
                    } else if (fails2 === 2) {
                        imgHangman2.src = "./images/hangman2.jpg";
                    } else if (fails2 === 3) {
                        imgHangman2.src = "./images/hangman3.jpg";
                    } else if (fails2 === 4) {
                        imgHangman2.src = "./images/hangman4.jpg";
                    } else if (fails2 === 5) {
                        imgHangman2.src = "./images/hangman5.jpg";
                        document.getElementById("hint2").innerHTML =
                            "Hint: A drink";
                    } else if (fails2 === 6) {
                        imgHangman2.src = "./images/hangman6.jpg";
                        
                    } else if (fails2 >= 7) {
                        imgHangman2.src = "./images/hangman7.jpg";
                        $("#WrongModal5").modal("show");
                        document
                            .getElementById("btnCheckChar2")
                            .classList.add("disabled");
                        localStorage.setItem("estadoJuego", "f");
                    }
                    document.getElementById("txtFails2").innerHTML =
                        "Fails: " + fails2;
                }
                if (
                    currentWord2.includes("w") &&
                    currentWord2.includes("i") &&
                    currentWord2.includes("n") &&
                    currentWord2.includes("e")
                ) {
                    $("#CorrectModal2").modal("show");
                    imgHangman2.src = "./images/hangman8.jpg";
                    document
                        .getElementById("btnCheckChar2")
                        .classList.add("disabled");
                }
            }
        } else {
            $("#EmptyModal1").modal("show");
        }
    });

/* Parte del ahorcado 3 */
document
    .getElementById("checkchar3")
    .addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que se envíe el formulario
        var char3 = document.getElementById("char3").value;
        if (char3.trim() !== "") {
            let char = char3.split("");
            if (char.length > 1) {
                $("#WrongModal2").modal("show");
            } else {
                if (char.includes("m") || char.includes("M")) {
                    document.getElementById("c31").innerHTML = "M";
                    currentWord3 += "m";
                } else if (char.includes("i") || char.includes("I")) {
                    document.getElementById("c32").innerHTML = "I";
                    document.getElementById("c37").innerHTML = "I";
                    currentWord3 += "i";
                } else if (char.includes("c") || char.includes("C")) {
                    document.getElementById("c33").innerHTML = "C";
                    currentWord3 += "c";
                } else if (char.includes("h") || char.includes("H")) {
                    document.getElementById("c34").innerHTML = "H";
                    currentWord3 += "h";
                } else if (char.includes("e") || char.includes("E")) {
                    document.getElementById("c35").innerHTML = "E";
                    currentWord3 += "e";
                } else if (char.includes("l") || char.includes("L")) {
                    document.getElementById("c36").innerHTML = "L";
                    currentWord3 += "l";
                } else if (char.includes("n") || char.includes("N")) {
                    document.getElementById("c38").innerHTML = "N";
                    currentWord3 += "n";
                } else {
                    fails3++;
                    localStorage.setItem("fails3", fails3);
                    if (fails3 === 1) {
                        imgHangman3.src = "./images/hangman1.jpg";
                    } else if (fails3 === 2) {
                        imgHangman3.src = "./images/hangman2.jpg";
                    } else if (fails3 === 3) {
                        imgHangman3.src = "./images/hangman3.jpg";
                    } else if (fails3 === 4) {
                        imgHangman3.src = "./images/hangman4.jpg";
                    } else if (fails3 === 5) {
                        imgHangman3.src = "./images/hangman5.jpg";
                        document.getElementById("hint3").innerHTML =
                            "Hint: Tires";
                    } else if (fails3 === 6) {
                        imgHangman3.src = "./images/hangman6.jpg";
                    } else if (fails3 >= 7) {
                        imgHangman3.src = "./images/hangman7.jpg";
                        $("#WrongModal5").modal("show");
                        document
                            .getElementById("btnCheckChar3")
                            .classList.add("disabled");
                        localStorage.setItem("estadoJuego", "f");
                    }
                    document.getElementById("txtFails3").innerHTML =
                        "Fails: " + fails3;
                }
                if (
                    currentWord3.includes("m") &&
                    currentWord3.includes("i") &&
                    currentWord3.includes("c") &&
                    currentWord3.includes("h") &&
                    currentWord3.includes("e") &&
                    currentWord3.includes("l") &&
                    currentWord3.includes("n")
                ) {
                    $("#CorrectModal2").modal("show");
                    imgHangman3.src = "./images/hangman8.jpg";
                    document
                        .getElementById("btnCheckChar3")
                        .classList.add("disabled");
                }
            }
        } else {
            $("#EmptyModal1").modal("show");
        }
    });
