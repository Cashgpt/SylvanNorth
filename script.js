document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('show');
});

// Simulated Dynamic Projects
document.addEventListener('DOMContentLoaded', function() {
    const projects = [
        { title: "Reforesting Northern Ontario", description: "A 500-acre reforestation project." },
        { title: "Carbon Offset Partnership", description: "Collaborating with businesses to offset emissions." },
        { title: "Wildlife Conservation Initiative", description: "Planting native species to support biodiversity." }
    ];

    const container = document.getElementById('project-container');
    projects.forEach(proj => {
        let div = document.createElement('div');
        div.classList.add('project');
        div.innerHTML = `<h3>${proj.title}</h3><p>${proj.description}</p>`;
        container.appendChild(div);
    });
});
