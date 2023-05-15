function areaFunctionTri() {
    var h = Number(document.getElementById('valueOneTri').value);
    var b = Number(document.getElementById('valueTwoTri').value);
    var ans = 0.5 * h * b;

    let list = document.getElementById('ansList');
    let li = document.createElement('li');
    li.innerText = "Triangle: " + ans;
    list.appendChild(li);

}

function areaFunctionRec() {
    var h = Number(document.getElementById('valueOneRec').value);
    var b = Number(document.getElementById('valueTwoRec').value);
    var ans = h * b;

    let list = document.getElementById('ansList');
    let li = document.createElement('li');
    li.innerText = "Rectangle: " + ans;
    list.appendChild(li);
}

function areaFunctionPar() {
    var h = Number(document.getElementById('valueOnePar').value);
    var b = Number(document.getElementById('valueTwoPar').value);
    var ans = h * b;

    let list = document.getElementById('ansList');
    let li = document.createElement('li');
    li.innerText = "Parallelogram: " + ans;
    list.appendChild(li);
}

function areaFunctionRho() {
    var h = Number(document.getElementById('valueOneRho').value);
    var b = Number(document.getElementById('valueTwoRho').value);
    var ans = 0.5 * h * b;

    let list = document.getElementById('ansList');
    let li = document.createElement('li');
    li.innerText = "Rhombus: " + ans;
    list.appendChild(li);
}

function areaFunctionPen() {
    var h = Number(document.getElementById('valueOnePen').value);
    var b = Number(document.getElementById('valueTwoPen').value);
    var ans = 0.5 * h * b;

    let list = document.getElementById('ansList');
    let li = document.createElement('li');
    li.innerText = "Pentagon: " + ans;
    list.appendChild(li);
}

function areaFunctionEll() {
    var h = Number(document.getElementById('valueOneEll').value);
    var b = Number(document.getElementById('valueTwoEll').value);
    var ans = 3.1416 * h * b;

    let list = document.getElementById('ansList');
    let li = document.createElement('li');
    li.innerText = "Ellipse: " + ans;
    list.appendChild(li);
}