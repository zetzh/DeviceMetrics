const _ = element => document.querySelector(element);

const width = _('.width');
const height = _('.height');
const subWidth = _('.iconWidth');
const subHeight = _('.iconHeight');

function inner(element, text){element.innerHTML = text};
function ynner(element, text){element.innerHTML += text};


//width && Height
ynner(width, ` ${document.documentElement.clientWidth}px`);
ynner(height, ` ${document.documentElement.clientHeight}px`);

//svgs
function clipboard(element){ inner(element, `<title>Copy to the clipboard</title> <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" /><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />`); setTimeout(()=>{inner(element, `<title>Copy to the clipboard</title> <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" /><path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />`)}, 450)};

//copy
subWidth.onclick = () => {copy(`${document.documentElement.clientWidth}px`) 
    clipboard(subWidth)
};
subHeight.onclick = () => {copy(`${document.documentElement.clientHeight}px`);
    clipboard(subHeight)
};

function copy(value){
    let tempInput = document.createElement('input');
    tempInput.setAttribute('value', value)
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('Copy');
    
    document.body.removeChild(tempInput);
};