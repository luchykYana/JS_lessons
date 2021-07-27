
// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(posts => {
//
//         let postsBox = document.getElementsByClassName('posts-box')[0];
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