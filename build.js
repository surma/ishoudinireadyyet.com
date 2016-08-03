const Handlebars = require('handlebars');
const fs = require('fs');

const data = require('./data.json');

Handlebars.registerHelper('status', function(api, browser, field) {
  try {
    return data.status[api][browser][field];
  } catch(e) {
    console.log(`No data for ${api}/${browser}/${field}`);
    return '';
  }
});

const rawTpl = fs.readFileSync('index.hbs', 'utf-8');
const tpl = Handlebars.compile(rawTpl);
fs.writeFileSync('index.html', tpl(data), 'utf-8');

