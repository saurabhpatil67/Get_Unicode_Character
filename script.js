const btn = document.getElementById('btn');
const inputText = document.getElementById('input-text');
const result = document.getElementById('result');

btn.addEventListener('click', function () {

    const inputValue = inputText.value;
    // console.log(getValue)

    if (inputValue) {
        const unicodeValue = inputValue.charCodeAt(0)
        // console.log(unicodeValue)
        result.textContent = ` The Unicode value of  "${inputValue}" is ${unicodeValue}  `;

    } else {
        result.textContent = 'Please Enter Any Character';
    }


});