const fs = require('fs');

module.exports = exports = {
  getRandom:() => {
    var data = fs.readFileSync('data.json', 'utf8');
    let memes = JSON.parse(data);
    let randIndex = Math.floor(Math.random() * (memes.length - 1));
    let randObj = memes[randIndex];
    return randObj;
  }
}