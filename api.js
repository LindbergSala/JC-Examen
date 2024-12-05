// api.js
// Denna modul hanterar alla API-relaterade funktioner.

const API_BASE_URL = 'https://n5n3eiyjb0.execute-api.eu-north-1.amazonaws.com';

export const getApiKey = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/keys`, {
            method: 'POST'
        });
        if (!response.ok) {
            throw new Error('Failed to fetch API key');
        }
        const data = await response.json();
        console.log('API Key:', data.key);
        return data.key;
    } catch (error) {
        console.error('Error fetching API key:', error);
    }
};

export const getBodies = async (apiKey) => {
    try {
        const response = await fetch(`${API_BASE_URL}/bodies`, {
            method: 'GET',
            headers: {
                'x-zocom': apiKey
            }
        });
        if (!response.ok) {
            throw new Error('Failed to fetch celestial bodies');
        }
        const data = await response.json();
        console.log('Celestial Bodies:', data.bodies);
        return data.bodies;
    } catch (error) {
        console.error('Error fetching celestial bodies:', error);
    }
};
