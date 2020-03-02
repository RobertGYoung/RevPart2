var counter = 0;
function myFunction(){
    counter++;
    document.getElementById("demo").innerHTML =counter
    

}
function myReverseFunction(){
    counter--;
    document.getElementById("demo").innerHTML =counter
}

var add = function sum(val1, val2){

    return val1 +val2;
};


function doHomeWork(subject,callback){
    alert(`Starting my ${subject} homework.`);
    callback();
 }
 function alertFinished(){
     
    alert(`Finished my Homeworked`);

 }
 console.log(doHomeWork('science',alertFinished));

