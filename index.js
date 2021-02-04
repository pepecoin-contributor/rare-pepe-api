const fs = require('fs');
const path = require('path');

module.exports = exports = {
  getRandom: () => {
    var data = fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8');
    let memes = JSON.parse(data);
    let randIndex = Math.floor(Math.random() * (memes.length - 1));
    let randObj = memes[randIndex];
    return randObj;
  }
}