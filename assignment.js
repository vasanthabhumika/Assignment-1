const task3Element = document.getElementById('task-3');

function userName(){
    alert("Hi there !!!");
}

userName();


function userNameTwo(name){
    alert(`Hi my name is ${name}`);
}

userNameTwo("Bhumika");

task3Element.addEventListener("click", userName);


function brandNew(param1, param2, param3){
    const combinedString = `${param1} ${param2} ${param3}`;
    return combinedString;
}

 const combinedText = brandNew(" Apoo", " Aishu", " Varshu");
 alert(combinedText)