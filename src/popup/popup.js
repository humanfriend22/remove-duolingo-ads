const [b1, b2] = document.querySelectorAll('button');

const id = () => new Promise((resolve) => {
    chrome.tabs.query({ active: true, currentWindow: true }, async ([{ id }]) => resolve(id));
});

b1.onclick = async () => chrome.tabs.sendMessage(await id(), { f: 'remove-ads' });
b2.onclick = async () => chrome.tabs.sendMessage(await id(), { f: 'fullscreen' });