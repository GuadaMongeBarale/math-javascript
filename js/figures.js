// SQUARE

function perimeterSquare(sideSquare) {
    return (sideSquare * 4);
}
function areaSquare (sideSquare) {
    return (sideSquare * sideSquare);
}

// triangle
function perimeterTriangle(s1Triangle, s2Triangle , baseTriangle) {
    return (parseFloat(s1Triangle) + parseFloat(s2Triangle) + parseFloat(baseTriangle));
}

function heightTriangle(side, base) {
    base = ((base * base ) / 4);
    side = side * side;
    h = side - base;
    h = Math.sqrt(h);

    return h;
}
function hEquilateral(side){
    side2 = (side * side);
    halfSide = (side / 2);
    halfSide2 = (halfSide * halfSide);
    h = (side2 - halfSide2);
    h = Math.sqrt(h);

    return h;
}
function hEsq(sideA, sideB, baseT){
    const s = ((parseFloat(sideA) + parseFloat(sideB)+ parseFloat(baseT) ) / 2 );
    h = Math.sqrt(s * ((s - baseT) * (s - sideA) * (s - sideB)));
    h = ((h * 2) / baseT);
    return h;
}
function typeTriangle (sideA, sideB, baseT){
    if (sideA === sideB && sideA === baseT) {
        return 'equilatero';
    }
    else if (sideA === sideB && sideA != baseT) {
        return 'isosceles';
    }
    else {
        return 'escaleno';
    }
}
function areaT(base, h) {
    const area = ((base * h) / 2);
    return area.toFixed(4);    
}
function areaTriangle(sideA, sideB, baseT) {

    triangle = typeTriangle(sideA, sideB, baseT);

    if(triangle === 'isosceles')
    {
        const height = heightTriangle(sideA, baseT);
        const area = areaT(baseT, height);
        return area;

    }
    else if (triangle === 'equilatero') {
        const height = hEquilateral(sideA);
        const area = areaT(baseT, height);
        return area;
    }
    else {
        const height = hEsq(sideA, sideB, baseT);
        const area = areaT(baseT, height);
        return area;
    }
}

//Circle
const PI = Math.PI;
function diameterCircle(radius) {
    return (radius * 2);
}
function perimeterCircle(radius) {
    const diameter = diameterCircle(radius);
    return (diameter * PI).toFixed(4);
}

function areaCircle(radius) {
    return (PI * (radius * radius)).toFixed(4);
}


const images = {
    'square':'https://cdn.pixabay.com/photo/2020/06/04/13/22/square-5258734_960_720.png',
    'circle' : 'https://cdn.pixabay.com/photo/2020/06/04/13/22/cicle-5258733_960_720.png',
    'triangle': 'https://cdn.pixabay.com/photo/2020/06/04/13/22/triangle-5258735_960_720.png'    
};
const  paragraph = {
    'square':'Ingresa el lado de tu cuadrado y yo te dire su área y altura',
    'circle' : 'Ingresa el radio de tu círculo y te diré su circunsferencia y área',
    'triangle': 'Ingresa los lados de tu triángulo y te diré su perimetro y área'
};
const container = document.querySelector(".calculator");

function createImage(figure) {
    const figureContainer = document.createElement('figure');
    const image = document.createElement('img');
    image.src = images[figure];
    image.alt = figure;

    figureContainer.appendChild(image);

    return figureContainer;
    
}

function draw(figure) {

    document.querySelector(".buttons").style.display = "none";
    
    const figureContainer = createImage(figure);

    const pLabel = document.createElement('p');
    pLabel.textContent = paragraph[figure];

    const button = document.createElement('button');
    button.textContent = 'Calcular';
    button.type = 'button';
    button.id = figure;

    if (figure === 'triangle') {
        const input = document.createElement('input');
        input.type = 'number';
        input.placeholder = 'Lado 1';
        input.id = 'side';

        const input2 = document.createElement('input');
        input2.type = 'number';
        input2.placeholder = 'Lado 2';
        input2.id = 'side2';

        const input3 = document.createElement('input');
        input3.type = 'number';
        input3.placeholder = 'Base';
        input3.id = 'base';
        
        container.append(figureContainer, pLabel, input , input2, input3, button);
    }
    else {
        const input = document.createElement('input');
        input.type = 'number';
        input.placeholder = 'Valor';
        input.id = 'side';

        container.append(figureContainer, pLabel, input , button);
    }

    button.addEventListener('click', calculator);

    return container;
}

function createButton(){

    const link = document.createElement('a');
    link.href = 'index.html';
    link.textContent = 'Regresar';
    link.className = 'button';

    return link;
}

function validator(value){

    if (value != "" && value > 0) {
        return true;
    }
    else {
        const title = document.createElement('h2');
        title.textContent = `Debes ingresar un número válido`;

        const button = createButton();
        
        container.innerHTML = "";
        container.append( title , button);
    }
}

function calculator(){
    
    const figure = document.querySelector('.calculator button');

    const input = document.querySelector('#side');
    const side = input.value;

    if(validator(side) === true)

    {

    if (figure.id === 'square') {
        
        const perimeter = perimeterSquare(side);
        const area = areaSquare (side);

        const figureContainer = createImage(figure.id);
        
        const title = document.createElement('h2');
        title.textContent = `Perímetro: ${ perimeter } cm`;

        const title2 = document.createElement('h2');
        title2.textContent = `Área: ${ area } cm2`;

        const button = createButton();
        
        container.innerHTML = "";
        container.append(figureContainer, title, title2 , button);

    }
    else if (figure.id === 'circle') {

        const perimeter = perimeterCircle(side);
        const area = areaCircle (side);

        const figureContainer = createImage(figure.id);
        
        const title = document.createElement('h2');
        title.textContent = `Circunsferencia: ${ perimeter }`;

        const title2 = document.createElement('h2');
        title2.textContent = `Área: ${ area }`;

        const button = createButton();
        
        container.innerHTML = "";
        container.append(figureContainer, title, title2 , button);

    }
    else {
        const input2 = document.querySelector('#side2');
        const side2 = input2.value;

        const input3 = document.querySelector('#base');
        const base = input3.value;

        if (validator(side2) == true && validator(base) == true) 
        {

            const perimeter = perimeterTriangle(side, side2, base);
            const area = areaTriangle(side, side2, base);

            const figureContainer = createImage(figure.id);
            
            const title = document.createElement('h2');
            title.textContent = `Perímetro: ${ perimeter }`;

            const title2 = document.createElement('h2');
            title2.textContent = `Área: ${ area }`; 

            const button = createButton();
            
            container.innerHTML = "";

            container.append(figureContainer, title, title2 , button);
        }
    }

}
}