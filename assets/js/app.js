function openNav() {
        document.getElementById("navBar").classList.toggle("start-0");
        document.body.classList.toggle("overflow-hidden");
        document.querySelector(".menu").classList.toggle("cross")
        document.querySelector(".nav-bg").classList.toggle("backflt")
    }
    
    function removeoverflow(){
        document.getElementById("navBar").classList.toggle("start-0");
        document.body.classList.remove("overflow-hidden");
        document.querySelector(".menu").classList.toggle("cross")
        document.querySelector(".nav-bg").classList.toggle("backflt") 
        document.body.classList.remove("overflow-hidden") 
    }


const accordionItemHeaders = document.querySelectorAll(".accordion-item-header");

accordionItemHeaders.forEach(accordionItemHeader => {
    accordionItemHeader.addEventListener("click", event => {
        accordionItemHeader.classList.toggle("active");
        accordionItemHeader.classList.replace('icon', 'minus');
        const accordionItemBody = accordionItemHeader.nextElementSibling;
        if (accordionItemHeader.classList.contains("active")) {
            accordionItemHeader.classList.replace('minus', 'icon');
            accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
        }
        else {
            accordionItemBody.style.maxHeight = 0;
        }
    });
});

const defaultAccordionItemHeader2 = document.querySelector(".accordion-item-header-2");
if (defaultAccordionItemHeader2) {
    defaultAccordionItemHeader2.click();
}

const preloader = document.getElementById("preloader");
setTimeout(() => {
    document.getElementById("preloader").classList.add("d_none")
    document.body.classList.remove("overflow-hidden")

}, 5000);

let backToTop = document.getElementById('backtotop')
backToTop.addEventListener("click", function () {
    window.scrollTo(0, 0);
});
window.addEventListener('scroll', function () {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});






