console.log('file connected');

const allSeats = document.getElementsByClassName('seats');
let seatCount = 40;
let totalSeat = 0;

for (const seat of allSeats) {
  seat.addEventListener('click', function (event) {
    seat.classList.add('bg-emerald-500');
    seatCount = seatCount - 1;
    if (seatCount < 0) {
      window.alert('Seat not available');
    } else {
      document.getElementById('seats-count').innerText = seatCount;
    }
    totalSeat = totalSeat + 1;
    if (totalSeat > 40) {
      window.alert('All seat added');
    } else if (totalSeat > 4) {
      window.alert('you can only add 4 seat');
    } else {
      document.getElementById('count').innerText = totalSeat;
    }

    //  get title
    const title = seat.querySelector('span').innerText;

    // show-container

    const listContainer = document.getElementById('list-container');
    const li = document.createElement('li');
    const p = document.createElement('p');
    p.innerText = title;

    const p2 = document.createElement('p');
    p2.innerText = 'Economy';

    const p3 = document.createElement('p');
    const price = (p3.innerText = 550);

    li.appendChild(p);
    li.appendChild(p2);
    li.appendChild(p3);

    listContainer.appendChild(li);

    // Get total price
    const totalCost = document.getElementById('price').innerText;
    totalPrice = parseInt(totalCost);

    let mainPrice = totalPrice + parseInt(price);
    document.getElementById('price').innerText = mainPrice;

    // Discount section
    document
      .getElementById('discount-btn')
      .addEventListener('click', function () {
        const fieldValue = document.getElementById('discount-field').value;
        if (fieldValue === 'new50') {
          const discountSection = document.getElementById('discount-section');
          discountSection.classList.add('hidden');

          const grandPrice = document.getElementById('grand-price');
          const discountPrice = mainPrice * 0.2;
          const totalDiscountPrice = mainPrice - discountPrice;
          grandPrice.innerText = totalDiscountPrice.toFixed(2);
        }
      });
  });
}
