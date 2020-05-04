const items = [
    {
        text: 'Dont dress reflective clothes',
        explanation: 'Reflective clothes may affect photos by reflecting unexpected light',
        important: true,
    },
    {
        text: 'Sleep well before the session',
        important: true,
    },
    {
        text: 'Wash your head',
        important: true,
    },
    {
        text: 'Use pale makeup',
    },
    {
        text: 'Take makeup with you',
    },
    {
        text: 'Take toys with you',
        explanation: '',
        family: true,
    },
    {
        text: 'Try to wear matching colors for the whole family',
        important: true,
        family: true,
    },
    {
        text: 'Use the same style of dressing for the whole family',
        family: true,
    },
    {
        text: 'Choose comfortable closes that make you feel beautiful',
        important: true
    },
    {
        text: 'Make an appointment at a good salon to get your hair and makeup done there',
    }
    
];

function renderChecklist(elementId, items, showFamilyItems=true) {
    const containerDiv = document.getElementById(elementId);
    containerDiv.innerHTML = '';
    for(let i=0; i < items.length; i++) {
        const item = items[i];
        if (!showFamilyItems && item.family) {
            continue;
        }
        const itemElement = createItemElement(item);
        containerDiv.appendChild(itemElement);
    }
}

function createItemElement(item) {
    const div = document.createElement('div');
    const checked = item.checked ? 'checked' : '';
    const badge = item.important ? '<span class="badge badge-warning">Important</span>': '';
    div.innerHTML = `
        <input type="checkbox" ${checked}>
        <label>${item.text}</label>
        ${badge}
    `;
    return div;
}

function getSelectorValue(elementId) {
    const element = document.getElementById(elementId);
    return element.value;
}
