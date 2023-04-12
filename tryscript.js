let question = "which operation do you want to perform?"
let livequestion = document.getElementById("livequestion")
livequestion.innerHTML = question;
let operation = "";
let phase = 0;
let temp = 0;
let liveinput = "";
let loopnumbr = 0;
let currentloop = 1;

document.getElementById("liveinput").addEventListener("keyup",(e)=>{
    if(e.keyCode==13){
        switch(phase){
            case 0:
                switch(e.target.value){
                    case "addition":
                        operation = e.target.value;
                        temp= 0;
                        appendentry();
                        newentry();
                        break;
                    
                    case "multiplication":
                        operation = e.target.value;
                        temp= 1;
                        appendentry();
                        newentry();
                        break;
                    
                    case "subtraction":
                        operation = e.target.value;
                        temp= 0;
                        appendentry();
                        newentry();
                        break;
                    
                    case "divide":
                        operation = e.target.value;
                        temp= 1;
                        appendentry();
                        newentry();
                        break;

                    default:
                        alert("enter  a operation name");
                }
                break;
            
            case 1:
                if(parseInt(e.target.value)){
                    loopnumbr = parseInt(e.target.value);
                    appendentry();
                    newentry();        
                }
                else{
                    alert("Enter a number")
                }
                break;
            case 2:
                if(parseInt(e.target.value)){
                switch(operation){
                    case "addition":
                        temp = temp + parseInt(e.target.value); 
                        break;
                    case "multiplication":
                        temp = temp*parseInt(e.target.value);
                        break;
                    case "subtraction":
                        if(currentloop==1){
                            temp = parseInt(e.target.value);
                        }
                        else{
                            temp = temp - parseInt(e.target.value);
                        }
                        
                        break;
                    case  "divide":
                        if(currentloop==1){
                            temp = parseInt(e.target.value);
                        }
                        else{
                            temp = temp/parseInt(e.target.value);
                        }
                        
                        break;
                }
                currentloop++;
                appendentry();
                newentry();
                }
                else{
                    alert("Enter a correct number");
                }
                break;
            case 3:
                if(parseInt(e.target.value)){
                    switch(operation){
                        case "addition":
                            temp = temp+ parseInt(e.target.value);
                            break;
                        case "multiplication":
                            temp = temp*parseInt(e.target.value);
                            break;
                        case "subtraction":
                            temp = temp-parseInt(e.target.value);
                            console.log(temp);
                            break;
                        case "divide":
                            temp = temp/parseInt(e.target.value);
                            break;
                    }
                    appendentry();
                    newentry();
                    currentloop = 1;
                    loopnumbr=0;
                }
                else{
                    alert("enter a correct number");
                }

            
        }
    }
    else{
      liveinput = e.target.value 
    }
})


function appendentry(){
    innerhtml =`
    <h3> > ${question} </span></h3>
            <h3>
                <span class="input-span"></span>
                ${liveinput}
            </h3>
    
    `
    div = document.createElement("div");
    div.innerHTML = innerhtml;
    document.getElementById("handler").appendChild(div);
}

function newentry(){
    liveinput = "";
    document.getElementById("liveinput").value=null;
    switch(phase){
        case 0:
            phase =  1;
            question = "how many numbers do you want to calculate";
            break;
        case 1:
            phase = 2;
            question = `enter a ${currentloop} of ${loopnumbr}`;
            break;
        case 2:
            question = `enter a ${currentloop} of ${loopnumbr}`;
            if(currentloop==loopnumbr){
                phase = 3;
            }
            break;
        case 3:
            phase=0;
            question=`ans of your question is ${temp} and which operation do you want to perform next`
            break;
        }
    livequestion.innerHTML = question;
}
console.log(phase);