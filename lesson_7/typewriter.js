
let mainDiv = document.createElement('div');
let input = document.createElement('input');
let button = document.createElement('button');
let textArea = document.createElement('p');

document.body.appendChild(mainDiv);
mainDiv.append(input, button, textArea);

mainDiv.style.padding = '20px';
mainDiv.style.backgroundColor = 'green';
input.style.margin = '30px';
input.style.height = '30px';
button.style.width = '100px';
button.style.height = '30px';
button.innerText = 'CLICK';
textArea.style.width = '170px';
textArea.style.height = '80px';
textArea.style.backgroundColor = 'white';
textArea.style.marginLeft = '30px';


button.onclick = (ev) => {
    ev.preventDefault();
    let text = input.value;
    let space = String.fromCharCode(160);

    letter = i => new Promise(((resolve, reject) => setTimeout(() => {
        if(text[i] === undefined){
            reject('text[i] is undefined');
        }
        else{
            if(text[i] === ' '){
                textArea.textContent += space;
            }
            else{
                textArea.textContent += text[i];
            }
            i++;
            letter(i);
            resolve();
        }
        }, Math.round(Math.random()*1000))))

    async function typeWriter(){
        try{
            await letter(0);
        }
        catch(reason){
            console.log(reason);
        }
    }
    typeWriter();
}





