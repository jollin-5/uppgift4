document.addEventListener("DOMContentLoaded", function () {

    const data = [
        { name: "Nikita Kucherov", url: "spelare.html" },
        { name: "Nathan MacKinnon", url: "spelare.html" },
        { name: "Connor McDavid", url: "spelare.html" },
        { name: "New York Rangers", url: "lag.html" },
        { name: "Dallas Stars", url: "lag.html" },
        { name: "Boston Bruins", url: "lag.html" }
    ];

    const searchInput = document.getElementById("searchInput");
    const resultList = document.getElementById("resultList");

    if (searchInput && resultList) {

        searchInput.addEventListener("keyup", function () {

            const searchTerm = searchInput.value.toLowerCase();
            resultList.innerHTML = "";

            data.forEach(function (item) {

                if (item.name.toLowerCase().includes(searchTerm)) {

                    const li = document.createElement("li");
                    const link = document.createElement("a");

                    link.href = item.url;
                    link.textContent = item.name;

                    li.appendChild(link);
                    resultList.appendChild(li);
                }
            });
        });
    }
});

});


