let projects = [

    {
        title: 'Cooking Assistant',
        started: 'April 2026',
        info: 'LLM powered Cooking Assistant helping users to find and manage recipes. Developed in a team of 3 people for the DevOps course at the Technical University of Munich.',
        repo: 'https://github.com/AET-DevOps26/team-devsecops',
    },
    {
        title: 'Brainfuq',
        started: 'April 2026',
        info: 'Interpreter for the Brainfuq programming language, which extends the classical Brainfuck by instructions for quantum computing. Developed in a team of 2 people for the Quantum Computing Software Lab course at the Technical University of Munich.',
        repo: 'https://github.com/dabund24/brainfuq',
    }
];

let projects_element = document.getElementById('projects');

projects.forEach(project => {

    const p = document.createElement('div');
    p.classList.add('project');

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title');
    titleDiv.textContent = project.title;

    const dateDiv = document.createElement('div');
    dateDiv.classList.add('date');
    dateDiv.textContent = 'Started: ' + project.started;

    const infoDiv = document.createElement('div');
    infoDiv.classList.add('info');
    infoDiv.textContent = project.info;

    const repoDiv = document.createElement('div');
    repoDiv.classList.add('repoDiv');
    repoDiv.textContent = 'Repository:\n';

    const repo = document.createElement('a');
    repo.setAttribute('href', project.repo);
    repo.classList.add('repo');
    repo.textContent = project.repo;
    repoDiv.appendChild(repo);

    p.appendChild(titleDiv);
    p.appendChild(dateDiv);
    p.appendChild(infoDiv);
    p.appendChild(repoDiv);

    projects_element.append(p)

})