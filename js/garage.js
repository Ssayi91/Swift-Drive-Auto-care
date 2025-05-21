   document.getElementById('garageBookingForm').addEventListener('submit', function (e) {
      e.preventDefault();

      const name = document.getElementById('g_name').value;
      const phone = document.getElementById('g_phone').value;
      const service = document.getElementById('g_service').value;
      const time = document.getElementById('g_time').value;
      const car = document.getElementById('g_car').value;

      const message = `Hello, I'd like to book a garage service.\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\nPreferred Time: ${time}\nCar: ${car || 'N/A'}\n\nPayment will be done after service.`;
      const encodedMessage = encodeURIComponent(message);

      window.open(`https://wa.me/254736194051?text=${encodedMessage}`, '_blank');
    });