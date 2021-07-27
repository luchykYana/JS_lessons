
let postId = JSON.parse(localStorage.getItem('post.id'));

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments/`)
    .then(value => value.json())
    .then(comments => {
        let commentsDiv = document.createElement('div');

        for (const comment of comments) {
            let commentDiv = document.createElement('div');

            for (const commentKey in comment) {
                let commentKeyDiv = document.createElement('div');
                commentKeyDiv.innerHTML = `<b>${commentKey}:</b> ${comment[commentKey]}`;
                commentDiv.appendChild(commentKeyDiv);

                commentKeyDiv.style.marginBottom = '5px';
            }

            commentsDiv.appendChild(commentDiv);

            commentDiv.style.width = '400px';
            commentDiv.style.height = '250px';
            commentDiv.style.border = '3px solid darkred';
            commentDiv.style.marginTop = '40px';
            commentDiv.style.padding = '10px';
            commentDiv.style.fontSize = '20px';
            commentDiv.style.color = 'red';

        }

        document.body.appendChild(commentsDiv);

        commentsDiv.style.display = 'flex';
        commentsDiv.style.flexWrap = 'wrap';
        commentsDiv.style.justifyContent = 'space-evenly';
    })
