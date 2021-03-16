const DOM = () => {
    const content = document.querySelector('#content')
    const headerDiv = document.createElement('div');
    const headerImg = document.createElement('img');
    const headerText = document.createElement('div');

    const h1 = document.createElement('h1');
    h1.textContent = "Restaurant Trattoria";
    const p = document.createElement('p');
    p.textContent = "Food tastes better when you eat with your family";

    headerDiv.id = 'main-img';
    headerText.id = 'header-text';
    headerImg.src = '../src/img/main-photo.png';

    headerText.appendChild(h1);
    headerText.appendChild(p);
    headerDiv.appendChild(headerImg);
    headerDiv.appendChild(headerText);
    content.appendChild(headerDiv);
}

export default DOM;