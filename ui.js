// ui.js
// Denna modul hanterar UI-manipulation och event-lyssnare.

export const renderCelestialBodies = (bodies) => {
    const nameToClassName = {
        'Sun': 'Solen',
        'Mercury': 'Merkurius',
        'Venus': 'Venus',
        'Earth': 'Jorden',
        'Mars': 'Mars',
        'Jupiter': 'Jupiter',
        'Saturn': 'Saturnus',
        'Uranus': 'Uranus',
        'Neptune': 'Neptunus'
    };

    bodies.forEach(body => {
        const className = nameToClassName[body.name] || body.name;
        const celestialElement = document.querySelector(`.${className}`);
        if (celestialElement) {
            celestialElement.addEventListener('click', () => {
                showOverlay(body);
            });
        } else {
            console.warn(`Ingen HTML-element hittades för ${body.name}`);
        }
    });
};

export const showOverlay = (body) => {
    let overlay = document.querySelector('.overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.classList.add('overlay');
        document.body.appendChild(overlay);
    }

    overlay.innerHTML = `
    <div class="overlay-content">
        <h1>${body.name.toUpperCase()}</h1>
        <h2>${body.latinName}</h2>
        <p>${body.desc}</p>
        <hr class="divider"> <!-- Första linjen -->
        <div class="info-grid">
            <div><strong>Omkrets:</strong> ${body.circumference} km</div>
            <div><strong>Km från solen:</strong> ${body.distance} km</div>
            <div><strong>Max temperatur:</strong> ${body.temp.day}°C</div>
            <div><strong>Min temperatur:</strong> ${body.temp.night}°C</div>
        </div>
        <hr class="divider"> <!-- Andra linjen -->
        <div><strong>Månar:</strong> ${body.moons.length > 0 ? body.moons.join(', ') : 'Inga'}</div>
        <button class="close-overlay">Stäng</button>
    </div>
`;


    const infoText = document.querySelector('.info-text');
    if (infoText) {
        infoText.style.display = 'none';
    }

    const planets = document.querySelectorAll('.planet-row > article');
    planets.forEach(planet => {
        if (!planet.classList.contains('Solen')) {
            planet.style.display = 'none';
        }
    });

    const sunElement = document.querySelector('.Solen');
    if (sunElement) {
        sunElement.style.backgroundColor = '#428ED4';
        sunElement.style.boxShadow = '0px 0px 250px rgba(66, 142, 212, 0.5)';
    }

    overlay.addEventListener('click', (event) => {
        if (event.target === overlay || event.target.classList.contains('close-overlay')) {
            hideOverlay();
        }
    });

    overlay.style.display = 'flex';
};



export const hideOverlay = () => {
    const overlay = document.querySelector('.overlay');
    if (overlay) {
        overlay.style.display = 'none';
    }

    const planets = document.querySelectorAll('.planet-row > article');
    planets.forEach(planet => {
        planet.style.display = 'block';
    });

    const sunElement = document.querySelector('.Solen');
    if (sunElement) {
        sunElement.style.backgroundColor = '#FFD029';
        sunElement.style.boxShadow = '0px 0px 250px rgba(237, 187, 5, 0.2)';
    }

    const infoText = document.querySelector('.info-text');
    if (infoText) {
        infoText.style.display = 'flex';
    }
};


