const seats = document.getElementsByClassName("seats");
// console.log(seats);
let count = 0;
for (const seat of seats) {
  seat.addEventListener("click", function (event) {
    // console.log("asi ra bai asi");
    count = count + 1;
    console.log(
      event.target.parentNode.parentNode.parentNode.parentNode.childNodes[5]
        .childNodes[3].childNodes[3].childNodes[0].innerText
    );
    setInnerText("bookings-seats", count);
  });
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
