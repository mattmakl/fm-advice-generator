const slipId = document.querySelector(".advice-num")
const slipAdvice = document.querySelector(".advice-body")
const adviceBtn = document.getElementById("get-advice")

const fetchAdvice = () => {
    adviceBtn.classList.add("waiting")
    fetch("https://api.adviceslip.com/advice")
        .then(res => res.json())
        .then(data => {
            slipId.textContent = `advice #${data.slip.id}`
            slipAdvice.textContent = `“${data.slip.advice}”`
            adviceBtn.classList.remove("waiting")
        })
}

adviceBtn.addEventListener('click',fetchAdvice)