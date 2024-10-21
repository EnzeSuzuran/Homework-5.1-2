function displayName() {
    const savedName = localStorage.getItem('username');
    if (savedName) {
        document.getElementById('greeting').innerText = `Привет, ${savedName}!`;
    }
}

function saveName() {
    const nameInput = document.getElementById('nameInput').value;
    localStorage.setItem('username', nameInput);
    displayName();
}

document.getElementById('saveButton').addEventListener('click', saveName);

displayName();
