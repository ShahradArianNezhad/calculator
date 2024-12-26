let b0=document.querySelector('.b0')
let b1=document.querySelector('.b1')
let b2=document.querySelector('.b2')
let b3=document.querySelector('.b3')
let b4=document.querySelector('.b4')
let b5=document.querySelector('.b5')
let b6=document.querySelector('.b6')
let b7=document.querySelector('.b7')
let b8=document.querySelector('.b8')
let b9=document.querySelector('.b9')
let dot=document.querySelector(".dot")
let body = document.querySelector("body")
//
let AC=document.querySelector(".AC")
let plusminus=document.querySelector(".plusminus")
let remainder=document.querySelector(".remainder")
//
let output = document.querySelector(".output")
output.innerHTML = ''
let lastOp = document.querySelector(".lastOp")
//
let divide = document.querySelector(".division")
let multiply = document.querySelector(".multiply")
let minus = document.querySelector(".minus")
let plus = document.querySelector(".plus")
let equal = document.querySelector(".equal")
//
b0.addEventListener("click",()=>(addNumber('0')))
b1.addEventListener("click",()=>(addNumber('1')))
b2.addEventListener("click",()=>(addNumber('2')))
b3.addEventListener("click",()=>(addNumber('3')))
b4.addEventListener("click",()=>(addNumber('4')))
b5.addEventListener("click",()=>(addNumber('5')))
b6.addEventListener("click",()=>(addNumber('6')))
b7.addEventListener("click",()=>(addNumber('7')))
b8.addEventListener("click",()=>(addNumber('8')))
b9.addEventListener("click",()=>(addNumber('9')))
dot.addEventListener("click",()=>(addNumber('.')))
body.addEventListener("keypress",(event)=>{if(event.key==='9'){addNumber("9")}});
body.addEventListener("keypress",(event)=>{if(event.key==='8'){addNumber("8")}});
body.addEventListener("keypress",(event)=>{if(event.key==='7'){addNumber("7")}});
body.addEventListener("keypress",(event)=>{if(event.key==='6'){addNumber("6")}});
body.addEventListener("keypress",(event)=>{if(event.key==='5'){addNumber("5")}});
body.addEventListener("keypress",(event)=>{if(event.key==='4'){addNumber("4")}});
body.addEventListener("keypress",(event)=>{if(event.key==='3'){addNumber("3")}});
body.addEventListener("keypress",(event)=>{if(event.key==='2'){addNumber("2")}});
body.addEventListener("keypress",(event)=>{if(event.key==='1'){addNumber("1")}});
body.addEventListener("keypress",(event)=>{if(event.key==='0'){addNumber("0")}});
body.addEventListener("keypress",(event)=>{if(event.key==='.'){addNumber(".")}});
body.addEventListener("keydown",(event)=>{if(event.key==='Backspace'){output.innerHTML= output.innerHTML.slice(0,-1)}});

//
AC.addEventListener("click",()=>{output.innerHTML="";internal =''; lastOp.innerHTML=''})
//

plus.addEventListener("click",()=>{addOperator('+',plus)})
minus.addEventListener("click",()=>{addOperator('-',minus)})
multiply.addEventListener("click",()=>{addOperator('*',multiply)})
divide.addEventListener("click",()=>{addOperator('/',divide)})
equal.addEventListener("click",evaluate)
output.addEventListener("click",()=>{output.innerHTML= output.innerHTML.slice(0,-1)})
plusminus.addEventListener("click",()=>{
    if(output.innerHTML===''||output.innerHTML==='.'){return 0}
    output.innerHTML=eval(output.innerHTML)
    output.innerHTML = output.innerHTML*-1
})
//

let internal=''
let filteredInternal=''

function addNumber(number){
    if(output.innerHTML.length>11){return 0}
    if(number==='.'&&output.innerHTML.includes('.')){return 0}
    output.innerHTML+=number
}




function addOperator(operator,operatorClass){
    if(output.innerHTML===''){return 0}
    divide.classList.remove("border")
    minus.classList.remove("border")
    plus.classList.remove("border")
    multiply.classList.remove("border")
    operatorClass.classList.add("selected")
    operatorClass.classList.add("border")
    setTimeout(()=>{operatorClass.classList.remove("selected")},700)
    if(output.innerHTML<0){output.innerHTML+=")"; output.innerHTML= "("+output.innerHTML}
    internal += output.innerHTML
    output.innerHTML = ""
    internal+=operator
    console.log(internal)
}

function evaluate(){
    if(internal===''){return 0}
    if(output.innerHTML<0){output.innerHTML+=")"; output.innerHTML= "("+output.innerHTML}
    internal+=output.innerHTML
    console.log(internal)
    for(let i=0;internal.length>i;i++){
        if (internal[i] === '/' || 
            internal[i] === '*' || 
            internal[i] === '+' || 
            internal[i] === '-' || 
            internal[i] === '%') {
                if (internal[i+1] === '/' || 
                    internal[i+1] === '*' || 
                    internal[i+1] === '+' || 
                    internal[i+1] === '-' || 
                    internal[i+1] === '%') {
                  continue
                }else if(i+1>internal.length){filteredInternal = filteredInternal.slice(0,-1)}
                else filteredInternal+=internal[i]
        }else{filteredInternal+=internal[i]}  
    }
    if (filteredInternal[filteredInternal.length-1] === '/' || 
        filteredInternal[filteredInternal.length-1] === '*' || 
        filteredInternal[filteredInternal.length-1] === '+' || 
        filteredInternal[filteredInternal.length-1] === '-' || 
        filteredInternal[filteredInternal.length-1] === '%'){
            filteredInternal= filteredInternal.slice(0,-1)
        }
    internal = filteredInternal
    console.log(filteredInternal)
    if(eval(filteredInternal)===undefined){return 0}
    let result = eval(filteredInternal)
    if(result.toString().length>12){result = result.toString().slice(0,11)}
    output.innerHTML = result
    lastOp.innerHTML = filteredInternal
    internal=""
    filteredInternal=""
    divide.classList.remove("border")
    minus.classList.remove("border")
    plus.classList.remove("border")
    multiply.classList.remove("border")
}

//