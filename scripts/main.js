const memberCards = document.getElementById('cardsSection');
console.table(teamMembers);


let htmlCards = "";

for (let i = 0; i < teamMembers.length; i++) {
     htmlCards += `
        <div class="team-member">
            <img src="./assets/${teamMembers[i].img}" alt="team-member pic">
            <div class="info-member">
                <p>${teamMembers[i].name}</p>
                <p>${teamMembers[i].role}</p>
                <a class="email" href="mailto:${teamMembers[i].email}" >${teamMembers[i].email}</a>
            </div>
        </div>
        `
    };

memberCards.innerHTML = htmlCards;


