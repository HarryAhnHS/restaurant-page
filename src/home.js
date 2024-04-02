import menuPage from "./menu";

const homePage = () => {
    const homeContent = document.getElementById('content');

    const homeTitle = document.createElement('div');
    homeTitle.setAttribute('class','home-title');
    homeTitle.textContent = "Zan Chee (잔치)";

    const spacer = document.createElement('div');
    spacer.setAttribute('class','spacer');

    const homeDescription = document.createElement('div');
    homeDescription.setAttribute('class','home-desc');

    const p1 = document.createElement('p');
    p1.textContent = "Welcome to Zan Chee, a casual eatery bringing authentic Korean cuisine to you.";
    const p2 = document.createElement('p');
    p2.textContent = "Zan Chee (잔치) : Celebration in Korean"
    const p3 = document.createElement('p');
    p3.textContent = "We serve traditional dishes that embody the Korean spirit of festivity and community."

    homeDescription.appendChild(p1);
    homeDescription.appendChild(p2);
    homeDescription.appendChild(p3);

    const menuButtonContainer = document.createElement('div');
    menuButtonContainer.setAttribute('class','menu-button');

    const menuButton = document.createElement('button');
    menuButton.setAttribute('id','seeMenu');
    menuButton.textContent = "See Menu";
    
    menuButton.addEventListener('click', () => {
        content.innerHTML = "";
        menuPage();
    });
    
    
    menuButtonContainer.appendChild(menuButton);

    homeContent.appendChild(homeTitle);
    homeContent.appendChild(spacer);
    homeContent.appendChild(homeDescription);
    homeContent.appendChild(menuButtonContainer);
};

export default homePage;