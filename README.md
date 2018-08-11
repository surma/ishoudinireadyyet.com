[Is Houdini Ready Yet?](https://ishoudinireadyyet.com)

## Building

Running

```
$ node build.js
```

will build `index.html`. Commit that file to master and update `gh-pages` branch to the same commit. By pushing to the repository, the live version of the website is updated.

## Data

All the data for the table is in `data.json`.

The browsers are defined in the `browser` property. The logo for the browser must be in the `logos` directory and must be named `${browser.tag}.svg`.

The APIs are defined in teh `api` property.

Support for each browser/API pair is defined in the `status` property. `completeness` can be one of `no`, `intent`, `development`, `partially` or `yes`. The optional `since` property should tell which version of the browser has support for the API enabled. The optional `has_details` property controls whether the “Details” button should be shown.

If a “Details” button is clicked, a “dialog” is openend, showing the contents of `partials/${api.tag}_${browser.tag}.html`.

## License
Apache 2

