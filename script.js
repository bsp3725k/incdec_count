let count = 0;
const paraval = document.getElementById("countDisplay");

let errormsg = document.querySelector(".error-message");


let sub = document.getElementById("dec");
sub.addEventListener("click", () => {
    if(count>1){
        count--;
        paraval.textContent = count;
        click.style.display='block';
    }
    else{
        count = 0;
        paraval.textContent = count;
        errormsg.style.display = 'block';
        click.style.display='none';
        sub.setAttribute("disabled", "true");
        sub.style.backgroundColor='#DEF4FC';
    }
});


let add = document.getElementById("inc");
add.addEventListener("click", () => {
    count++;
    paraval.textContent = count;
    errormsg.style.display = 'none';
    click.style.display='block';
    sub.removeAttribute("disabled");
    sub.style.backgroundColor='white';
})

const click = document.getElementById("clr");
click.addEventListener("click", () => {
        count = count * 0;
        paraval.textContent = count;
        errormsg.style.display = 'block';
        sub.style.backgroundColor='#DEF4FC';
        click.style.display='none';
        
})
