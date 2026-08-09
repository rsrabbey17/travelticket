// ===== AIR MODULE - ALL 8 DIVISIONS CONNECTED =====

const airDatabase = [
    // ============================================
    // DHAKA → ALL DIVISIONS
    // ============================================
    { id: 1, airline: "Biman Bangladesh", from: "Dhaka", to: "Chittagong", departTime: "08:00", arriveTime: "09:00", duration: "1h", price: 4500 },
    { id: 2, airline: "US-Bangla", from: "Dhaka", to: "Chittagong", departTime: "10:00", arriveTime: "11:00", duration: "1h", price: 4200 },
    { id: 3, airline: "Biman Bangladesh", from: "Dhaka", to: "Rajshahi", departTime: "09:00", arriveTime: "10:15", duration: "1h 15m", price: 3800 },
    { id: 4, airline: "Novo Air", from: "Dhaka", to: "Rajshahi", departTime: "11:00", arriveTime: "12:15", duration: "1h 15m", price: 3500 },
    { id: 5, airline: "Biman Bangladesh", from: "Dhaka", to: "Khulna", departTime: "06:30", arriveTime: "07:45", duration: "1h 15m", price: 4000 },
    { id: 6, airline: "US-Bangla", from: "Dhaka", to: "Khulna", departTime: "08:30", arriveTime: "09:45", duration: "1h 15m", price: 3800 },
    { id: 7, airline: "Biman Bangladesh", from: "Dhaka", to: "Sylhet", departTime: "07:00", arriveTime: "08:00", duration: "1h", price: 4200 },
    { id: 8, airline: "US-Bangla", from: "Dhaka", to: "Sylhet", departTime: "09:30", arriveTime: "10:30", duration: "1h", price: 4000 },
    { id: 9, airline: "Novo Air", from: "Dhaka", to: "Barishal", departTime: "10:00", arriveTime: "11:00", duration: "1h", price: 3500 },
    { id: 10, airline: "Biman Bangladesh", from: "Dhaka", to: "Barishal", departTime: "12:00", arriveTime: "13:00", duration: "1h", price: 3800 },
    { id: 11, airline: "Biman Bangladesh", from: "Dhaka", to: "Rangpur", departTime: "07:30", arriveTime: "09:00", duration: "1h 30m", price: 4200 },
    { id: 12, airline: "Novo Air", from: "Dhaka", to: "Rangpur", departTime: "09:30", arriveTime: "11:00", duration: "1h 30m", price: 4000 },
    { id: 13, airline: "Biman Bangladesh", from: "Dhaka", to: "Mymensingh", departTime: "08:30", arriveTime: "09:15", duration: "45m", price: 2800 },
    { id: 14, airline: "US-Bangla", from: "Dhaka", to: "Mymensingh", departTime: "10:30", arriveTime: "11:15", duration: "45m", price: 2500 },

    // ============================================
    // CHITTAGONG → ALL DIVISIONS
    // ============================================
    { id: 15, airline: "Biman Bangladesh", from: "Chittagong", to: "Dhaka", departTime: "10:00", arriveTime: "11:00", duration: "1h", price: 4500 },
    { id: 16, airline: "US-Bangla", from: "Chittagong", to: "Dhaka", departTime: "12:00", arriveTime: "13:00", duration: "1h", price: 4200 },
    { id: 17, airline: "Biman Bangladesh", from: "Chittagong", to: "Sylhet", departTime: "14:00", arriveTime: "15:15", duration: "1h 15m", price: 3500 },
    { id: 18, airline: "US-Bangla", from: "Chittagong", to: "Sylhet", departTime: "16:00", arriveTime: "17:15", duration: "1h 15m", price: 3300 },
    { id: 19, airline: "Novo Air", from: "Chittagong", to: "Rajshahi", departTime: "08:00", arriveTime: "10:00", duration: "2h", price: 4800 },
    { id: 20, airline: "Biman Bangladesh", from: "Chittagong", to: "Khulna", departTime: "09:00", arriveTime: "11:00", duration: "2h", price: 5000 },
    { id: 21, airline: "US-Bangla", from: "Chittagong", to: "Barishal", departTime: "11:00", arriveTime: "12:30", duration: "1h 30m", price: 4000 },
    { id: 22, airline: "Novo Air", from: "Chittagong", to: "Rangpur", departTime: "07:00", arriveTime: "09:30", duration: "2h 30m", price: 5500 },
    { id: 23, airline: "Biman Bangladesh", from: "Chittagong", to: "Mymensingh", departTime: "10:30", arriveTime: "12:00", duration: "1h 30m", price: 4200 },

    // ============================================
    // RAJSHAHI → ALL DIVISIONS
    // ============================================
    { id: 24, airline: "Biman Bangladesh", from: "Rajshahi", to: "Dhaka", departTime: "08:00", arriveTime: "09:15", duration: "1h 15m", price: 3800 },
    { id: 25, airline: "Novo Air", from: "Rajshahi", to: "Dhaka", departTime: "10:00", arriveTime: "11:15", duration: "1h 15m", price: 3500 },
    { id: 26, airline: "US-Bangla", from: "Rajshahi", to: "Chittagong", departTime: "09:00", arriveTime: "11:00", duration: "2h", price: 4800 },
    { id: 27, airline: "Biman Bangladesh", from: "Rajshahi", to: "Khulna", departTime: "11:00", arriveTime: "12:30", duration: "1h 30m", price: 4000 },
    { id: 28, airline: "Novo Air", from: "Rajshahi", to: "Rangpur", departTime: "07:30", arriveTime: "08:30", duration: "1h", price: 3200 },
    { id: 29, airline: "US-Bangla", from: "Rajshahi", to: "Sylhet", departTime: "10:30", arriveTime: "12:30", duration: "2h", price: 4600 },
    { id: 30, airline: "Biman Bangladesh", from: "Rajshahi", to: "Barishal", departTime: "12:00", arriveTime: "13:30", duration: "1h 30m", price: 3800 },
    { id: 31, airline: "Novo Air", from: "Rajshahi", to: "Mymensingh", departTime: "09:30", arriveTime: "10:45", duration: "1h 15m", price: 3500 },

    // ============================================
    // KHULNA → ALL DIVISIONS
    // ============================================
    { id: 32, airline: "Biman Bangladesh", from: "Khulna", to: "Dhaka", departTime: "08:00", arriveTime: "09:15", duration: "1h 15m", price: 4000 },
    { id: 33, airline: "US-Bangla", from: "Khulna", to: "Dhaka", departTime: "10:00", arriveTime: "11:15", duration: "1h 15m", price: 3800 },
    { id: 34, airline: "Novo Air", from: "Khulna", to: "Rajshahi", departTime: "09:00", arriveTime: "10:30", duration: "1h 30m", price: 4000 },
    { id: 35, airline: "Biman Bangladesh", from: "Khulna", to: "Chittagong", departTime: "11:00", arriveTime: "13:00", duration: "2h", price: 5000 },
    { id: 36, airline: "US-Bangla", from: "Khulna", to: "Barishal", departTime: "07:30", arriveTime: "08:30", duration: "1h", price: 3000 },
    { id: 37, airline: "Novo Air", from: "Khulna", to: "Sylhet", departTime: "10:30", arriveTime: "12:45", duration: "2h 15m", price: 5200 },
    { id: 38, airline: "Biman Bangladesh", from: "Khulna", to: "Rangpur", departTime: "12:00", arriveTime: "14:00", duration: "2h", price: 4800 },
    { id: 39, airline: "US-Bangla", from: "Khulna", to: "Mymensingh", departTime: "09:30", arriveTime: "11:00", duration: "1h 30m", price: 3800 },

    // ============================================
    // SYLHET → ALL DIVISIONS
    // ============================================
    { id: 40, airline: "Biman Bangladesh", from: "Sylhet", to: "Dhaka", departTime: "08:00", arriveTime: "09:00", duration: "1h", price: 4200 },
    { id: 41, airline: "US-Bangla", from: "Sylhet", to: "Dhaka", departTime: "10:00", arriveTime: "11:00", duration: "1h", price: 4000 },
    { id: 42, airline: "Biman Bangladesh", from: "Sylhet", to: "Chittagong", departTime: "07:00", arriveTime: "08:15", duration: "1h 15m", price: 3500 },
    { id: 43, airline: "US-Bangla", from: "Sylhet", to: "Chittagong", departTime: "09:00", arriveTime: "10:15", duration: "1h 15m", price: 3300 },
    { id: 44, airline: "Novo Air", from: "Sylhet", to: "Rajshahi", departTime: "11:00", arriveTime: "13:00", duration: "2h", price: 4600 },
    { id: 45, airline: "Biman Bangladesh", from: "Sylhet", to: "Khulna", departTime: "12:00", arriveTime: "14:15", duration: "2h 15m", price: 5200 },
    { id: 46, airline: "US-Bangla", from: "Sylhet", to: "Barishal", departTime: "10:30", arriveTime: "12:00", duration: "1h 30m", price: 4200 },
    { id: 47, airline: "Novo Air", from: "Sylhet", to: "Rangpur", departTime: "08:30", arriveTime: "11:00", duration: "2h 30m", price: 5500 },
    { id: 48, airline: "Biman Bangladesh", from: "Sylhet", to: "Mymensingh", departTime: "09:30", arriveTime: "11:00", duration: "1h 30m", price: 4000 },

    // ============================================
    // BARISHAL → ALL DIVISIONS
    // ============================================
    { id: 49, airline: "Novo Air", from: "Barishal", to: "Dhaka", departTime: "08:00", arriveTime: "09:00", duration: "1h", price: 3500 },
    { id: 50, airline: "Biman Bangladesh", from: "Barishal", to: "Dhaka", departTime: "10:00", arriveTime: "11:00", duration: "1h", price: 3800 },
    { id: 51, airline: "US-Bangla", from: "Barishal", to: "Chittagong", departTime: "09:00", arriveTime: "10:30", duration: "1h 30m", price: 4000 },
    { id: 52, airline: "Novo Air", from: "Barishal", to: "Rajshahi", departTime: "11:00", arriveTime: "12:30", duration: "1h 30m", price: 3800 },
    { id: 53, airline: "Biman Bangladesh", from: "Barishal", to: "Khulna", departTime: "07:30", arriveTime: "08:30", duration: "1h", price: 3000 },
    { id: 54, airline: "US-Bangla", from: "Barishal", to: "Sylhet", departTime: "10:30", arriveTime: "12:00", duration: "1h 30m", price: 4200 },
    { id: 55, airline: "Novo Air", from: "Barishal", to: "Rangpur", departTime: "12:00", arriveTime: "14:00", duration: "2h", price: 4500 },
    { id: 56, airline: "Biman Bangladesh", from: "Barishal", to: "Mymensingh", departTime: "09:30", arriveTime: "11:00", duration: "1h 30m", price: 3600 },

    // ============================================
    // RANGPUR → ALL DIVISIONS
    // ============================================
    { id: 57, airline: "Biman Bangladesh", from: "Rangpur", to: "Dhaka", departTime: "08:00", arriveTime: "09:30", duration: "1h 30m", price: 4200 },
    { id: 58, airline: "Novo Air", from: "Rangpur", to: "Dhaka", departTime: "10:00", arriveTime: "11:30", duration: "1h 30m", price: 4000 },
    { id: 59, airline: "US-Bangla", from: "Rangpur", to: "Chittagong", departTime: "09:00", arriveTime: "11:30", duration: "2h 30m", price: 5500 },
    { id: 60, airline: "Biman Bangladesh", from: "Rangpur", to: "Rajshahi", departTime: "07:30", arriveTime: "08:30", duration: "1h", price: 3200 },
    { id: 61, airline: "Novo Air", from: "Rangpur", to: "Khulna", departTime: "11:00", arriveTime: "13:00", duration: "2h", price: 4800 },
    { id: 62, airline: "US-Bangla", from: "Rangpur", to: "Sylhet", departTime: "10:30", arriveTime: "13:00", duration: "2h 30m", price: 5500 },
    { id: 63, airline: "Biman Bangladesh", from: "Rangpur", to: "Barishal", departTime: "12:00", arriveTime: "14:00", duration: "2h", price: 4500 },
    { id: 64, airline: "Novo Air", from: "Rangpur", to: "Mymensingh", departTime: "09:30", arriveTime: "11:00", duration: "1h 30m", price: 3800 },

    // ============================================
    // MYMENSINGH → ALL DIVISIONS
    // ============================================
    { id: 65, airline: "Biman Bangladesh", from: "Mymensingh", to: "Dhaka", departTime: "08:00", arriveTime: "08:45", duration: "45m", price: 2800 },
    { id: 66, airline: "US-Bangla", from: "Mymensingh", to: "Dhaka", departTime: "10:00", arriveTime: "10:45", duration: "45m", price: 2500 },
    { id: 67, airline: "Novo Air", from: "Mymensingh", to: "Chittagong", departTime: "09:00", arriveTime: "10:30", duration: "1h 30m", price: 4200 },
    { id: 68, airline: "Biman Bangladesh", from: "Mymensingh", to: "Rajshahi", departTime: "11:00", arriveTime: "12:15", duration: "1h 15m", price: 3500 },
    { id: 69, airline: "US-Bangla", from: "Mymensingh", to: "Khulna", departTime: "10:30", arriveTime: "12:00", duration: "1h 30m", price: 3800 },
    { id: 70, airline: "Novo Air", from: "Mymensingh", to: "Sylhet", departTime: "07:30", arriveTime: "09:00", duration: "1h 30m", price: 4000 },
    { id: 71, airline: "Biman Bangladesh", from: "Mymensingh", to: "Barishal", departTime: "09:30", arriveTime: "11:00", duration: "1h 30m", price: 3600 },
    { id: 72, airline: "US-Bangla", from: "Mymensingh", to: "Rangpur", departTime: "12:00", arriveTime: "13:30", duration: "1h 30m", price: 3800 },
];

// ============================================
// AIR SEARCH FUNCTIONS
// ============================================

let selectedAirPassengers = 1;

function searchAirFlights() {
    console.log("🔍 Searching flights...");
    
    const fromInput = document.getElementById('airFrom');
    const toInput = document.getElementById('airTo');
    const passengersInput = document.getElementById('airPassengers');
    
    if (!fromInput || !toInput || !passengersInput) {
        console.error("❌ Input elements not found!");
        return;
    }
    
    const from = fromInput.value.trim();
    const to = toInput.value.trim();
    const passengers = parseInt(passengersInput.value) || 1;
    
    console.log(`From: ${from}, To: ${to}, Passengers: ${passengers}`);
    
    if (!from || !to) {
        showAlert('Please enter both departure and arrival cities.', 'error');
        return;
    }
    
    if (from === to) {
        showAlert('Departure and arrival cities must be different.', 'error');
        return;
    }

    selectedAirPassengers = passengers;

    const results = airDatabase.filter(flight => {
        const fromMatch = flight.from.toLowerCase().includes(from.toLowerCase());
        const toMatch = flight.to.toLowerCase().includes(to.toLowerCase());
        return fromMatch && toMatch;
    });
    
    console.log(`Found ${results.length} flights`);
    displayAirResults(results, passengers);
}

function displayAirResults(flights, passengers) {
    const section = document.getElementById('airResultsSection');
    const container = document.getElementById('airResults');
    const count = document.getElementById('airResultCount');

    if (!section || !container || !count) {
        console.error("❌ Result elements not found!");
        return;
    }

    section.style.display = 'block';

    if (flights.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <i class="fas fa-plane-slash"></i>
                <h3>No Flights Found</h3>
                <p>We couldn't find any flights matching your search.</p>
                <p style="font-size:0.9rem;color:var(--gray);margin-top:0.5rem;">
                    <i class="fas fa-lightbulb"></i> Try different cities.
                </p>
            </div>
        `;
        count.textContent = '0 flights found';
        return;
    }

    count.textContent = `${flights.length} flights found`;

    let html = '';
    flights.forEach((flight, index) => {
        const totalPrice = flight.price * passengers;
        html += `
            <div class="flight-card" style="animation-delay: ${index * 0.1}s">
                <div class="flight-info">
                    <div class="airline">
                        <i class="fas fa-plane"></i>
                        <span>${flight.airline}</span>
                    </div>
                    <div class="route">
                        <div>
                            <div class="time">${flight.departTime}</div>
                            <div style="font-size: 0.8rem; color: var(--gray);">${flight.from}</div>
                        </div>
                        <div class="duration">
                            <i class="fas fa-arrow-right"></i>
                            ${flight.duration}
                            <i class="fas fa-arrow-right"></i>
                        </div>
                        <div>
                            <div class="time">${flight.arriveTime}</div>
                            <div style="font-size: 0.8rem; color: var(--gray);">${flight.to}</div>
                        </div>
                    </div>
                </div>
                <div style="display: flex; align-items: center; gap: 1rem;">
                    <div>
                        <div class="price">${formatCurrency(totalPrice)}</div>
                        <small>for ${passengers} passenger${passengers > 1 ? 's' : ''}</small>
                    </div>
                    <button class="btn-select-flight" onclick="bookAirFlight(${flight.id})">
                        <i class="fas fa-check"></i> Book Now
                    </button>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;
}

function bookAirFlight(flightId) {
    const user = getCurrentUser();
    if (!user) {
        showAlert('Please login first to book a flight.', 'error');
        return;
    }

    const flight = airDatabase.find(f => f.id === flightId);
    if (!flight) {
        showAlert('Flight not found.', 'error');
        return;
    }

    const totalPrice = flight.price * selectedAirPassengers;

    const booking = {
        type: 'air',
        airline: flight.airline,
        from: flight.from,
        to: flight.to,
        departTime: flight.departTime,
        arriveTime: flight.arriveTime,
        duration: flight.duration,
        passengers: selectedAirPassengers,
        totalPrice: totalPrice,
        passengerName: user.fullName,
        passengerEmail: user.email,
        passengerPhone: user.phone,
        userId: user.id,
        bookingDate: new Date().toISOString()
    };

    saveBooking(booking);
    showAlert(`✅ Flight booked successfully! ${flight.airline} - ${flight.from} to ${flight.to}`, 'success');
}

// Setup
document.addEventListener('DOMContentLoaded', function() {
    console.log("✈️ Air module initializing...");
    
    const today = new Date().toISOString().split('T')[0];
    const departDate = document.getElementById('airDepartDate');
    if (departDate) {
        departDate.min = today;
        departDate.value = today;
    }

    const form = document.getElementById('airSearchForm');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            searchAirFlights();
        });
    }
});

console.log('✈️ Air Module loaded with', airDatabase.length, 'routes');