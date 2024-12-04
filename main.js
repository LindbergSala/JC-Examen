// main.js
// Detta är huvudskriptet som knyter ihop allt.

import { getApiKey, getBodies } from './api.js';
import { renderCelestialBodies } from './ui.js';

const init = async () => {
    const apiKey = await getApiKey();
    if (!apiKey) {
        console.error('Kunde inte hämta API-nyckel.');
        return;
    }

    const bodies = await getBodies(apiKey);
    if (!bodies) {
        console.error('Kunde inte hämta himlakroppar.');
        return;
    }

    const celestialBodies = bodies.filter(body => body.type === 'planet' || body.type === 'star');

    renderCelestialBodies(celestialBodies);
};

document.addEventListener('DOMContentLoaded', init);
