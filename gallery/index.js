let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");

let folder = 'src/';

let images = [
    'PW_06422.jpg',
    'PW_06351.jpg',
    'PW_06430.jpg',
    '101.jpg',
    '102.jpg',
    '103.jpg',
    '104.jpg',
    '105.jpg',
];

for (const [index, value] of images.entries()) {
    var img = document.createElement('img');
    img.src = folder + value;
    switch(index%3) {
        case 0: c1.append(img); break;
        case 1: c2.append(img); break;
        case 2: c3.append(img); break;
    }
};
