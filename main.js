// main.js
// Detta är huvudskriptet som knyter ihop allt.

import { getApiKey, getBodies } from './api.js';
import { renderPlanets } from './ui.js';

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

    const planets = bodies.filter(body => body.type === 'planet');

    renderPlanets(planets);
};

document.addEventListener('DOMContentLoaded', init); // Säkerställer att DOM är laddad innan init körs
