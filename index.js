let showbtn1 = document.getElementById("Add")
let showresults = document.getElementById("results")
console.log(showbtn1)
let btn1 = 0
function incrementbtn1() {
    btn1 = btn1 +1
    showbtn1.innerText = btn1
}
function incrementbtn2() {
    btn1 = btn1 + 2
    showbtn1.innerText = btn1
}

function save() {
    let entry = btn1
    showbtn1.innerText = btn1 
    showresults.innerText += entry + " - "
    btn1 = 0

   

}