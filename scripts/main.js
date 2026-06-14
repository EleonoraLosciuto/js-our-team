const memberCards = document.getElementById('cardsSection');


const teamMemberCardTemp = person => 
`
        <div class="team-member">
            <img src="./assets/${person.img}" alt="team-member pic">
            <div class="info-member">
                <p>${person.name}</p>
                <p>${person.role}</p>
                <a class="email" href="mailto:${person.email}" >${person.email}</a>
            </div>
        </div>
        `;


const renderTeam = () => {
    let htmlCards = "";
    
    for (let i = 0; i < teamMembers.length; i++) { // note: alternative option: for (const member of teamMembers)
    htmlCards += teamMemberCardTemp(teamMembers[i]);
}
    memberCards.innerHTML = htmlCards;
};

renderTeam();


// JS to add members through the form

// STEPS
// 1. Add the new member to array teamMembers and modify my database.js
// 2. Re-render team to match new list

// STEP 1.

const newMemberForm = document.getElementById('addNewMemberForm')
const newMemberName = document.querySelector('#name')
const newMemberRole = document.querySelector('#role')
const newMemberEmail = document.querySelector('#email')
const newMemberImg = document.querySelector('#img')


// Create function to use in event listener on form submit
const formSubmit = e => {
    e.preventDefault();

    const nameSub = newMemberName.value;
    const roleSub = newMemberRole.value;
    const emailSub = newMemberEmail.value;
    const imgSub = "img/" + newMemberImg.value;
    
    teamMembers.push({
        name: nameSub,
        role: roleSub,
        email: emailSub,
        img: imgSub,
    })
    renderTeam()
};

const submitMember = newMemberForm.addEventListener('submit', formSubmit);

console.log(teamMembers);

