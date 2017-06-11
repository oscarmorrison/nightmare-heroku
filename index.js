const Nightmare = require('nightmare');
const nightmare = Nightmare({ show: false });

console.log('Welcome to Nightmare scrape\n==========\n');

nightmare
    .goto('https://www.chess.com/member/oscargem')
    .wait('#sidebar')
    .evaluate(() => document.querySelector('.user-rating').textContent)
    .end()
    .then((result) => {
        console.log(result);
        console.log('all done\n=========\n');
    })
    .catch((error) => {
        console.error('an error has occurred: ' + error);
    })
    .then(() => (console.log('process exit'), process.exit()));
