
const bowser = require('bowser');

document.addEventListener('DOMContentLoaded', () => {
    if (!bowser.chrome && !bowser.firefox) {
        alert('Warning: Unsupported Browser, please use Chrome or Firefox');
    }
});
