const API = "https://shikimori.one/api/animes";

async function loadAnime(search="order=popularity&limit=40"){
const res = await fetch(`${API}?${search}`);
const data = await res.json();

const grid = document.getElementById("anime-grid");
grid.innerHTML = "";

data.forEach(anime=>{
const card = document.createElement("div");
card.className="card";

const image = "https://shikimori.one"+anime.image.original;

card.innerHTML = `
<img src="${image}">
<p>${anime.russian || anime.name}</p>
`;

card.onclick=()=>{
window.location=`anime.html?id=${anime.id}`;
};

grid.appendChild(card);
});
}

document.getElementById("search").addEventListener("input",(e)=>{
if(e.target.value.length>2){
loadAnime(`search=${e.target.value}`);
}else{
loadAnime();
}
});

loadAnime();
