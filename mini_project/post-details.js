
const url = new URL(location);
const mail = JSON.parse(url.searchParams.get('post'));

let postDiv = document.createElement('div');

for (const key in mail) {
    let keyDiv = document.createElement('p');
    keyDiv.innerHTML = `<span class="red">${key}:</span> ${mail[key]}`;
    postDiv.appendChild(keyDiv);
}

let commentsDiv = document.createElement('div');

fetch(`https://jsonplaceholder.typicode.com/posts/${mail.id}/comments`)
    .then(value => value.json())
    .then(comments => {
        for (const comment of comments) {
            let commentDiv = document.createElement('div');
            for (const key in comment) {
                let rowDiv = document.createElement('p');
                rowDiv.innerHTML = `<span class="blue">${key}:</span> ${comment[key]}`;
                commentDiv.appendChild(rowDiv);
                rowDiv.style.marginBottom = '5px';
            }
            commentsDiv.appendChild(commentDiv);
            commentDiv.style.width = '330px';
            commentDiv.style.height = '350px';
            commentDiv.style.backgroundColor = '#2D4159';
            commentDiv.style.color = 'white';
            commentDiv.style.padding = '20px';
            commentDiv.style.fontSize = '20px';
            commentDiv.style.marginBottom = '33px';
        }
    })

document.body.append(postDiv, commentsDiv);



postDiv.style.backgroundColor = '#59253A';
postDiv.style.color = 'white';
postDiv.style.fontSize = '30px';
postDiv.style.margin = '50px';
postDiv.style.padding = '40px';

commentsDiv.style.margin = '50px';
commentsDiv.style.display = 'flex';
commentsDiv.style.flexWrap = 'wrap';
commentsDiv.style.gridColumnGap = '33px';

document.body.style.paddingBottom = '40px';


