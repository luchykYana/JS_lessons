
const url = new URL(location);
const mail = JSON.parse(url.searchParams.get('post'));

let postDiv = document.createElement('div');


if(window.matchMedia("(min-width: 1400px)").matches){
    let h = document.createElement('h1');
    h.innerHTML = 'XXL';
    document.body.appendChild(h);

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
    commentsDiv.style.justifyContent = 'space-between';

    document.body.style.paddingBottom = '40px';


}else if(window.matchMedia("(min-width: 1200px)").matches){
    let h = document.createElement('h1');
    h.innerHTML = 'XL';
    document.body.appendChild(h);

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
                commentDiv.style.width = '250px';
                commentDiv.style.height = '330px';
                commentDiv.style.backgroundColor = '#2D4159';
                commentDiv.style.color = 'white';
                commentDiv.style.padding = '20px';
                commentDiv.style.fontSize = '16px';
                commentDiv.style.marginBottom = '33px';
            }
        })

    document.body.append(postDiv, commentsDiv);



    postDiv.style.backgroundColor = '#59253A';
    postDiv.style.color = 'white';
    postDiv.style.fontSize = '25px';
    postDiv.style.margin = '50px';
    postDiv.style.padding = '40px';

    commentsDiv.style.margin = '50px';
    commentsDiv.style.display = 'flex';
    commentsDiv.style.flexWrap = 'wrap';
    commentsDiv.style.justifyContent = 'space-between';

    document.body.style.paddingBottom = '40px';

}else if(window.matchMedia("(min-width: 992px)").matches){
    let h = document.createElement('h1');
    h.innerHTML = 'LG';
    document.body.appendChild(h);
}else if(window.matchMedia("(min-width: 768px)").matches){
    let h = document.createElement('h1');
    h.innerHTML = 'MD';
    document.body.appendChild(h);
}else if(window.matchMedia("(min-width: 576px)").matches){
    let h = document.createElement('h1');
    h.innerHTML = 'SM';
    document.body.appendChild(h);
}else {
    let h = document.createElement('h1');
    h.innerHTML = 'XS';
    document.body.appendChild(h);
}
