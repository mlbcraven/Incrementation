let showbtn1 = document.getElementById("Add")
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
    btn1 = 0
    showbtn1.innerText = btn1 

}