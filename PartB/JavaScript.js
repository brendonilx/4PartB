/*
    Brendon So
    Copyright 2024
    Umass Lowell
    email: Brendon_So@student.uml.edu
*/

function myFunction() {
    /*https://stackoverflow.com/questions/39884915/getelementbyid-returns-nan
    Help me debug added value fixed the NAN error
    */
    xs = parseFloat(document.getElementById("xs").value);
    xe = parseFloat(document.getElementById("xe").value);
    ys = parseFloat(document.getElementById("ys").value);
    ye = parseFloat(document.getElementById("ye").value);
    var xs = xs;
    var xe = xe;
    var ys = ys;
    var ye = ye;
    
    if (xe < -50 || xe >= 50) {
        document.getElementById("test").textContent = "ERROR";
    }
    else if (xs < -50 || xs >= 50) {
        document.getElementById("test").textContent = "ERROR";
    }
    else if (ye < -50 || ye >= 50) {
        document.getElementById("test").textContent = "ERROR";
    }
    else if (ys < -50 || ys >= 50) {
        document.getElementById("test").textContent = "ERROR";
    }
    else { //test code
        document.getElementById("test").textContent = "Valid";
        var key = 1; //tells program all are valid input
    }
}

function xs() {
    return parseFloat(document.getElementById("xs").value);
}

function xe() {
    return parseFloat(document.getElementById("xe").value);
}

function ys() {
    return parseFloat(document.getElementById("ys").value);
}

function ye() {
    return parseFloat(document.getElementById("ye").value);
}

function drawGrid() {
    myCanvas = document.getElementById("myCanvas");
    c = myCanvas.getContext('2d');


    xs = parseInt(document.getElementById("xs").value);
    xe = parseInt(document.getElementById("xe").value);
    ys = parseInt(document.getElementById("ys").value);
    ye = parseInt(document.getElementById("ye").value);



    c.clearRect(0, 0, myCanvas.width, myCanvas.height);

    let x = 0;
    let y = 0;

    for (let i = xs; i <= xe; i++) {
        for (let o = ys; o <= ye; o++) {
            //FIX MATH
            /*
            start y-axis going down, ++ next y axis
            BUG with some value, FIX



            */
            x = i * 25;
            y = o * 25;

            //COLORS
            if (i % 2 == 0) {
                c.strokeStyle = "black";
            }
            else {
                c.strokeStyle = "red";
            }

            if (o == 1) {
                c.fillStyle = "black";
                c.strokeStyle = "gray";
            }
            else if (i == 1) {
                c.fillStyle = "black";
                c.strokeStyle = "gray";
            }
            else {
                c.fillStyle = "white";
            }//COLORS


            //current size 25/25
            c.strokeRect(x, y, 25, 25);
            c.fillText(i * o, x + 10, y + 15);
        }
    }
}
