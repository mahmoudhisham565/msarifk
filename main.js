// localStorage.clear()
let mainColor = localStorage.getItem('darckMode');
if(mainColor !== null) {
    document.documentElement.style.setProperty('--main-color',mainColor)
}
let loading = document.querySelector('.loading');
let main = document.querySelector('.main');
let logoText = document.querySelector('.logo-text');

setInterval(function() {
    logoText.innerHTML += '.'
}, 1000)

setTimeout(function() {
    loading.style.top = '-1020px'
    main.style.display = 'block'
}, 3000)
// ==================================================
let sittings = document.querySelector('.sittings');
let sittingsBtn = document.querySelector('#sittingsBtn');
let closeBtn = document.querySelector('.closeBtn');
sittingsBtn.onclick = function() {
    sittings.classList.toggle('open')
}
closeBtn.onclick = function() {
    sittings.classList.toggle('open')
}
// ==================================================
let yes = document.querySelector('.yes');
let no = document.querySelector('.no');
yes.onclick = function() {
    document.documentElement.style.setProperty('--main-color','black')
    window.localStorage.setItem('darckMode', 'black')
}
no.onclick = function() {
    document.documentElement.style.setProperty('--main-color','white')
    window.localStorage.setItem('darckMode', 'white')
}
// ==================================================
let info = document.querySelector('.info');
let x = document.querySelector('.x');
let know = document.querySelector('.know');
know.onclick = function() {
    info.style.display = 'block'
}
x.onclick = function() {
    info.style.display = 'none'
}
// ==================================================
let openAdd = document.querySelector('#openadd');
let add = document.querySelector('.add');
let xadd = document.querySelector('.xadd');
openAdd.onclick = function() {
    add.classList.toggle('openit');
}
xadd.onclick = function() {
    add.classList.toggle('openit');
}
// ==================================================
let tqarirBtn = document.getElementById('tqarirBtn')
let tqarirDiv = document.querySelector('.tqarirDiv')
let xButton = document.querySelector('.xbutton')
tqarirBtn.onclick = function() {
    tqarirDiv.classList.toggle('openn')
}
xButton.onclick = function() {
    tqarirDiv.classList.toggle('openn')
}
// ==================================================
let ratibsapn = document.getElementById('ratibsapn');
let ratib = document.getElementById('ratib');
let hsala = document.getElementById('hsala');
let hsalaspan = document.getElementById('hsalaspan');
let submit = document.querySelector('#submit');
submit.onclick = function() {
    ratibsapn.innerHTML = ratib.value
    ratib.value = ''
    hsalaspan.innerHTML = hsala.value
    hsala.value = ''
    ratibsapn.innerHTML = +ratibsapn.innerHTML - + hsalaspan.innerHTML
    localStorage.setItem('ratib', ratibsapn.innerHTML)
    localStorage.setItem('hsala', hsalaspan.innerHTML)
}
ratibsapn.innerHTML = localStorage.getItem('ratib')
hsalaspan.innerHTML = localStorage.getItem('hsala')
// ==================================================
let car = document.getElementById('car');
let eat = document.getElementById('eat');
let lists = document.getElementById('lists');
let dafaa = document.getElementById('dafaa');
dafaa.onclick = function() {
    ratibsapn.innerHTML = +ratibsapn.innerHTML - +car.value - +eat.value - +lists.value 
    car.value = ''
    eat.value = ''
    lists.value = ''
    localStorage.setItem('ratib', ratibsapn.innerHTML)
}
ratibsapn.innerHTML = localStorage.getItem('ratib')
// ==================================================
let msarifAdafi = document.getElementById('msarifAdafi');
let hintInbut = document.getElementById('hintInbut');
let msarifBtn = document.getElementById('msarifBtn');
let hintDiv = document.querySelector('.hintDiv');
let hintArray = [];
if (localStorage.getItem('hint')) {
    hintArray = JSON.parse(localStorage.getItem('hint'))
}
getHintFromLocalstorage()
msarifBtn.onclick = function() {
    if(msarifAdafi.value !== "") {
        addHintToArray(msarifAdafi.value);
        ratibsapn.innerHTML = ratibsapn.innerHTML - hintInbut.value
        msarifAdafi.value = "";
        hintInbut.value = "";
    }
}
hintDiv.addEventListener("click", (e) => {
    if(e.target.classList.contains('del')) {
        deleteTaskWithId(e.target.parentElement.getAttribute('data-id'))
        e.target.parentElement.remove()
    }
})
function addHintToArray(hintText){
    let hint = {
        id: Date.now(),
        title: hintText,
        number: hintInbut.value,
    }
    hintArray.push(hint);
    addElementsToPage(hintArray);
    addTasksToLocalstorage(hintArray);
}
function addElementsToPage(hintArray) {
    hintDiv.innerHTML = ""
    hintArray.forEach((hint) => {
        let div = document.createElement('div');
        div.className = 'hitBox';
        div.setAttribute("data-id", hint.id)
        div.appendChild(document.createTextNode(hint.title))
        let span = document.createElement('span')
        span.className = 'del'
        span.appendChild(document.createTextNode('حذف'))
        let spanTwo = document.createElement('span');
        spanTwo.className = 'number';
        spanTwo.appendChild(document.createTextNode(hint.number))
        div.appendChild(spanTwo)
        div.appendChild(span)
        hintDiv.appendChild(div)
    });
}
function addTasksToLocalstorage(hintArray) {
    window.localStorage.setItem('hint', JSON.stringify(hintArray));
}
function getHintFromLocalstorage() {
    let data = window.localStorage.getItem('hint')
    if(data) {
        let hints = JSON.parse(data)
        addElementsToPage(hints)
    }
}
function deleteTaskWithId(hintId) {
    hintArray = hintArray.filter((hint) => hint.id != hintId)
    addTasksToLocalstorage(hintArray)
}
// ==================================================
let newBtn = document.querySelector('.new');
newBtn.onclick = function() {
    localStorage.removeItem('ratib');
    ratibsapn.innerHTML = '0'
    localStorage.removeItem('hsala');
    hsalaspan.innerHTML = '0'
}
