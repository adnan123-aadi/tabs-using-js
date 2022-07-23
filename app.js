const tabs=document.querySelector(".tabs");
const tab_header=document.querySelector(".tab-header");
const tab_body=document.querySelector(".tab-body");
const tab_indicator=document.querySelector(".tab-indicator");

const tabHeaderNodes=document.querySelectorAll(".tab-header > div")
const tabBodyNodes=document.querySelectorAll(".tab-body > div")

for(let i=0;i<tabHeaderNodes.length;i++){
    tabHeaderNodes[i].addEventListener("click",function(){
        tab_header.querySelector(".active").classList.remove("active");
        tabHeaderNodes[i].classList.add("active");
        tab_body.querySelector(".active").classList.remove("active");
        tabBodyNodes[i].classList.add("active");
        tab_indicator.style.left=`calc(calc(calc(25% - 5px) * ${i}) + 10px)`;
})
}