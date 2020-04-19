function animatedForm(){
    const arrows = document.querySelectorAll(".fa-arrow-down")
    arrows.forEach(arrow=>{
 arrow.addEventListener("click",()=>{
     const input = arrow.previousElementSibling;
     const parent = arrow.parentElement;
     const nextForm = parent.nextElementSibling;
        //check for validation
        if(input.type === "text" && validateUser(input)){
            nextSlide(parent,nextForm);
            
        }else if(input.type === "email" && validateEmail(input)){
            nextSlide(parent,nextForm);
        } else if(input.type === "password" && validateUser(input)){
            nextSlide(parent,nextForm);
        }
 });
    });
}

function validateUser(user){
    if(user.value.length < 6){
        console.log("Not Enough Charcters");
        error("radial-gradient(rgb(132, 102, 140),rgb(92, 109, 100))) ");
    }else{
        error("rgb(87,189,130 )");
        return true;
    }
}
function validateEmail(email){
    const validate =/^[^\s@]+@[^\s@]+\.[^s@]+$/;
    error("radial-gradient(rgb(132, 102, 140),rgb(92, 109, 100))) ");
    if (validate.test(email.value)){
        return true;

    }else{
        error("rgb(87,189,130 )");
    }

}


function error(color){
    document.body.style.backgroundImage = Image;


}
function nextSlide(parent,nextForm){
parent.classList.add('inactive');
parent.classList.remove('active');
nextForm.classList.add('active');
}
animatedForm()