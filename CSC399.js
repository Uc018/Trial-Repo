//program to find square root of any given number
//n = int(prompt("Enter the number:"))
//result = n**0.5
//print("Square root of",n,"is:",result)
// let inputSR= document.getElementById('inputSR')
// let sroot = document.getElementById("result")
// let btn = document.getElementById('btnCalc')
// btn.addEventListener("click", ()=>{
//     console.log('hi');
    
//     // sroot.innerText='gwills'
// })
// Get references to the elements
const button = document.getElementById("btnCalc");
const demoParagraph = document.getElementById("result");

// Add a click event listener to the button
button.addEventListener("click", function() {
  demoParagraph.innerHTML = "Button clicked!";
});
