Steg för steg plan

1. Ställ upp miljön

Skapa grundstrukturen för HTML, CSS och JS-filerna.
Lägg till en grund-HTML med head och body.
Länka in CSS och JS-filer.
2. Hämta API-nyckel

Anropa /keys med POST för att få en giltig API-nyckel.
Spara nyckeln i en variabel (ej hårdkodat).
3. Hämta data

Anropa /bodies med GET och skicka med x-zocom headern med din API-nyckel.
Spara ner resultatet (en array med planeter och stjärnor) i en variabel för vidare bearbetning.
4. Dynamisk rendering av planeter

Skapa en funktion för att generera HTML-element för varje himlakropp.
Visa namn och eventuellt typ (star/planet) i en översiktsvy enligt skiss.
5. Klickbar planetlista

Gör varje planet klickbar med en event listener.
När en planet klickas, hämta detaljerad info från samma datamängd.
6. Overlay för mer information

Skapa ett overlay (ex. en div med absolut positionering) för detaljerad info.
Visa ut latinName, rotation, circumference, temp, distance, orbitalPeriod, desc, moons i overlayen.
7. Stängningsfunktion för overlay

Lägg till en close-knapp i overlayen.
Vid klick, stäng overlayen och återgå till översiktsvy.
8. Layout & design enligt skiss

Justera CSS för att matcha den givna skissen.
Använd punktlistor och markera viktiga delar i CSS för att lätt hitta rätt element.
9. Kodstruktur och moduler

Dela upp koden i moduler.
Ex: en modul för API-hantering, en för UI-rendering, en för eventhantering.
Kommentera varför uppdelningen gjorts och vad varje modul ansvarar för.
10. Testa och validera

Kontrollera att inga felmeddelanden dyker upp i konsolen.
Säkerställ att all funktionalitet fungerar enligt kraven.
Justera variabelnamn, funktioner (använd arrow-functions) och se till att kriterierna för Godkänt och Väl godkänt är uppfyllda.