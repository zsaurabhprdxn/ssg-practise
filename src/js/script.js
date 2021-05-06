const contents = [
    '..... and lots of love',
    '..... and some great enthiuasm',
    '..... and a dedication too',
    '..... and with indeed yourself'
];

const content = contents[Math.floor(Math.random() * Math.floor(contents.length))];

document.querySelector('.sub-content').append(content);