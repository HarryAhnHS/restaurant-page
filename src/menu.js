import Menu from './menu.jpeg';

const menuPage = () => {
    const homeContent = document.getElementById('content');

    const menuTitle = document.createElement('h2');
    menuTitle.setAttribute('class','menu-title')
    menuTitle.textContent = "Menu";

    const menuImgWrapper = document.createElement('div');
    menuImgWrapper.setAttribute('class','menu-img');
    
    const menuImg = document.createElement('img');
    menuImg.setAttribute('src', Menu);

    menuImgWrapper.appendChild(menuImg);


    homeContent.appendChild(menuTitle);
    homeContent.appendChild(menuImgWrapper);
};

export default menuPage;