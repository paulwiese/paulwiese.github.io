let c1 = document.getElementById("c1");
let c2 = document.getElementById("c2");
let c3 = document.getElementById("c3");

let folder = 'src/';

let images = [
    'PW_02501.jpg',
    'PW_02561.jpg',
    'PW_02589.jpg',
    'PW_03407.jpg',
    'PW_02637.jpg',
    'PW_02546.jpg',
    'PW_02569.jpg',
    'PW_02590.jpg',
    'PW_02657.jpg',
    'PW_04495.jpg',
    'PW_02555.jpg',
    'PW_02587.jpg',
    'PW_02634.jpg',
    'PW_02892.jpg'
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
