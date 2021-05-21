var tick = document.querySelectorAll('input');
console.log(tick)
//inputları tutan array
let inputs = [];
//inputların değerini tutan array
let inputValues = [];
//checked values
let values = [];
inputs.push(...tick);
for (let i = 0; i < inputs.length; i++) {
    var deger = inputs[i].value;
    inputValues.push(deger);
}
function check(e) {
    let willChecked = [];
    var deger = e.target.value;
    const index = values.indexOf(deger);
    //check ve unchecked durumlarında değerleri values içine atar veya siler
    if (e.target.checked) {
        values.push(deger);
    } else {
        if (index > -1) {
            values.splice(index, 1);
        }
    }
    if (values[0] > values[1] && e.shiftKey) {
        willChecked.push(...inputValues.filter(karsılastır => karsılastır < values[0] && karsılastır > values[1]));
        for (let item in willChecked) {
            inputs[parseInt(willChecked[item])-1].checked = true;
         }
    }
    if (values[1] > values[0] && e.shiftKey) {
        willChecked.push(...inputValues.filter(karsılastır => karsılastır > values[0] && values[1] > karsılastır));
        for (let item in willChecked) {
            inputs[parseInt(willChecked[item])-1].checked = true;
        }
    }
}
tick.forEach(a => a.addEventListener('click', check));
