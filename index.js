let homeCount = document.getElementById("home-count")
let guestCount = document.getElementById("guest-count")
let countHome = 0
let countGuest = 0

function homeOne() {
    homeCount.textContent = countHome += 1
    
}

function homeTwo() {
    homeCount.textContent = countHome += 2
    
}

function homeThree() {
    homeCount.textContent = countHome += 3
    
}

function guestOne() {
    guestCount.textContent = countGuest += 1
    
}

function guestTwo() {
    guestCount.textContent = countGuest += 2
    
}

function guestThree() {
    guestCount.textContent = countGuest += 3
    
}

function newMatch() {
    homeCount.textContent =  countHome = 0
    guestCount.textContent = countGuest = 0
}