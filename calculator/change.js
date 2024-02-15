let input=document.getElementById('InputBox');
let buttons= document.querySelectorAll('button');

let string="";
let arr1=Array.from(buttons);
arr1.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string=eval(string);
            input.value=string;
        }

        else if(e.target.innerHTML=='C'){
            string="";
            input.value=string;
        }

        else if(e.target.innerHTML=='←'){
            string=string.substring(0, string.length-1);
            input.value=string;
        }

        else if(e.target.innerHTML=='^2'){
            string=string*string;
            input.value=string;
        }
        else{
            string +=e.target.innerHTML;
            input.value=string;
        }
    })
})