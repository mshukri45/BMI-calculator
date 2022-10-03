//const btn = document.querySelector("#btn");
const btn = document.getElementById("btn"); //get button element to call function when pressd


//when mouse over button change color of button
btn.addEventListener("mouseover",function(){
    this.style.backgroundColor = "#ba2e00";
   })

//when mouse away button change color of button
   btn.addEventListener('mouseout',function(){
       this.style.backgroundColor = "#008CBA";
   })

   //when button click calculate bmi
btn.addEventListener("click",function(){
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    let bmi = document.getElementById("result"); //get bmi result to change value
    let comment = document.getElementById("comment"); //get comment to change value


    if(height ==="" || weight==""){
        alert("please enter your height and weight");
    }else{
        height = height/100;
        let bmiResult = weight/(height * height);
        bmiResult=bmiResult.toFixed(1);  //fixed to one decimal places
        if(bmiResult < 18.5){
            comment.innerHTML= "underweight"
            comment.style.color = "red"
        }else if(bmiResult >= 18.5 && bmiResult < 25){
            comment.innerHTML= "healty"
            comment.style.color = "#008CBA";
        }else{
            comment.innerHTML= "obese"
            comment.style.color = "red"
        }
        bmi.textContent = bmiResult;
    }
    
})

