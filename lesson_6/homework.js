
// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//
//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/comments


//
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(posts => {
//
//         let postsDiv = document.createElement('div');
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
//             postsDiv.appendChild(postDiv);
//
//             postDiv.style.width = '400px';
//             postDiv.style.height = '250px';
//             postDiv.style.border = '3px solid darkgreen';
//             postDiv.style.marginTop = '40px';
//             postDiv.style.padding = '10px';
//             postDiv.style.fontSize = '20px';
//             postDiv.style.color = 'green';
//
//         }
//
//         document.body.appendChild(postsDiv);
//
//         postsDiv.style.display = 'flex';
//         postsDiv.style.flexWrap = 'wrap';
//         postsDiv.style.justifyContent = 'space-evenly';
//
//     })
//
//
//
// fetch('https://jsonplaceholder.typicode.com/comments')
//     .then(value => value.json())
//     .then(comments => {
//         let commentsDiv = document.createElement('div');
//
//         for (const comment of comments) {
//             let commentDiv = document.createElement('div');
//
//             for (const commentKey in comment) {
//                 let commentKeyDiv = document.createElement('div');
//                 commentKeyDiv.innerHTML = `<b>${commentKey}:</b> ${comment[commentKey]}`;
//                 commentDiv.appendChild(commentKeyDiv);
//
//                 commentKeyDiv.style.marginBottom = '5px';
//             }
//
//             commentsDiv.appendChild(commentDiv);
//
//             commentDiv.style.width = '400px';
//             commentDiv.style.height = '250px';
//             commentDiv.style.border = '3px solid darkred';
//             commentDiv.style.marginTop = '40px';
//             commentDiv.style.padding = '10px';
//             commentDiv.style.fontSize = '20px';
//             commentDiv.style.color = 'red';
//
//         }
//
//         document.body.appendChild(commentsDiv);
//
//         commentsDiv.style.display = 'flex';
//         commentsDiv.style.flexWrap = 'wrap';
//         commentsDiv.style.justifyContent = 'space-evenly';
//     })

