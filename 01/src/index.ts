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



//funtion with optional parameter
function addNumber(firstNumber:number,SecondNumber?:number){
if(SecondNumber){
    return (firstNumber+SecondNumber);
}
return firstNumber;

}

let subMarks=addNumber(40);
console.log("parametere one pass :"+subMarks);

let subMarks2=addNumber(40,50);
console.log("parametere two pass :"+subMarks2);


//Object
let student:{id:number,name:String}={
    id:10,
    name:"piyumal"
}

//Object optional
let student2:{id:number,name:String,age?:number}={
    id:10,
    name:"piyumal"
    //age eka dennama one na (Optional)
}

let teacher:{id:number;name:String;enroll:(date:Date)=>void}={
    id:10,
    name:"piyumal",
    enroll:(date:Date)=>{
        console.log(date);
    }
}

teacher.enroll(new Date());

