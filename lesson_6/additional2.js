let userId = JSON.parse(localStorage.getItem('user.id'));

fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
    .then(value => value.json())
    .then(posts => {

        let postsDiv = document.createElement('div');

        for (const post of posts) {
            let postDiv = document.createElement('div');

            for (const postKey in post) {
                let postKeyDiv = document.createElement('div');
                postKeyDiv.innerHTML = `<b>${postKey}:</b> ${post[postKey]}`;
                postDiv.appendChild(postKeyDiv);

                postKeyDiv.style.marginBottom = '5px';
            }

            postsDiv.appendChild(postDiv);

            postDiv.style.width = '400px';
            postDiv.style.height = '250px';
            postDiv.style.border = '3px solid darkgreen';
            postDiv.style.marginTop = '40px';
            postDiv.style.padding = '10px';
            postDiv.style.fontSize = '20px';
            postDiv.style.color = 'green';

                        let btnComments = document.createElement('button');
                        btnComments.onclick = () => {
                            localStorage.setItem('post.id', JSON.stringify(post.id));
                            location.href = 'index3.html'
                        }
                        postDiv.appendChild(btnComments);
                        btnComments.style.width = '100px';
                        btnComments.style.height = '30px';
                        btnComments.style.backgroundColor = 'lightCoral';
                        btnComments.style.color = 'white';
                        btnComments.innerHTML = '<b>Comments</b>';
        }

        document.body.appendChild(postsDiv);

        postsDiv.style.display = 'flex';
        postsDiv.style.flexWrap = 'wrap';
        postsDiv.style.justifyContent = 'space-evenly';

    })