const contact = () => {
    const content = document.querySelector('#tabs-content');

    const div = document.createElement('div');
    const para = document.createElement('p');

    para.textContent = "Contact us after a couple of years. We're still in the development process.";

    div.appendChild(para);
    content.appendChild(div);
}

export default contact;