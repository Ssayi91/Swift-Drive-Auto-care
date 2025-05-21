// Sample mock data
const carHireBookings = [
  {
    name: "Brian",
    car: "Toyota Axio",
    pickup: "2025-06-01",
    days: 3,
    paid: true,
    status: "Pending"
  },
  {
    name: "Rita",
    car: "Prado TX",
    pickup: "2025-06-03",
    days: 2,
    paid: false,
    status: "Pending"
  }
];

const garageBookings = [
  {
    name: "Jane",
    service: "Engine Diagnosis",
    date: "2025-06-02",
    time: "10:00",
    status: "Scheduled"
  },
  {
    name: "Daniel",
    service: "Oil Change",
    date: "2025-06-04",
    time: "14:00",
    status: "Scheduled"
  }
];

function loadTables() {
  const carTable = document.getElementById("carHireTable").querySelector("tbody");
  carTable.innerHTML = "";
  carHireBookings.forEach((booking, index) => {
    carTable.innerHTML += `
      <tr>
        <td>${booking.name}</td>
        <td>${booking.car}</td>
        <td>${booking.pickup}</td>
        <td>${booking.days}</td>
        <td>${booking.paid ? "✅ Paid" : "❌ Not Paid"}</td>
        <td>${booking.status}</td>
        <td>
          <button onclick="approveCar(${index})">Approve</button>
          <button onclick="rejectCar(${index})">Reject</button>
        </td>
      </tr>
    `;
  });

  const garageTable = document.getElementById("garageTable").querySelector("tbody");
  garageTable.innerHTML = "";
  garageBookings.forEach((job, index) => {
    garageTable.innerHTML += `
      <tr>
        <td>${job.name}</td>
        <td>${job.service}</td>
        <td>${job.date}</td>
        <td>${job.time}</td>
        <td>${job.status}</td>
        <td>
          <button onclick="markComplete(${index})">Mark Complete</button>
        </td>
      </tr>
    `;
  });
}

function approveCar(index) {
  carHireBookings[index].status = "Approved";
  loadTables();
}

function rejectCar(index) {
  carHireBookings[index].status = "Rejected";
  loadTables();
}

function markComplete(index) {
  garageBookings[index].status = "Completed";
  loadTables();
}

// Initialize
loadTables();
