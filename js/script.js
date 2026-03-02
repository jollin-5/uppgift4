document.addEventListener("DOMContentLoaded", function () {

    const searchInput = document.getElementById("searchInput");
    const resultList = document.getElementById("resultList");

    if (searchInput && resultList) {

        const data = [
            "Connor McDavid",
            "Toronto Maple Leafs",
            "Boston Bruins"
        ];

        searchInput.addEventListener("keyup", function () {

            const searchTerm = searchInput.value.toLowerCase();
            resultList.innerHTML = "";

            data.forEach(function (item) {

                if (item.toLowerCase().includes(searchTerm)) {
                    const li = document.createElement("li");
                    li.textContent = item;
                    resultList.appendChild(li);
                }

            });

        });
    }

});
