document.querySelector(".btn").addEventListener("click",function(){
var h = parseFloat(document.getElementById("height").value);
var w = parseFloat(document.getElementById("weight").value);
var bmi = w/(h*h);
var output = document.querySelector(".out");
if (bmi < 18.6) {output.innerHTML =
            `Under Weight : <span>${bmi}</span>`;
 
}else if (bmi >= 18.6 && bmi < 24.9) {
            output.innerHTML = `Normal : <span>${bmi}</span>`;
        }else{ 
            output.innerHTML = `Over Weight : <span>${bmi}</span>`;
        }
});