let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenValue = "" ;
for(item of buttons) {
    item.addEventListener("click" , (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ',buttonText);
        
        if (buttonText == 'x') {
            buttonText = '*';
            screenValue += buttonText;
            input.addEventListener('keydown', function(event) {
                const key = event.key; // const {key} = event; ES6+
                if (key === "Backspace") {
            
                  alert(key);
                  return false;
                }
              });
                   screen.value = screenValue;
            
        }
        else if (buttonText == 'C') {
            screenValue = "";
            screen.value = screenValue;
        }
        else if (buttonText == '=') {
            screen.value = eval(screenValue);
        }
        else {
            screenValue += buttonText;
            screen.value = screenValue;
        }
    })

}
