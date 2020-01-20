const article = document.createElement('article');
article.className = "messages";

const messages = ['Are we doing fireworks this year?', `After last year's "tree incident", should we?`, `The fire fighters put it out in like a minute. Wasn't even a real fire.`, `We can set them off in the street.`, `Our neighbors' houses are flammable, too`];



// for (let i = 0; i <messages.length; i++) {
//     const articleID = document.querySelector('.messages');
//     const sections = document.createElement('section');
//     sections.className = "message";
//     sections.textContent=messages[i];
//     article.appendChild(sections);
// }
// document.body.appendChild(article);


const fragment = document.createDocumentFragment();
for (let i = 0; i <messages.length; i++) {
    const sections = document.createElement('section');
    sections.textContent = messages[i];
    fragment.appendChild(sections);
}
document.body.appendChild(fragment)







