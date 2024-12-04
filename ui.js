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
            <h2>${body.name}</h2>
            <h3>${body.latinName}</h3>
            <p>${body.desc}</p>
            <ul>
                <li><strong>Typ:</strong> ${body.type}</li>
                <li><strong>Rotation:</strong> ${body.rotation}</li>
                <li><strong>Omkrets:</strong> ${body.circumference} km</li>
                <li><strong>Temperatur:</strong> Dag ${body.temp.day}°C, Natt ${body.temp.night}°C</li>
                <li><strong>Avstånd från solen:</strong> ${body.distance} km</li>
                <li><strong>Orbital period:</strong> ${body.orbitalPeriod} jorddygn</li>
                <li><strong>Månar:</strong> ${body.moons.length > 0 ? body.moons.join(', ') : 'Inga'}</li>
            </ul>
            <button class="close-overlay">Stäng</button>
        </div>
    `;

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
};

