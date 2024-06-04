    
let filters = document.querySelectorAll(".buttons .btn")
let images = document.querySelectorAll(".gallery .row .col-12")

filters.forEach((but) =>{
    but.addEventListener("click" , (e) => {
        filters.forEach((butt) =>{
            butt.classList.remove("red-btn")
        })
        e.target.classList.add("red-btn")
        images.forEach((img) =>{
            img.style.display = "none"
        })
        document.querySelectorAll(e.target.dataset.names).forEach((bo) =>{
            bo.style.display = "block"
        })
    })
})