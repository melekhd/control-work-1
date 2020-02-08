let getSel = s => document.querySelector(s);

getSel('.button1').onclick = function () {
    getSel('.editBlock').style.display = 'block';
    getSel('.div3').style.display = 'none';
    getSel('#area').value = getSel('#lorem').innerHTML;
}
getSel('.save').onclick = function () {
    getSel('#lorem').innerHTML = getSel('#area').value;
    getSel('.editBlock').style.display = 'none';
}

getSel('.button2').onclick = function () {
    getSel('.editBlock').style.display = 'none';
    getSel('.div3').style.display = 'flex';
}

let f3 = document.forms['f3'];
for (let i = 0; i < f3.length; i++) {
    console.log('f3.elements[i]')
    f3.elements[i].onclick = function () {
        getSel('#lorem').style.fontSize = this.value;
    }
}

getSel('#fontSize').onchange = function () {
    getSel('#lorem').style.fontFamily = getSel('#fontSize').value;
}

let block = document.getElementsByClassName('block');
let arrC = ['green', 'red', 'yellow', 'coral', 'pink', 'black', 'greenyellow', 'purple', 'aqua'];

getSel('.color').onclick = function () {
    getSel('.box').style.visibility = 'visible';
    for (let i = 0; i < arrC.length; i++) {
        block[i].style.background = arrC[i];
    }
    for (let i = 0; i < arrC.length; i++) {
        block[i].onclick = function () {
            getSel('#lorem').style.color = arrC[i];
            getSel('.box').style.visibility = 'hidden';
        }
    }
}

getSel('.background').onclick = function () {
    getSel('.box').style.visibility = 'visible';
    for (let i = 0; i < arrC.length; i++) {
        block[i].style.background = arrC[i];
    }
    for (let i = 0; i < arrC.length; i++) {
        block[i].onclick = function () {
            getSel('#lorem').style.background = arrC[i];
            getSel('.box').style.visibility = 'hidden';
        }
    }
}

document.getElementsByClassName('bold');
getSel('.bold').onclick = function () {
    if (this.checked) {
        getSel('.lorem').style.fontWeight = 'bold';
    } else {
        getSel('.lorem').style.fontWeight = 'normal';
    }
}

document.getElementsByClassName('cursive');
getSel('.cursive').onclick = function () {
    if (this.checked) {
        getSel('.lorem').style.fontStyle = 'italic';
    } else {
        getSel('.lorem').style.fontStyle = 'normal';
    }
}

getSel('.add').onclick = function () {
    getSel('.container1').style.display = 'none';
    getSel('.box2').style.display = "block";
}

getSel('.table').onclick = function () {
    getSel('.table1').style.display = 'block';
    getSel('.list1').style.display = 'none';
}

getSel('.list2').onclick = function () {
    getSel('.table1').style.display = 'none';
    getSel('.list1').style.display = 'block';
};

let f7 = document.forms['f7'].elements;
let f8 = document.forms['f8'].elements;
getSel('.button5').onclick = function () {
    getSel('.container1').style.display = 'block';
    getSel('.box2').style.display = 'none';

    let table = document.createElement('table');
    getSel('.clear').appendChild(table);
    for (let i = 0; i < f7[0].value; i++) {
        tr = document.createElement('tr');
        for (let a = 0; a < f7[1].value; a++) {
            td = document.createElement('td');
            tr.appendChild(td);
            td.textContent = 'TD';
            td.style.width = f7[2].value + 'px';
            td.style.height = f7[3].value + 'px';
            td.style.textAlign = 'center';
            for (let i = 0; i < f8[1].length; i++) {
                if (f8[1][i].selected) {
                    td.style.border = f8[0].value + "px " + f8[1][i].value;
                }
            }
            for (let i = 0; i < f8[2].length; i++) {
                if (f8[2][i].selected) {
                    td.style.borderColor = f8[2][i].value;
                }
            }
        }
        table.appendChild(tr);
    }
    getSel('#area').value += getSel('.clear').innerHTML;
    getSel("table").remove();
    document.forms['f7'].reset();
    document.forms['f8'].reset();
}

let f9 = document.forms['f9'].elements;
getSel('.button6').onclick = function () {
    getSel('.box2').style.display = "none";
    getSel('.container1').style.display = "block";
    let ul = document.createElement('ul');
    getSel('.clear').appendChild(ul);
    for (i = 0; i < f9[0].value; i++) {
        li = document.createElement('li');
        ul.appendChild(li);
        li.textContent = 'item ' + (i + 1);

    }
    for (let i = 0; i < f9[1].length; i++) {
        if (f9[1][i].selected) {
            ul.style.listStyle = f9[1][i].value;
        }
    }
    getSel('#area').value += getSel('.clear').innerHTML;
    getSel("ul").remove();
    document.forms['f9'].reset();
}