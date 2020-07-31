let askPrompt;
do{
    let li = document.createElement('li');
    askPrompt=  prompt("Введите текст элемента списка",'');
    li.innerText = askPrompt;
    ulk.append(li);
    }
while(askPrompt!= null);