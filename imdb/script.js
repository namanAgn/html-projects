const apiKey = 'a8421a7e';

// Use event delegation for the search button
document.body.addEventListener('click', (e) => {
    if (e.target.classList.contains('search-button')) {
        searchShow();
    }
});

function searchShow() {
    const showName = document.querySelector('.search-input').value.trim();

    if (!showName) {
        alert('Please enter a show name.');
        return;
    }

    const resultsContainer = document.querySelector('.results-container');

    // ✅ Clear previous results but keep the search bar
    resultsContainer.innerHTML = '';

    // Fetch show data
    fetch(`https://www.omdbapi.com/?t=${showName}&apikey=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            if (data.Response === "True") {
                displayShow(data);

                const totalSeasons = parseInt(data.totalSeasons) || 1;
                fetchAllSeasonsOrdered(showName, totalSeasons);
            } else {
                alert('Show not found.');
            }
        })
        .catch(error => console.error('Error:', error));
}

function displayShow(data) {
    const director = data.Director ? `Director: ${data.Director}` : 
                     data.Writer ? `Writer: ${data.Writer}` : 
                     data.Creator ? `Creator: ${data.Creator}` : 'N/A';

    const resultsContainer = document.querySelector('.results-container');

    const showHTML = `
        <div class="show-details">
            <div class="poster">
                <img src="${data.Poster}" alt="${data.Title} poster" width="150" height=225">
            </div>
            <div>
                <h1>${data.Title}</h1>
                <p class="description">${data.Plot}</p>
                <p class="s-2 genre"><span class="span-info">Genre</span>: ${data.Genre}</p>
                <p class="s-2 overall"><span class="span-info">Rating</span>: ${data.imdbRating}</p>
                <p class="s-2 release"><span class="span-info">Release</span>: ${data.Year}</p>
            </div>
        </div>
    `;

    resultsContainer.innerHTML += showHTML;
}

function fetchAllSeasonsOrdered(showName, totalSeasons) {
    const resultsContainer = document.querySelector('.results-container');

    const seasonsContainer = document.createElement('div');
    seasonsContainer.classList.add('seasons');
    seasonsContainer.style.display = "grid";
    seasonsContainer.style.gridTemplateColumns = "repeat(auto-fill, minmax(300px, 1fr))";
    seasonsContainer.style.gap = "20px";

    resultsContainer.appendChild(seasonsContainer);

    const seasonPromises = [];

    for (let season = 1; season <= totalSeasons; season++) {
        const promise = fetch(`https://www.omdbapi.com/?t=${showName}&Season=${season}&apikey=${apiKey}`)
            .then(response => response.json())
            .then(data => ({ season, data }));
        seasonPromises.push(promise);
    }

    Promise.all(seasonPromises)
        .then(seasons => {
            seasons.sort((a, b) => a.season - b.season); // ✅ Ensures correct order

            seasons.forEach(({ data }) => {
                if (data.Response === "True") {
                    displaySeason(data, seasonsContainer);
                }
            });
        })
        .catch(error => console.error('Error fetching seasons:', error));
}

function displaySeason(seasonData, container) {
    const seasonDiv = document.createElement('div');
    seasonDiv.classList.add('season');
    seasonDiv.style.border = "none";
    seasonDiv.style.padding = "15px";
    seasonDiv.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
    seasonDiv.style.borderRadius = "10px";
    seasonDiv.style.background = "#222";

    const seasonTitle = document.createElement('h3');
    seasonTitle.textContent = `Season ${seasonData.Season}`;
    seasonDiv.appendChild(seasonTitle);

    const episodesTable = document.createElement('table');
    episodesTable.style.width = "100%";
    episodesTable.style.borderCollapse = "collapse";

    const headerRow = document.createElement('tr');
    headerRow.innerHTML = `
        <th style="text-align: left; padding: 10px;">Episode</th>
        <th style="text-align: left; padding: 10px;">Title</th>
        <th style="text-align: left; padding: 10px;">Rating</th>
    `;
    episodesTable.appendChild(headerRow);

    seasonData.Episodes.forEach((ep) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td style="padding: 10px;">EP${ep.Episode}</td>
            <td style="padding: 10px;">${ep.Title}</td>
            <td class="episode-r">${ep.imdbRating || 'N/A'}</td>
        `;
        episodesTable.appendChild(row);
    });

    seasonDiv.appendChild(episodesTable);
    container.appendChild(seasonDiv);
}
