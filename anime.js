const params = new URLSearchParams(window.location.search);
const id = params.get("id");

async function loadAnime(){
const res = await fetch(`https://shikimori.one/api/animes/${id}`);
const anime = await res.json();

document.getElementById("title").innerText = anime.russian || anime.name;
document.getElementById("desc").innerText = anime.description;

document.getElementById("poster").src =
"https://shikimori.one"+anime.image.original;

const title = encodeURIComponent(anime.name);

document.getElementById("player").src =
`https://kodik.info/search?title=${title}&types=anime-serial,anime`;
}

loadAnime();
