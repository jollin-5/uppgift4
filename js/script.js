// Väntar tills hela HTML-dokumentet är laddat
document.addEventListener("DOMContentLoaded", function () {

    // Hämtar sökfältet
    const searchInput = document.getElementById("searchInput");

    // Hämtar listan där resultaten ska visas
    const resultList = document.getElementById("resultList");

    // Array med alla sidor som går att söka
    const pages = [
        { name: "Startsida", url: "index.html" },
        { name: "Spelare", url: "spelare.html" },
        { name: "Lag", url: "lag.html" },
        { name: "Statistik", url: "statistik.html" },
        { name: "Sök", url: "sok.html" },
        { name: "Om webbplatsen", url: "om.html" }
    ];

    // Säkerhetskontroll så att elementen finns
    if (searchInput && resultList) {

        // När användaren skriver i sökfältet
        searchInput.addEventListener("keyup", function () {

            // Gör söktexten till små bokstäver
            const searchTerm = searchInput.value.toLowerCase();

            // Rensar tidigare resultat
            resultList.innerHTML = "";

            // Om inget är skrivet, visa inget
            if (searchTerm.length === 0) return;

            // Loopar igenom alla sidor
            pages.forEach(function (page) {

                // Om sidans namn innehåller sökordet
                if (page.name.toLowerCase().includes(searchTerm)) {

                    // Skapar nytt listelement
                    const li = document.createElement("li");

                    // Skapar länk
                    const link = document.createElement("a");

                    // Sätter länkens adress
                    link.href = page.url;

                    // Sätter länkens text
                    link.textContent = page.name;

                    // Gör texten vit
                    link.style.color = "white";

                    // Lägger in länken i listan
                    li.appendChild(link);

                    // Lägger till listan i HTML
                    resultList.appendChild(li);
                }
            });
        });
    }
});

