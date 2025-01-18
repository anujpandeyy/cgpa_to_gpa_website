var userCGPA = document.getElementById("userCGPA");
var convertBtn = document.getElementById("convertBtn");
var clearBtn = document.getElementById("clearBtn");
var myResult = document.getElementById("myResult");
var gpa;

convertBtn.onclick = function(){
    var cgpa = Number(userCGPA.value);

    if(cgpa<=0){
        myResult.textContent = "CGPA cannot be 0 or negative."; 
        return;
    }

    if(cgpa>10.0){
        myResult.textContent = "CGPA cannot be greater than 10.0";
        return;
    }

    if(isNaN(cgpa)){
       myResult.textContent = "Please enter a valid number.";
       return;
    }

    gpa = (cgpa/10)*4;
    myResult.textContent = `Your GPA out of 4 is ${gpa.toFixed(2)}`;
}

clearBtn.addEventListener('click',()=>{
    userCGPA.value = '';
    myResult.textContent = '';
});