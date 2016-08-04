const Handlebars = require('handlebars');
const fs = require('fs');

Handlebars.registerHelper('read_partial', (api, browser) => {
  try {
    return fs.readFileSync(`partials/${api}_${browser}.html`, 'utf-8');
  } catch (e) {
    console.log(`${api}_${browser}: ${e}`);
    return '';
  }
});

const data = require('./data.json');
data.browser.sort((a, b) => a.name > b.name);
const rawTpl = fs.readFileSync('index.hbs', 'utf-8');
const tpl = Handlebars.compile(rawTpl);
fs.writeFileSync('index.html', tpl(data), 'utf-8');

