let bill = 0;
let people = 1;
let tip = 0;

function getBill(el) {
  bill = document.getElementById("bill-num").value;
  bill = parseInt(bill, 10);
  console.log(bill);
  calculate();
}

function getPeople() {
  people = document.getElementById("num-of-people").value;
  people = parseInt(people, 10);
  console.log(people);
  calculate();
}

function getTip(el) {
  tip = el.value;
  if (isNaN(tip)) {
    alert("Your tip is not a number!");
  } else {
    tip = parseInt(tip, 10);
    console.log(tip);
    calculate();
  }
}

function calculate() {
  if (bill != 0 && people != 0 && tip != 0) {
    let result_tip = ((bill / 100) * tip) / people;
    let result_total = (bill + (bill / 100) * tip) / people;

    outputTip.value = result_tip.toFixed(2);
    outputTotal.value = result_total.toFixed(2);
  } else {
    console.log("Not ready for calculation");
  }
}
