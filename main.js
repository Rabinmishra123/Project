
function scrollToSection(){
    document.getElementById("destinations")
    .scrollIntoView({behavior:"smooth"});
}
document
.getElementById("contactForm")
.addEventListener("submit",(e)=>
    {

e.preventDefault();

 alert(
"Thank you! Your message has been submitted."
);
});




