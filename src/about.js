import About from './about.jpeg';

const aboutPage = () => {
    const homeContent = document.getElementById('content');

    const aboutWrapper = document.createElement('div');
    aboutWrapper.setAttribute('class','about-wrapper');

    const aboutImgWrapper = document.createElement('div');
    aboutImgWrapper.setAttribute('class','about-img');
    
    const aboutImg = document.createElement('img');
    aboutImg.setAttribute('src', About);

    aboutImgWrapper.appendChild(aboutImg);

    const aboutStory = document.createElement('div');
    aboutStory.setAttribute('class','about-story');

    const h2 = document.createElement('h2');
    h2.textContent = "Our Story";
    const p = document.createElement('p');
    p.textContent = "Located on Gage Street, in the heart of Cental wet market, ZANCHEE reaches out to both commercial and residential customers, serving office crowds during the lunch hours, and home cooks throughout the day. Introducing over 50 banchan (Korean side dishes) to customers and broadening their experience and knowledge about various Korean dishes!";

    aboutStory.appendChild(h2);
    aboutStory.appendChild(p);
    
    aboutWrapper.appendChild(aboutImgWrapper);
    aboutWrapper.appendChild(aboutStory);

    homeContent.appendChild(aboutWrapper);
};

export default aboutPage;