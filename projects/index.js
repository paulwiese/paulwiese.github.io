let projects = [
    {
        title: 'Medication Tracker',
        started: '2024-11-12',
        info: 'This medication tracker UI was developed for a lab course on the Evaluation of User Interfaces. It was created with Flutter and features built in support for an A/B-Testing experiment.',
        repo: 'https://github.com/paulwiese/medication-tracker',
        build: 'https://paulwiese.github.io/medication-tracker/build/web/',
    },
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

    if (project.build) {
        
        const buildDiv = document.createElement('div');
        buildDiv.classList.add('buildDiv');
        buildDiv.textContent = 'Build:\n';
        
        const build = document.createElement('a');
        build.href = project.build;
        build.classList.add('build');
        build.textContent = project.build;
        buildDiv.appendChild(build);

        p.appendChild(buildDiv);
    }

    projects_element.append(p)

})