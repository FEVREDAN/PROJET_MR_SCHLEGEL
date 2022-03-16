const IdeeActivite = document.querySelector('#IdeeActivite')
const LesPlusPopulaires = document.querySelector('#LesPlusPopulaires')
const LesEvenementsAvenir = document.querySelector('#LesEvenementsAvenir')
const select = document.querySelector('.select')


select.addEventListener('change', () => {
   var value = select.value
   switch (value) {
      case "IdeeActivite":
         // console.log(value)
         IdeeActivite.style.display ="flex"
         LesPlusPopulaires.style.display ="none"
         LesEvenementsAvenir.style.display ="none"
         break;
      case "LesPlusPopulaires":
         // console.log(value)
         IdeeActivite.style.display ="none"
         LesPlusPopulaires.style.display ="flex"
         LesEvenementsAvenir.style.display ="none"
         break;
      case "LesEvenementsAvenir":
         // console.log(value)
         IdeeActivite.style.display ="none"
         LesPlusPopulaires.style.display ="none"
         LesEvenementsAvenir.style.display ="flex"
         break;
      default:
         // console.log("default")
         IdeeActivite.style.display ="flex"
         LesPlusPopulaires.style.display ="flex"
         LesEvenementsAvenir.style.display ="flex"
         break;
   }
})

const eleImage = document.querySelectorAll('.eleImage')
console.log(eleImage)

eleImage.forEach(element => { element.addEventListener('click', (e) => {
console.log(e.target.parentNode.innerHTML) 
   // if (e.target.parentNode )
})
   
});






















// IdeeActivite.style.display ="none"







/*const btn = document.querySelector('#btn')
const img = document.getElementById('img')

btn.addEventListener('click', () => {
   img.classList.toggle('show')
})
  
const btn2 = document.querySelector('#btn2')
const img2 = document.getElementById('img2')

btn2.addEventListener('click', () => {
   img2.classList.toggle('show')
})
export function URL_CONDITION() {
   if (GetUrlClassParam === "Idée d'activité") {
     URL_GET_IDEE();
   } else if (GetUrlClassParam === "Les plus populaires") {
     URL_GET_POPULAIRE();
   } else if (GetUrlClassParam === "Les événements à venir") {
     URL_GET_A_VENIR();
   }
}
 
export function URL_GET_IDEE() {
   document.querySelector("title").innerHTML = "Idée d'activité";
}
const myParam = urlParams.get('var');

const ballon = data.find(x => x._id === myParam)
*/
