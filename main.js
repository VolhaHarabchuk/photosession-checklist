const items = [
    {
        id: 1,
        text: 'Dont dress reflective wear',
        checked: true,
    },
    {
        id: 2,
        text: 'Use pale makeup',
        checked: false,
    },
    {
        id: 3,
        text: 'Take makeup with you',
        checked: false,
    }
];

function renderChecklist(elementId, items) {
    const containerDiv = document.getElementById(elementId);
    for(let i=0; i<items.length; i++) {
        const itemElement = createItemElement(items[i]);
        console.log({itemElement})
        containerDiv.appendChild(itemElement);
    }
}

function createItemElement(item) {
    const div = document.createElement('div');
    const checked = item.checked ? 'checked' : ''
    div.innerHTML = `
        <input type="checkbox" ${checked}>
        <label>${item.text}</lable>
    `;
    return div
}
