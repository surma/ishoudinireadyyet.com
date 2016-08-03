const Handlebars = require('handlebars');
const fs = require('fs');

const data = require('./data.json');
const rawTpl = fs.readFileSync('index.hbs', 'utf-8');
const tpl = Handlebars.compile(rawTpl);
fs.writeFileSync('index.html', tpl(data), 'utf-8');

