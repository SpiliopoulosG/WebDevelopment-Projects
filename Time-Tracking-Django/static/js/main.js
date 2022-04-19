const times = document.querySelectorAll(".time p");

const daily = document.querySelectorAll(".container .container-header .daily");
const weekly = document.querySelectorAll(".container .container-header .weekly");
const monthly = document.querySelectorAll(".container .container-header .monthly");


    times[0].addEventListener('click', () => {

        for (let i = 0; i < daily.length; i++) {
            daily[i].classList.remove("passive");
            daily[i].classList.add("active");
            weekly[i].classList.add("passive");
            weekly[i].classList.remove("active");
            monthly[i].classList.add("passive");
            monthly[i].classList.remove("active");
        }

    })

    times[1].addEventListener('click', () => {

        for (let i = 0; i < daily.length; i++) {
            daily[i].classList.remove("active");
            daily[i].classList.add("passive");
            weekly[i].classList.add("active");
            weekly[i].classList.remove("passive");
            monthly[i].classList.add("passive");
            monthly[i].classList.remove("active");
        }

    })

    times[2].addEventListener('click', () => {

        for (let i = 0; i < daily.length; i++) {
            daily[i].classList.remove("active");
            daily[i].classList.add("passive");
            weekly[i].classList.add("passive");
            weekly[i].classList.remove("active");
            monthly[i].classList.add("active");
            monthly[i].classList.remove("passive");
        }

    })
