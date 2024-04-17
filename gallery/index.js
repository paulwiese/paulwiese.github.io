galleries = [
    {
        link: 'galleries/personal/index.html',
        preview: 'src/PW_06351.jpg',
        info: 'Leben',
    },
    {
        link: 'galleries/events/index.html',
        preview: 'src/PW_02589.jpg',
        info: 'Events',
    }
]

let galleries_element = document.getElementById('galleries');

galleries.forEach(element => {

    let gallery = document.createElement('a');
    gallery.classList.add('gallery');
    gallery.setAttribute('href', element.link);
    
    let preview = document.createElement('div');
    preview.classList.add('preview');

    let img = document.createElement('img');
    img.src = element.preview;
    preview.appendChild(img);

    let info = document.createElement('div');
    info.classList.add('info');
    info.textContent = element.info;

    gallery.appendChild(preview);
    gallery.appendChild(info);

    galleries_element.appendChild(gallery);
});