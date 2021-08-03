
if(window.matchMedia("(min-width: 1400px)").matches){
    let h = document.createElement('h1');
    h.innerHTML = 'XXL';
    document.body.appendChild(h);

    let mainDiv = document.createElement('div');

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(users => {
            for (const user of users) {

                let userDiv = document.createElement('div');
                let userId = document.createElement('p');
                let userName = document.createElement('p');
                let userInfo = document.createElement('div');
                let btnUserDetails = document.createElement('button');

                userId.innerHTML = `${user.id}.`;
                userName.innerHTML = `${user.name}`;
                btnUserDetails.innerHTML = 'details';

                btnUserDetails.onmouseover = () => {
                    btnUserDetails.style.border = '1px solid #59253A';
                    btnUserDetails.style.backgroundColor = 'white';
                    btnUserDetails.style.color = '#59253A';
                    btnUserDetails.style.transition = 'background-color 500ms, color 500ms';
                    btnUserDetails.style.cursor = 'pointer';
                }
                btnUserDetails.onmouseleave = () => {
                    btnUserDetails.style.backgroundColor = '#78244C';
                    btnUserDetails.style.border = '1px solid white';
                    btnUserDetails.style.color = 'white';
                    btnUserDetails.style.transition = 'background-color 500ms, color 500ms';
                    btnUserDetails.style.cursor = 'pointer';
                }
                btnUserDetails.onclick = () => {
                    location.href = `user-details.html?user=${JSON.stringify(user)}`;
                }

                userInfo.append(userId, userName);
                userDiv.append(userInfo, btnUserDetails);
                mainDiv.appendChild(userDiv);

                userDiv.style.width = '600px';
                userDiv.style.height = '170px';
                userDiv.style.marginTop = '40px';
                userDiv.style.padding = '20px';
                userDiv.style.backgroundColor = '#59253A';
                userDiv.style.color = 'white';
                userDiv.style.fontSize = '40px';
                userInfo.style.display = 'flex';
                userInfo.style.justifyContent = 'center';
                btnUserDetails.style.width = '50%';
                btnUserDetails.style.height = '50px';
                btnUserDetails.style.marginTop = '20px';
                btnUserDetails.style.display = 'block';
                btnUserDetails.style.marginLeft = 'auto';
                btnUserDetails.style.marginRight = 'auto';
                btnUserDetails.style.fontSize = '25px';
                btnUserDetails.style.backgroundColor = '#78244C';
                btnUserDetails.style.border = '1px solid white';
                btnUserDetails.style.borderRadius = '10px';
                btnUserDetails.style.color = 'white';
                userId.style.marginRight = '10px';
            }
        })

    document.body.appendChild(mainDiv);

    mainDiv.style.display = 'flex';
    mainDiv.style.flexWrap = 'wrap';
    mainDiv.style.justifyContent = 'space-evenly';
    document.body.style.paddingBottom = '40px';

}else if(window.matchMedia("(min-width: 1200px)").matches){
    let h = document.createElement('h1');
    h.innerHTML = 'XL';
    document.body.appendChild(h);

    let mainDiv = document.createElement('div');

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
        .then(users => {
            for (const user of users) {

                let userDiv = document.createElement('div');
                let userId = document.createElement('p');
                let userName = document.createElement('p');
                let userInfo = document.createElement('div');
                let btnUserDetails = document.createElement('button');

                userId.innerHTML = `${user.id}.`;
                userName.innerHTML = `${user.name}`;
                btnUserDetails.innerHTML = 'details';

                btnUserDetails.onmouseover = () => {
                    btnUserDetails.style.border = '1px solid #59253A';
                    btnUserDetails.style.backgroundColor = 'white';
                    btnUserDetails.style.color = '#59253A';
                    btnUserDetails.style.transition = 'background-color 500ms, color 500ms';
                    btnUserDetails.style.cursor = 'pointer';
                }
                btnUserDetails.onmouseleave = () => {
                    btnUserDetails.style.backgroundColor = '#78244C';
                    btnUserDetails.style.border = '1px solid white';
                    btnUserDetails.style.color = 'white';
                    btnUserDetails.style.transition = 'background-color 500ms, color 500ms';
                    btnUserDetails.style.cursor = 'pointer';
                }
                btnUserDetails.onclick = () => {
                    location.href = `user-details.html?user=${JSON.stringify(user)}`;
                }

                userInfo.append(userId, userName);
                userDiv.append(userInfo, btnUserDetails);
                mainDiv.appendChild(userDiv);

                userDiv.style.width = '500px';
                userDiv.style.height = '170px';
                userDiv.style.marginTop = '40px';
                userDiv.style.padding = '20px';
                userDiv.style.backgroundColor = '#59253A';
                userDiv.style.color = 'white';
                userDiv.style.fontSize = '35px';
                userInfo.style.display = 'flex';
                userInfo.style.justifyContent = 'center';
                btnUserDetails.style.width = '50%';
                btnUserDetails.style.height = '40px';
                btnUserDetails.style.marginTop = '30px';
                btnUserDetails.style.display = 'block';
                btnUserDetails.style.marginLeft = 'auto';
                btnUserDetails.style.marginRight = 'auto';
                btnUserDetails.style.fontSize = '20px';
                btnUserDetails.style.backgroundColor = '#78244C';
                btnUserDetails.style.border = '1px solid white';
                btnUserDetails.style.borderRadius = '10px';
                btnUserDetails.style.color = 'white';
                userId.style.marginRight = '10px';
            }
        })

    document.body.appendChild(mainDiv);

    mainDiv.style.display = 'flex';
    mainDiv.style.flexWrap = 'wrap';
    mainDiv.style.justifyContent = 'space-between';
    mainDiv.style.padding = '20px 60px';
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