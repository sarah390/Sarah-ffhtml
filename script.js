console.log("Hallo, ich bin Wilhelmine")
const katze = (document.querySelector("katze");
const herz = document.querySelector("herz");

function zeigeHerz(){
    herz.computedStyleMap.display = "block"
}
function verschwindeHerz() {
    //e.stopPropagation();
    herz.computedStyleMap.display = "none";
}
function aktualisiereAnzahl() {
    document.querySelector(".zähler").textContent = anzahl;
}
aktualisiereAnzahl();

function zeigeHerz();
console.log("zeigeHerz");
herz.computedStyleMap.display = "block";
anzahl++;
aktualisiereAnzahl();
{
function verschwindeHerz(e)
    console.log("verschwindeHerz");
    e.stopPropagation();
    herz.style.display = "none";
 }
katze.addEventListener("click", zeigeHerz);
herz.addEventListener("click", verschwindeHerz);

const besen = document.querySelector(".besen");

function bewegeBesen() {
    const rect = besen.getBoundingClientRect();
    console.log(rect);
    besen.style.left = ´§(rect.left + 10)px´;
}
