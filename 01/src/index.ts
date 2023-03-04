console.log("Hello Nipuna");

//data type

//number
let age: number=22;


//String
let firstName: string="Nipuna"

//let Array
let numbersArray=[10,20,30,40,50,"nipuna"]

//tuples
let person:[number,String]=[2,"piyumal"]


//funtions
function calculate(){
    //1  
    // return 2; //return type rka number auto dagannava
    //2 
    //return "nipuna"; //return type rka String auto dagannava

    //3
    let numbers:number[] =[]
    return numbers;     //return type rka Array auto dagannava
}

function calculateAvarageMarks(subjectCount:number,totalMark:number):number{
    let ava=(totalMark/subjectCount)*100
    return ava;
}

let avaMarks=calculateAvarageMarks(5,420);
console.log(avaMarks);
