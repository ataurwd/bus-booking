const sitSelect = document.getElementById('no-sit-select');
const totalSetBooked = document.getElementById('total-booked');
const bookedSit = document.getElementById('already-booked')
const totalPrice = document.getElementById('total-price');
const ticketHideText = document.getElementById('no-ticket-text')
const couponInput = document.getElementById('coupon-feild');
const couponBtn = document.getElementById('coupon-btn')
const grandPrice = document.getElementById("grand-price");

let selectedSet  = [];
let newPrice = 0;

const handelSitClick = event => {

    const value = event.innerText;
    if(selectedSet.includes(value)){
        return alert('seat Already booked')
    }
    else if(selectedSet.length < 4) {
        selectedSet.push(event.innerText)
        totalSetBooked.innerText = selectedSet.length;
    
        ticketHideText.classList.add('hidden')
        // !manage bg color 
        event.classList.add('bg-black');
        event.classList.add('text-white')
        // ! available sit
        const availabeSitValue = parseFloat(bookedSit.innerText);
        const newAvailabeSit = availabeSitValue - 1;
        bookedSit.innerText = newAvailabeSit;
    
        sitSelect.innerHTML += `
                    <ul class="text-xl flex justify-between my-3">
                    <li>${event.innerText}</li>
                    <li>Economoy</li>
                    <li>550</li>
                </ul>
        `
    
        //!update total price
        newPrice += 550;
        totalPrice.innerText = newPrice;
    
        //! Enable coupon feild
        if(selectedSet.length > 3){
            couponBtn.removeAttribute('disabled')
            couponInput.removeAttribute('disabled')
        }
    }
    else{
        return alert('Max Seat Booked')
    }
    
}



//! coupon use 

document.getElementById('coupon-btn').addEventListener('click', () => {
    const couponValue = couponInput.value;
    let couponeSave = 0;

    // Corrected condition using &&
    if (couponValue !== 'NEW50' && couponValue !== 'Couple 20') {
        return alert('You are trying to use a wrong value');
    }

    if (couponValue === 'NEW50') {
        couponeSave = newPrice * 0.15; // Remove redeclaration of couponeSave
        newPrice -= couponeSave;
    }
    else if (couponValue === 'Couple 20') {
        couponeSave = newPrice * 0.20;
        newPrice -= couponeSave; // Update newPrice here as well
    }

    const grandPricetotal = newPrice;
    grandPrice.innerText = grandPricetotal;

    couponInput.classList.add('hidden');
    couponBtn.classList.add('hidden');
});



//! disable numebr feild

const phoneNumberfeild = document.getElementById('phone-number').value;
const formBtn = document.getElementById('form-btn');

formBtn.addEventListener('click', (e) => {
    if (phoneNumberfeild.length >= 11) {
        formBtn.removeAttribute('disabled');
    } else {
        formBtn.setAttribute('disabled', true);
    }
});

