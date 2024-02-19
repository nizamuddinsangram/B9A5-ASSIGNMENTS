const seats = document.getElementsByClassName("seats");
// console.log(seats);
let count = 0;
let count1 = 40;

for (const seat of seats) {
  let selectedSeat = null;
  seat.addEventListener("click", function (event) {
    // console.log("asi ra bai asi");
    count = count + 1;
    count1 = count1 - 1;
    const ticketPrice =
      event.target.parentNode.parentNode.parentNode.parentNode.childNodes[5]
        .childNodes[3].childNodes[3].childNodes[0].innerText;
    const ticketCategory = event.target.innerText;
    //
    // if (selectedSeat !== null) {
    //   selectedSeat.classList.remove("selected");
    // }

    //   work end

    const buySeat = document.getElementById("append");
    const div = document.createElement("div");
    div.classList.add("myStyle");
    const p = document.createElement("p");
    p.innerText = ticketCategory;
    const p2 = document.createElement("p");
    p2.innerHTML = "Economy";
    const p3 = document.createElement("p");
    p3.innerText = ticketPrice;

    div.appendChild(p);
    div.appendChild(p2);
    div.appendChild(p3);
    buySeat.appendChild(div);

    // const totalCoast = document.getElementById("total-coast").innerText;
    // const totalCoastConvert = parseInt(totalCoast);

    // const totalTicketPrice = totalCoastConvert + parseInt(ticketPrice);
    // console.log(totalTicketPrice);

    setInnerText("bookings-seats", count);
    calculateTotalCoast("total-coast", ticketPrice);
    calculateGrandTotal("grand-total", ticketPrice);
    // setInnerText("total-coast", totalTicketPrice);
    // const remainingSeats = document.getElementById("total-seats").innerText;
    // console.log(remainingSeats);
    // const bookingSeats = document.getElementById("bookings-seats").innerText;
    // console.log(bookingSeats);
    // const updateSeats = remainingSeats - bookingSeats;
    setInnerText("total-seats", count1);
  });
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
function calculateGrandTotal(id, value) {
  const totalCoast = document.getElementById(id).innerText;
  const totalCoastConvert = parseInt(totalCoast);
  const totalTicketPrice = totalCoastConvert + parseInt(value);
  setInnerText(id, totalTicketPrice);
}
function calculateTotalCoast(id, value) {
  const totalCoast = document.getElementById(id).innerText;
  const totalCoastConvert = parseInt(totalCoast);
  const totalTicketPrice = totalCoastConvert + parseInt(value);
  setInnerText(id, totalTicketPrice);
}

function applyDiscount(couponCode) {
  //  add a funcality
  const btn = document.getElementById("apply");
  //
  const totalCostElement = document.getElementById("grand-total");
  let totalCost = parseInt(totalCostElement.innerText);
  if (couponCode === "NEW15") {
    const discount = Math.floor(totalCost * 0.15);
    totalCost = totalCost - discount;
    btn.style.display = "none";
  } else if (couponCode === "Couple 20") {
    const discount = Math.floor(totalCost * 0.2);
    totalCost = totalCost - discount;
    btn.style.display = "none";
  } else if (couponCode !== "NEW15" || couponCode !== "Couple 20") {
    alert("moja kom koro");
  }
  totalCostElement.innerText = totalCost;
}
//
const applyButton = document.getElementById("apply");
applyButton.addEventListener("click", function () {
  const couponCodeInput = document.getElementById("input-text");
  const couponCode = couponCodeInput.value;
  applyDiscount(couponCode);
  couponCodeInput.value = "";
});
