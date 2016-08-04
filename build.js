const Handlebars = require('handlebars');
Handlebars.registerHelper('read_partial', (api, browser) => {
  try {
    return fs.readFileSync(`partials/${api}_${browser}.html`, 'utf-8');
  } catch (e) {
    console.log(`${api}_${browser}: ${e}`);
    return '';
  }
});

const htmlmin = require('htmlmin');
const htmlminOpts = {
  cssmin: true,
  jsmin: true,
  removeComments: true
};

const fs = require('fs');
const data = require('./data.json');
data.browser.sort((a, b) => a.name > b.name);
const rawTpl = fs.readFileSync('index.hbs', 'utf-8');
const tpl = Handlebars.compile(rawTpl);
fs.writeFileSync('index.html', htmlmin(tpl(data), htmlminOpts), 'utf-8');

