// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')
// First, tell us your name
let yourName = "Kristin Winterhalter" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of credit
const credit = document.querySelector('#credit')
// selecting the element with an id of add-gb
const gbPlusBtn = document.querySelector('#add-gb')
const gbTotal = document.querySelector('#qty-gb')
const ccTotal = document.querySelector('#qty-cc')
const sugarTotal = document.querySelector('#qty-sugar')
const orderTotal = document.querySelector('#qty-total')



// Code to update name display
credit.textContent = `Created by ${"Kristin"}`

// Event listener for clicks on the "+" button for Gingerbread cookies
gbPlusBtn.addEventListener('click', function() {
console.log('Gingerbread + button was clicked!')

// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})

// TODO: Hook up event listeners for the rest of the buttons

gbPlusBtn.addEventListener('click', function() {
    console.log('Gingerbread + button was clicked!')
  gb++
  gbTotal.textContent = gb
  orderTotal.textContent= gb+cc+sugar
})

const ccPlusBtn = document.querySelector('#add-cc')
ccPlusBtn.addEventListener('click', function () {
    cc++
    ccTotal.textContent = cc
    orderTotal.textContent= gb+cc+sugar
    console.log('Chocolate Chip + button was clicked!')
    })
const sugarPlusBtn = document.querySelector('#add-sugar')
sugarPlusBtn.addEventListener('click', function () {
    sugar++
    sugarTotal.textContent = sugar
    orderTotal.textContent= gb+cc+sugar
        console.log('Sugar Sprinkle + button was clicked!')
        })
const ccMinusBtn = document.querySelector('#minus-cc')
ccMinusBtn.addEventListener('click', function () {
    cc--
    ccTotal.textContent = cc
    orderTotal.textContent= gb+cc+sugar
        console.log('Chocolate Chip - button was clicked!')
            })
const sugarMinusBtn = document.querySelector('#minus-sugar')
sugarMinusBtn.addEventListener('click', function () {
    sugar--
    sugarTotal.textcontent = sugar
    orderTotal.textContent= gb+cc+sugar
        console.log('Sugar Sprinkle - button was clicked!')
                })
const gbMinusBtn = document.querySelector('#minus-gb')
gbMinusBtn.addEventListener('click', function () {
    gb--
    gbTotal.textContent = gb
    orderTotal.textContent= gb+cc+sugar
    console.log('Gingerbread - button was clicked!')
                            })
