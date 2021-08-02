
const url = new URL(location);
const person = JSON.parse(url.searchParams.get('user'));

let personDiv = document.createElement('div');
let btnPosts = document.createElement('button');
btnPosts.innerHTML = 'Posts of current user';

for (const key in person) {
    let keyDiv = document.createElement('p');

    if(typeof person[key] !== 'object'){
        keyDiv.innerHTML = `<span>${key}:</span> ${person[key]}`;
    }else{
        keyDiv.innerHTML = `<span>${key}:</span>`;

        for (const item in person[key]) {
            let itemDiv = document.createElement('p');

            if(typeof person[key][item] !== 'object'){
                itemDiv.innerHTML = `<span>${item}:</span> ${person[key][item]}`;
            }else{
                itemDiv.innerHTML = `<span>${item}:</span>`;
                for (const point in person[key][item]) {
                    let pointDiv = document.createElement('p');
                    pointDiv.innerHTML = `<span>${point}:</span> ${person[key][item][point]}`;
                    itemDiv.appendChild(pointDiv);
                }

                itemDiv.style.marginLeft = '100px';
            }

            keyDiv.appendChild(itemDiv);

        }
        keyDiv.style.marginLeft = '80px';
    }
    personDiv.appendChild(keyDiv);
}

let postsBox = document.createElement('div');

btnPosts.onclick = () => {
    fetch(`https://jsonplaceholder.typicode.com/user/${person.id}/posts`)
        .then(value => value.json())
        .then(posts => {
            postsBox.innerHTML = '';

            for (const post of posts) {
                let btnPost = document.createElement('button');
                let postBox = document.createElement('div');
                let postTitle = document.createElement('p')

                postTitle.innerHTML = `${post.title}`;
                btnPost.innerHTML = 'details';

                postBox.append(postTitle,btnPost);
                postsBox.appendChild(postBox);

                btnPost.onclick = () => {
                    location.href = `post-details.html?post=${JSON.stringify(post)}`;
                }
                btnPost.onmouseover = () => {
                    btnPost.style.border = '1px solid #895061';
                    btnPost.style.backgroundColor = 'white';
                    btnPost.style.color = '#2D4159';
                    btnPost.style.transition = 'background-color 500ms, color 500ms';
                    btnPost.style.cursor = 'pointer';
                }
                btnPost.onmouseleave = () => {
                    btnPost.style.backgroundColor = '#0677A1';
                    btnPost.style.border = '1px solid white';
                    btnPost.style.color = 'white';
                    btnPost.style.transition = 'background-color 500ms, color 500ms';
                    btnPost.style.cursor = 'pointer';
                }
                postBox.style.width = '228px';
                postBox.style.height = '170px';
                postBox.style.padding = '20px';
                postBox.style.backgroundColor = '#2D4159';
                postBox.style.color = 'white';
                postBox.style.marginBottom = '20px';
                postBox.style.fontSize = '18px';

                postTitle.style.height = '100px';
                postTitle.style.textAlign = 'center';

                btnPost.style.width = '100%';
                btnPost.style.height = '32px';
                btnPost.style.border = '1px solid white';
                btnPost.style.borderRadius = '5px';
                btnPost.style.backgroundColor = '#0677A1';
                btnPost.style.color = 'white';
                btnPost.style.fontSize = '18px';
            }
            document.body.appendChild(postsBox);
        })
}

btnPosts.onmouseover = () => {
    btnPosts.style.border = '1px solid #895061';
    btnPosts.style.backgroundColor = 'white';
    btnPosts.style.color = '#78244C';
    btnPosts.style.transition = 'background-color 500ms, color 500ms';
    btnPosts.style.cursor = 'pointer';
}
btnPosts.onmouseleave = () => {
    btnPosts.style.backgroundColor = '#895061';
    btnPosts.style.border = '1px solid white';
    btnPosts.style.color = 'white';
    btnPosts.style.transition = 'background-color 500ms, color 500ms';
    btnPosts.style.cursor = 'pointer';
}

personDiv.appendChild(btnPosts);
document.body.appendChild(personDiv);

personDiv.style.marginLeft = 'auto';
personDiv.style.marginRight = 'auto';
personDiv.style.marginTop = '40px';
personDiv.style.width = '1300px';
personDiv.style.padding = '50px';
personDiv.style.backgroundColor = '#78244C';
personDiv.style.color = 'white';
personDiv.style.fontSize = '30px';

btnPosts.style.width = '100%';
btnPosts.style.height = '100px';
btnPosts.style.fontSize = '40px';
btnPosts.style.backgroundColor = '#895061';
btnPosts.style.color = 'white';
btnPosts.style.border = '1px solid white';
btnPosts.style.borderRadius = '15px';
btnPosts.style.display = 'block';
btnPosts.style.margin = '40px';
btnPosts.style.marginLeft = 'auto';
btnPosts.style.marginRight = 'auto';


postsBox.style.display = 'flex';
postsBox.style.flexWrap = 'wrap';
postsBox.style.gridColumnGap = '40px';
postsBox.style.width = '1300px';
postsBox.style.marginLeft = 'auto';
postsBox.style.marginRight = 'auto';
postsBox.style.marginTop = '40px';

document.body.style.paddingBottom = '40px';
