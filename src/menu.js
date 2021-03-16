const menu = () => {
    const content = document.querySelector('#tabs-content');

    const div = document.createElement('div');
    const para = document.createElement('p');

    para.textContent = "Some items and ingredients present on your menu are going to be a bit obscure, especially to some people who are unfamiliar with your style of cuisine and won’t want to risk spending money on something that they’re not going to like. However, you can use your menu description to describe the taste of these ingredients, making it far more likely that people are going to try it — or at least understand what it tastes like. This means using words like: hot, spicy, earthy, crunchy, melt-in-your-mouth, sweet, salty, dry, and other descriptive words."

    div.appendChild(para);
    content.appendChild(div);
}

export default menu;