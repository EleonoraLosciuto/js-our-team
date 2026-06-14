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


