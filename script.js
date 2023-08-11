ptsHome = document.getElementById("pts-home")
sumHome = 0
ptsGuest = document.getElementById("pts-guest")
sumGuest = 0

function add1Home() {
    sumHome++
    ptsHome.textContent = sumHome
}

function add2Home() {
    sumHome += 2
    ptsHome.textContent = sumHome
}

function add3Home() {
    sumHome +=3
    ptsHome.textContent = sumHome
}

function add1Guest() {
    sumGuest++
    ptsGuest.textContent = sumGuest
}

function add2Guest() {
    sumGuest += 2
    ptsGuest.textContent = sumGuest
}

function add3Guest() {
    sumGuest +=3
    ptsGuest.textContent = sumGuest
}