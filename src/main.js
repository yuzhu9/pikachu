import string from './css.js'

let n = 0
let time = 30
let id

const demo = document.querySelector('#demo')
const cssText = document.querySelector('#cssText')
const btnPlay = document.querySelector('#btnPlay')
const btnPause = document.querySelector('#btnPause')
const btnFast = document.querySelector('#btnFast')
const btnNormal = document.querySelector('#btnNormal')
const btnSlow = document.querySelector('#btnSlow')

const paint = () => {
    n += 1
    if (n > string.length) {
        window.clearInterval(id)
        return
    }
    demo.innerHTML = string.substr(0, n)
    cssText.innerText = string.substr(0, n)
    cssText.scrollTop = cssText.scrollHeight
}
const play = () => {
    return id = setInterval(paint, time)
}
const pause = () => {
    window.clearInterval(id)
}


btnPlay.onclick = () => {
    pause()
    play()
}
btnPause.onclick = () => {
    pause()
}
btnFast.onclick = () => {
    pause()
    time = 0
    play()
}
btnNormal.onclick = () => {
    pause()
    time = 30
    play()
}
btnSlow.onclick = () => {
    pause()
    time = 200
    play()
}
play()