let changeColor = $('changeColor');
chrome.storage.sync.get('color', function (data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function (element) {

    let color = element.target.value;
    console.log('color', color);

    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        chrome.tabs.executeScript(
            tabs[0].id,
            {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
};

let page = $('buttonDiv');
const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];

function constructOptions(kButtonColors) {
    for (let item of kButtonColors) {
        let button = document.createElement('button');
        button.style.backgroundColor = item;
        button.addEventListener('click', function () {
            chrome.storage.sync.set({color: item}, function () {
                console.log('color is1 ' + item);
                changeColor.setAttribute('value', item);
                changeColor.style.backgroundColor = item;
            })
        });
        page.appendChild(button);
    }
}

constructOptions(kButtonColors);