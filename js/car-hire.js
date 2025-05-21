function selectCar(model, price) {
  document.getElementById('booking-form').style.display = 'block';
  document.getElementById('selectedCar').value = model;
  document.getElementById('rate').value = price;
}

function submitBooking(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const pickup = document.getElementById('pickup').value;
  const days = document.getElementById('days').value;
  const car = document.getElementById('selectedCar').value;
  const rate = document.getElementById('rate').value;

  const total = rate * days;

  const message = `*SwiftDrive AutoCare Car Hire Booking*\n` +
    `Name: ${name}\nPhone: ${phone}\nCar: ${car}\nPickup Date: ${pickup}\nDays: ${days}\nTotal: KSh ${total}\n\n` +
    `Please confirm availability and payment.`;

  const waUrl = `https://wa.me/254736194051?text=${encodeURIComponent(message)}`;
  window.open(waUrl, '_blank');

  alert("Redirecting to WhatsApp to complete booking.");
}
