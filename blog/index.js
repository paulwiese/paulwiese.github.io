let posts = [
    {
        link: 'posts/studium/',
        preview: 'src/studium.jpg',
        title: 'Modul-Übersicht: Informatik Bachelor',
        date: '2024-04-17',
        tags: ['studium']
    },
];

let allTagsSet = new Set();

let activeStates = {};

posts.forEach(post => {
    post.tags.forEach(tag => {
        allTagsSet.add(tag);
        activeStates[tag] = true;
    });
});

let allTags = [...allTagsSet];

tagSelector = document.getElementById('tag_selector');

allTags.forEach(tag => {
    let button = document.createElement('button');
    button.id = tag;
    button.textContent = tag;

    button.classList.add("active");

    button.addEventListener('click', () => {
        activeStates[tag] = !activeStates[tag];
        button.classList.toggle('active');
        button.classList.toggle('passive');
        update();
    });
    tagSelector.appendChild(button);
});

function filterPosts(activeStates) {
    return posts.filter(post => {
        return Object.keys(activeStates).some(tag => {
            return activeStates[tag] && post.tags.includes(tag);
        });
    });
}

let filtered_posts = filterPosts(activeStates);

let posts_element = document.getElementById('posts');

function removeAllChildren(parentNode) {
    while (parentNode.firstChild) {
        parentNode.removeChild(parentNode.firstChild);
    }
}

function update() {

    removeAllChildren(posts_element);

    filtered_posts = filterPosts(activeStates);

    filtered_posts.forEach(post => {
    
        const p = document.createElement('a');
        p.classList.add('post');
        p.setAttribute('href', post.link);
    
        const previewDiv = document.createElement('div');
        previewDiv.classList.add('preview');
    
        const imgElement = document.createElement('img');
        imgElement.setAttribute('src', post.preview);
        imgElement.setAttribute('alt', 'preview-img');
    
        previewDiv.appendChild(imgElement);
    
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('info');
    
        const titleDiv = document.createElement('div');
        titleDiv.classList.add('title');
        titleDiv.textContent = post.title;
    
        const dateDiv = document.createElement('div');
        dateDiv.classList.add('date');
        dateDiv.textContent = post.date;
    
        infoDiv.appendChild(titleDiv);
        infoDiv.appendChild(dateDiv);
    
        const tagsDiv = document.createElement('div');
        tagsDiv.classList.add('tags');
        tagsDiv.innerHTML = 'tags: <br>' + post.tags.join(', ');
    
        p.appendChild(previewDiv);
        p.appendChild(infoDiv);
        p.appendChild(tagsDiv);
    
        posts_element.append(p);
    
    }
    )
}

update();

