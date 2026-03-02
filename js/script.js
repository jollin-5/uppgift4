// Väntar tills hela HTML-dokumentet är laddat
document.addEventListener("DOMContentLoaded", function () {

    // Data som går att söka
    const data = [
        { name: "Nikita Kucherov", url: "spelare.html" },
        { name: "Nathan MacKinnon", url: "spelare.html" },
        { name: "Connor McDavid", url: "spelare.html" },
        { name: "New York Rangers", url: "lag.html" },
        { name: "Dallas Stars", url: "lag.html" },
        { name: "Boston Bruins", url: "lag.html" }
    ];

    // Hämtar inputfältet
    const searchInput = document.getElementById("searchInput");

    // Hämtar listan där resultat ska visas
    const resultList = document.getElementById("resultList");

    // Kontroll så att sökfält finns på sidan
    if (searchInput) {

        // När användaren skriver
        searchInput.addEventListener("keyup", function () {

            const searchTerm = searchInput.value.toLowerCase();
            resultList.innerHTML = "";

            // Loopar igenom data
            data.forEach(item => {

                // Om text matchar
                if (item.name.toLowerCase().includes(searchTerm)) {

                    const li = document.createElement("li");
                    const link = document.createElement("a");

                    link.href = item.url;
                    link.textContent = item.name;
                    link.style.color = "white";

                    li.appendChild(link);
                    resultList.appendChild(li);
                }
            });
        });
    }

});

