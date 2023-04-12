let question = "What Operations do you want to perform?";
let livequestion = document.getElementById("livequestion");
livequestion.innerHTML = question;
let liveinput="";
let operation = "";
let phase = 0;
let temp = 0;
let loopnumber = 0;
let currentloop = 1;


document.getElementById("liveinput").addEventListener("keyup",(e)=>{
    if(e.keyCode==13){
        switch(phase){
            case 0:
                switch(e.target.value){
                    case "addition":
                        operation = e.target.value;
                        temp = 0;
                        appendentry(); 
                        newentry();
                        break;
                    case "multiplication":
                        operation = e.target.value;
                        temp = 1;
                        appendentry();
                        newentry();
                        break;
                    case "division":
                        operation = e.target.value;
                        temp = 1;
                        appendentry();
                        newentry();
                        break;
                    case "substraction":
                        operation = e.target.value;
                        temp = 0;
                        appendentry();
                        newentry();
                        break;
                    default:
                        alert("wrong operation");
                    
                }
                break;
            case 1:
                if(parseInt(e.target.value)){
                    loopnumber = parseInt(e.target.value);
                    appendentry();
                    newentry();
                }
                else{
                    alert("Enter valid number");
                }
                break;
            case 2:
                if(parseInt(e.target.value)){
                    switch(operation){
                        case "addition":
                            temp = temp + parseInt(e.target.value);
                            break;
                        case "multiplication":
                            temp = temp * parseInt(e.target.value);
                            break;
                        case "division":
                            if(currentloop = 1){
                                temp = parseInt(e.target.value);

                            }else{
                                temp = temp/parseInt(e.target.value);
                            }
                            break;
                        case "substraction":
                            if(currentloop==1){
                                temp = parseInt(e.target.value);
                            }
                            else{
                                temp = temp - parseInt(e.target.value);
                            }
                            break;

                    }
                    currentloop++;
                    appendentry();
                    newentry();                        
                }
                else{
                    alert("Enter valid number");
                }
                break;
            case 3:
                if(parseInt(e.target.value)){
                    switch(operation){
                        case "addition":
                            temp = temp + parseInt(e.target.value);
                            break;
                        case "multiplication":
                            temp = temp * parseInt(e.target.value);
                            break;
                        case "division":
                            temp = temp/parseInt(e.target.value);
                            break;
                        case "substraction":
                            temp = temp - parseInt(e.target.value);
                            break;
                    }
                    currentloop =1;
                    loopnumber =0;
                    appendentry();
                    newentry();
                }
                else{
                    alert("Enter valid number");
                }
                break;

        }
    //     var newHTML = `
    //     <h3> ${questions}</h3>
    //     <h3>
    //         <span class="input-span"></span>
    //         ${liveinput}
    //     </h3>
    //     `;
    //     let div = document.createElement("div");
    //     div.innerHTML=newHTML;
    //     document.getElementById("handler").appendChild(div);
    //     newentry();
    // }
    // else{
    //     liveinput = e.target.value;
    }
    else{
        liveinput = e.target.value;
      
    }
});


function appendentry(){
    
        var newHTML = `
        <h3> ${question}</h3>
        <h3>
            <span class="input-span"></span>
            ${liveinput}
        </h3>
        `;
        let div = document.createElement("div");
        div.innerHTML=newHTML;
        document.getElementById("handler").appendChild(div);
        // newentry();
}

function newentry(){
    liveinput = "";
    document.getElementById("liveinput").value = null;
    switch(phase){
        case 0:
            phase = 1;
            question = "How manay numbers do you want ot enter";
            break;
        case 1:
            phase = 2;
            question = `Enter Number ${currentloop} of ${loopnumber}`;
            break;
        case 2:
            question = `Enter Number ${currentloop} of ${loopnumber}`;
            if(currentloop==loopnumber){
                phase = 3;
            }
            break;
        case 3:
            phase =0;
            question = `Your Answer for Above Calculation is ${temp} Now operation Do you want to perform`;
            break;
    }
    livequestion.innerHTML = question;
}