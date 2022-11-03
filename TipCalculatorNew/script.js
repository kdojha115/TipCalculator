
const billInput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const perPersonTotalDiv = document.getElementById('perPersonTotal')

// Get number of people from number of people div
// const numberOfPeople = Number(numberOfPeopleDiv.innerText)
//const numberOfPeople = Number(1)

// ** Calculate the total bill per person **
const calculateBill = () => {
  // get bill from user input & convert it into a number
  const bill = Number(billInput.value)

  // get the tip from user & convert it into a percentage (divide by 100)
  const tipPercent = Number(tipInput.value) / 100

  // get the total tip amount
  const tipAmount = bill * tipPercent

  // calculate the total (tip amount + bill)
  const total = tipAmount + bill

  

  // calculate the per person total (total divided by number of people)
  const perPersonTotal = total / Number(numberOfPeopleDiv.value)

  // update the perPersonTotal on DOM & show it to user
  perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
}


