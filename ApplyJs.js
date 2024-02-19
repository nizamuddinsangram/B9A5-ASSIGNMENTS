const seats = document.getElementsByClassName("seats");
// console.log(seats);
let count = 0;
for (const seat of seats) {
  seat.addEventListener("click", function (event) {
    // console.log("asi ra bai asi");
    count = count + 1;
    const ticketPrice =
      event.target.parentNode.parentNode.parentNode.parentNode.childNodes[5]
        .childNodes[3].childNodes[3].childNodes[0].innerText;
    const ticketCategory = event.target.innerText;
    // console.log(
    //   event.target.parentNode.parentNode.parentNode.parentNode.childNodes[5]
    //     .childNodes[3].childNodes[3].childNodes[0].innerText
    // );
    // console.log(event.target.innerText);

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

    setInnerText("bookings-seats", count);
  });
}

function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
