// Väntar tills hela HTML-dokumentet är laddat
document.addEventListener("DOMContentLoaded", function () {

    // Hämtar sökfältet
    const searchInput = document.getElementById("searchInput");

    // Hämtar listan där resultaten ska visas
    const resultList = document.getElementById("resultList");

    // Lista över alla sidor som kan sökas
    const pages = [
        { name: "Startsida", url: "index.html" },
        { name: "Spelare", url: "spelare.html" },
        { name: "Lag", url: "lag.html" },
        { name: "Statistik", url: "statistik.html" },
        { name: "Sök", url: "sok.html" },
        { name: "Om webbplatsen", url: "om.html" }
    ];

    // Säkerhetskontroll så att koden bara körs om elementen finns
    if (searchInput && resultList) {

        // När användaren skriver i sökfältet
        searchInput.addEventListener("keyup", function () {

            // Gör texten till små bokstäver
            const searchTerm = searchInput.value.toLowerCase();

            // Töm tidigare resultat
            resultList.innerHTML = "";

            // Om inget skrivits – visa inget
            if (searchTerm.length === 0) return;

            // Går igenom varje sida
            pages.forEach(function (page) {

                // Om sidnamnet matchar sökningen
                if (page.name.toLowerCase().includes(searchTerm)) {

                    // Skapar nytt listelement
                    const li = document.createElement("li");

                    // Skapar länk
                    const link = document.createElement("a");

                    // Sätter länkens adress
                    link.href = page.url;

                    // Sätter text
                    link.textContent = page.name;

                    // Gör länken vit
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
