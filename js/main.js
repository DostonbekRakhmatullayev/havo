let elForm = document.querySelector(".js-form")
let elInput = document.querySelector(".js-input")
let elList = document.querySelector(".js-list")

function getHours1(format,) {
  let date = new Date(format);
  return `Qiyosh chiqish${String(date.getHours()).padStart(2, "0")}:${date.getMinutes()}`;
}

function getHours(format,) {
  let date = new Date(format);
  return `Qiyosh botishi${String(date.getHours()).padStart(2, "0")}:${date.getMinutes()}}`;
} 

function getDate(format,) {
  let date = new Date(format);
  return `Kun ${String(date.getDate() + 1).padStart(2, "0")}`;
}

console.log(getDate(1658402147));
function theAir(arr, node) {
  [arr].forEach(e => {

    let newItim = document.createElement("li")
    let newTetle = document.createElement("h3")
    let newDavlat = document.createElement("div")
    let newhavo = document.createElement("div")
    let newKun = document.createElement("div")
    let newStrong = document.createElement("strong")
    let newStrong1 = document.createElement("strong")
    let newText = document.createElement("p")
    let newText1 = document.createElement("p")
    let newTime = document.createElement("time")
    let newTimeBox = document.createElement("div")
    let newHours1 = document.createElement("time")
    let newHours = document.createElement("time")

    newTime.textContent = getDate(e.dt)
    newTetle.textContent = e.name
    newStrong.textContent = `${e.main.temp_max}C`
    newStrong1.textContent = e.sys.country
    newText.textContent = e.weather[0].description

    newHours1.textContent = getHours1(e.sys.sunrise)
    newHours.textContent = getHours1(e.sys.sunset)
    newTimeBox.setAttribute("class", "time__box")
    newTime.setAttribute("class", "time")
    newDavlat.setAttribute("class", "davlat")
    newKun.setAttribute("class", "kun")
    newhavo.setAttribute("class", "havo")
    newTetle.setAttribute("class", "title")
    newStrong1.setAttribute("class", "davlatlar")
    newStrong.setAttribute("class", "harorat")

    // if (200 < e.weather[0].id && e.weather[0].id < 299) {
    //   newText1.textContent = "Moma qaldiroq"
    // }
    // if (299 < e.weather[0].id && e.weather[0].id < 399) {
    //   newText1.textContent = "Mayda yomg'ir"
    // }
    // if (399 < e.weather[0].id && e.weather[0].id < 599) {
    //   newText1.textContent = "Yomg'ir"
    // }
    // if (599 < e.weather[0].id && e.weather[0].id < 699) {
    //   newText1.textContent = "Qor"
    // }
    // if (699 < e.weather[0].id && e.weather[0].id < 799) {
    //   newText1.textContent = "Tuman"
    // }
    // if (e.weather[0].id && e.weather[0].id == 800) {
    //   newText1.textContent = "Ochiq osmon"
    // }
    // if (800 < e.weather[0].id && e.weather[0].id < 805) {
    //   newText1.textContent = "Bulutli xovo"
    // }

    newDavlat.appendChild(newTetle)
    newDavlat.appendChild(newStrong1)     
    newItim.appendChild(newDavlat)
    newItim.appendChild(newStrong)
    newhavo.appendChild(newText1)
    newhavo.appendChild(newText)
    newItim.appendChild(newhavo)
    newTimeBox.appendChild(newHours1)
    newTimeBox.appendChild(newHours)
    newKun.appendChild(newTime)
    newKun.appendChild(newTimeBox)
    newItim.appendChild(newKun)

    node.appendChild(newItim)
  })
}

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
  elInputVal = elInput.value.trim()
  getTheAir()
  elInput.value = ""
})


async function getTheAir() {
  let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${elInputVal}&appid=d7e0c21cccd15a5f478c11c35c0bfcc6&units=metric`)
  let data = await response.json()
  theAir(data, elList);
}
getTheAir()





