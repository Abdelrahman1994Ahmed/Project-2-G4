let increment = document.querySelectorAll(".increment");
let decrement = document.querySelectorAll(".decrement");
let quantity =document.querySelectorAll(".quantity");
let remove = document.querySelectorAll(".remove");
let price = document.querySelectorAll(".Price");
let total = document.querySelectorAll(".total");
let tableRow = document.querySelectorAll(".table-row");

count = 1
// Add Quantity
increment.forEach((btn, index)=> {
    btn.addEventListener("click" , ()=>{
        console.log(quantity[index])
        if (quantity[index].innerHTML < 9) {
                    count++
                quantity[index].innerHTML = count;
                } else {
                    alert('max')
                }
    })
})
// Decrement Quantity
decrement.forEach((btn, index)=> {
    btn.addEventListener("click" , ()=>{
        if (quantity[index].innerHTML > 1) {
                    count--
                quantity[index].innerHTML = count;
                } else {
                    alert('min')
                }
    })
})
// Remove Product
remove.forEach((btn, index)=> {
    btn.addEventListener("click" , ()=>{
        console.log(tableRow[index])
        tableRow[index].remove()
    })
})