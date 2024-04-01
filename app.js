let form = document.getElementById("info_form");
let card = document.getElementById("show-card");
// let card = [];

form.addEventListener('submit', function(event){
    event.preventDefault();

    let Date = new FormData(event.target);
    let full_name = Date.get('first_name') + " " + Date.get('last_name');

    const add_card = document.createElement('div');
    add_card.classList.add('col');

    const card_temp = `
            <div class="card" ">
                <img src="user.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Info Card</h5>
                    <p><strong>Name:</strong> <span>${full_name}</span></p>
                    <p><strong>Email:</strong> <span>${Date.get('email')}</span></p>

                    <p><strong>Phone Number:</strong> <span>${Date.get('phone')}</span></p>

                    <p><strong>Date of Birth:</strong> <span>${Date.get('dob')}</span></p>

                    <p><strong>Gender:</strong> <span>${Date.get('gender')}</span></p>

                    <p><strong>Address:</strong> <span>${Date.get('address')}</span></p>

                </div>
            </div>
    `;

    add_card.innerHTML = card_temp;
    card.appendChild(add_card);

    event.target.reset();
    
})

