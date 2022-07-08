// 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
const nav = document.querySelector(".navigation")
const toggle = document.querySelector(".nav-toggle")
console.log(nav)
console.log(toggle)
toggle.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible");
    console
    if(visibility === "false"){
        nav.setAttribute("data-visible", "true");
    }
    else{
        nav.setAttribute("data-visible", "false");
    }
})