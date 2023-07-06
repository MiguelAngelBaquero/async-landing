const url = "https://latest-anime-api.p.rapidapi.com/anime";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "add3b49fc7msh0eea2a6352728d3p198b7bjsn62c390923844",
    "X-RapidAPI-Host": "latest-anime-api.p.rapidapi.com",
  },
};
const now = null || document.getElementById("now");

async function fetchData(url) {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const episodes = await fetchData(url);
    let viewNow = `
      ${episodes.map(
        (episode) => `
        <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none"
          >
            <img src="${episode.img_url}" alt="${episode.anime_id}" class="w-full" />
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${episode.name}
            </h3>
          </div>
        </div>
      `
      )}
    `;
    now.innerHTML = viewNow;
  } catch (error) {
    console.error(error);
  }
})();
