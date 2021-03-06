// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        let usersBox = document.getElementsByClassName('users-box')[0];

        for (const user of users) {
            let userDiv = document.createElement('div');

            for (const userKey in user) {
                let userKeyDiv = document.createElement('div');
                if(typeof user[userKey] !== 'object'){
                    userKeyDiv.innerHTML = `<b>${userKey}:</b> ${user[userKey]}`;
                }
                else{
                    userKeyDiv.innerHTML = `<b>${userKey}:</b>`;

                    for (const userKeyElement in user[userKey]) {
                        let userKeyElementDiv = document.createElement('div');

                        if(typeof user[userKey][userKeyElement] !== 'object'){
                            userKeyElementDiv.innerHTML = `<b>${userKeyElement}</b>: ${user[userKey][userKeyElement]}`;
                        }
                        else{
                            userKeyElementDiv.innerHTML = `<b>${userKeyElement}:</b>`;

                            for (const userKeyElementKey in user[userKey][userKeyElement]) {
                                let userKeyElementKeyDiv = document.createElement('div');

                                userKeyElementKeyDiv.innerHTML = `<b>${userKeyElementKey}</b>: ${user[userKey][userKeyElement][userKeyElementKey]}`;

                                userKeyElementDiv.appendChild(userKeyElementKeyDiv);
                                userKeyElementKeyDiv.style.marginLeft = '20px';
                            }
                        }

                        userKeyDiv.appendChild(userKeyElementDiv);
                        userKeyElementDiv.style.marginLeft = '20px';
                    }
                }

                userDiv.appendChild(userKeyDiv);

                userKeyDiv.style.marginBottom = '5px';
            }

             let btnPosts = document.createElement('button');

            btnPosts.onclick = () => {
                localStorage.setItem('user.id', JSON.stringify(user.id));
                location.href = 'index2.html';
                // fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                //     .then(value => value.json())
                //     .then(posts => {
                //         let postsBox = document.getElementsByClassName('posts-box')[0];
                //
                //         postsBox.innerHTML = '';
                //
                //         for (const post of posts) {
                //             let postDiv = document.createElement('div');
                //
                //             for (const postKey in post) {
                //                 let postKeyDiv = document.createElement('div');
                //                 postKeyDiv.innerHTML = `<b>${postKey}:</b> ${post[postKey]}`;
                //                 postDiv.appendChild(postKeyDiv);
                //
                //                 postKeyDiv.style.marginBottom = '5px';
                //             }
                //
                //             postsBox.appendChild(postDiv);
                //
                //             postDiv.style.width = '400px';
                //             postDiv.style.height = '250px';
                //             postDiv.style.border = '3px solid darkgreen';
                //             postDiv.style.marginTop = '40px';
                //             postDiv.style.padding = '10px';
                //             postDiv.style.fontSize = '20px';
                //             postDiv.style.color = 'green';
                //
                //
                //             let btnComments = document.createElement('button');
                //             btnComments.onclick = () => {
                //                 fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments/`)
                //                     .then(value => value.json())
                //                     .then(comments => {
                //
                //
                //
                //                         let commentsBox = document.getElementsByClassName('comments-box')[0];
                //                         commentsBox.innerHTML = '';
                //
                //
                //                         for (const comment of comments) {
                //                             let commentDiv = document.createElement('div');
                //
                //                             for (const commentKey in comment) {
                //                                 let commentKeyDiv = document.createElement('div');
                //                                 commentKeyDiv.innerHTML = `<b>${commentKey}:</b> ${comment[commentKey]}`;
                //                                 commentDiv.appendChild(commentKeyDiv);
                //
                //
                //                                 commentKeyDiv.style.marginBottom = '5px';
                //                             }
                //
                //                             commentsBox.appendChild(commentDiv);
                //
                //                             commentDiv.style.width = '400px';
                //                             commentDiv.style.height = '250px';
                //                             commentDiv.style.border = '3px solid darkred';
                //                             commentDiv.style.marginTop = '40px';
                //                             commentDiv.style.padding = '10px';
                //                             commentDiv.style.fontSize = '20px';
                //                             commentDiv.style.color = 'red';
                //
                //                         }
                //
                //                         commentsBox.style.display = 'flex';
                //                         commentsBox.style.flexWrap = 'wrap';
                //                         commentsBox.style.justifyContent = 'space-evenly';
                //                     })
                //             }
                //
                //             postDiv.appendChild(btnComments);
                //
                //             btnComments.style.width = '100px';
                //             btnComments.style.height = '30px';
                //             btnComments.style.backgroundColor = 'lightCoral';
                //             btnComments.style.color = 'white';
                //             btnComments.innerHTML = '<b>Comments</b>';
                //
                //         }
                //
                //         postsBox.style.display = 'flex';
                //         postsBox.style.flexWrap = 'wrap';
                //         postsBox.style.justifyContent = 'space-evenly';
                //
                //     })
            }

            userDiv.appendChild(btnPosts);
            usersBox.appendChild(userDiv);


            btnPosts.style.width = '100px';
            btnPosts.style.height = '30px';
            btnPosts.style.backgroundColor = 'darkGreen';
            btnPosts.style.color = 'white';
            btnPosts.innerHTML = '<b>Posts</b>';


            userDiv.style.width = '400px';
            userDiv.style.height = '500px';
            userDiv.style.border = '3px solid darkblue';
            userDiv.style.marginTop = '40px';
            userDiv.style.padding = '10px';
            userDiv.style.fontSize = '20px';
            userDiv.style.color = 'blue';
        }

        usersBox.style.display = 'flex';
        usersBox.style.flexWrap = 'wrap';
        usersBox.style.justifyContent = 'space-evenly';
    })