//Store your name in a variable
let myName = "Funsho Fatoye";

//Store your courses in an array
let courses = ["Design", "Mobile", "Frontend"];



//function to display my name
function displayName(){
    //capture the tag id of out html output section
    //where we want the name to be displayed
    let nameDiv = document.getElementById("nameTag");

    //add the content of myName variable to the
    //nameDiv output section
    nameDiv.innerHTML = myName;
}
//invoke the displayName() function here
displayName();



//function to display my courses
function displayCourses(){
    //capture the tag id of out html output section
    //where we want the courses to be displayed
    let courseDiv = document.getElementById("courseList");

    //loop through the content of the courses array
    for (let i = 0; i < courses.length; i++) {
        //output the content of the courses array in our html page
        courseDiv.innerHTML += "<li>" + courses[i] + "</li>";
        
    }
}
displayCourses();



//function to display even or odd numbers
//based on the number of items in the courses array
function displayEvensOrOdd(){
    //capture the length of our courses array
    let courseLength = courses.length;

    //capture the tag id of our html output section
    //where we want the even or odd numbers to be displayed
    let numberDiv = document.getElementById("numberList");

    //to output even or odd numbers from 1 to 200
    //based on the length of courses we are taking

    //loop throught the numbers 1 to 200
    for (let i = 0; i <= 200; i++) {

        //check if the loop element and courses array length is an even number
        if(i%2 === 0 && courseLength%2 === 0){
            //if they are, output the even numbers from 1 to 200
            numberDiv.innerHTML += "<li>" + i + "</li>";
        } else if(i%2 > 0 && courseLength%2 > 0){ // if they are odd numbers
            numberDiv.innerHTML += "<li>" + i + "</li>"; // output odd numbers from 1 to 200
        }
        
    }
}
displayEvensOrOdd()