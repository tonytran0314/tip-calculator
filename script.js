// call tipCal function when client clicks the "CALCULATE!" button
document.getElementById('cal').addEventListener('click', tipCal)


function tipCal() {

    // collect data from inputs 
    const billCost = document.getElementById('bill-cost-box').value
    const serviceRating = document.getElementById('rating').value
    const totalPpl = document.getElementById('total-ppl').value
    const rslt = (billCost * serviceRating / 100) / totalPpl
    const result = rslt.toFixed(2)

    // call inpVal function to validate the inputs
    const valResult = inpVal(billCost, serviceRating, totalPpl)

    // if all the input is true, show the result
    if (valResult) {
        // Show the result
        // if there is 1 person, print the result WITHOUT word "each"
        if (totalPpl == 1) {
            document.getElementById('result').innerHTML = 'TIP AMOUNT' + '<br>' + '$' + result

        }
        // if there are more than 1 person, print the result WITH word "each"
        else {
            document.getElementById('result').innerHTML = 'TIP AMOUNT' + '<br>' + '$' + result + '<br>' + 'each'
        }
    }


}

// inputs validation function
function inpVal(bill, rate, ppl) {
    // bill cost validation: 
    // if billCost is blank or less-equal than 0 or is not a number, then show the alert
    if (bill === "" || bill <= 0 || isNaN(bill) == true) {
        alert('Please type your bill amount, it should be larger than 0 and be a number')
    }
    // service rating validation:
    // if serviceRating is blank, then show the alert
    else if (rate === '') {
        alert('choose a tip percent')
    }
    // total people validation:
    // if totalPpl is blank or less-equal than 0 or is not a number, then show the alert 
    else if (ppl === '' || ppl <= 0 || isNaN(ppl) == true) {
        alert('Please type number of people, it should be larger than 0 and be a number')
    }

    if (bill && rate && ppl) {
        return true
    } else {
        return false
    }
}