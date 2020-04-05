# Personal Site

## Requirements

The project is working with the following versions:
- Node: `v13.5.0`
- NPM version: `6.13.4`

## Run in Development

1. Install the dependencies running `npm install`.
2. Make sure that you are using `react-static` that is installed in this package, not the
global one.
3. Run `react-static start`.

## Deploy to Production
1. Create an orphan branch in the main repository. 
```bash
git checkout --orphan gh-pages
```



## Common Errors
### Build Fails 
When running `react-static build` the error happens:
```
Module build failed (from ./babel-loader/lib/index.js):
TypeError: /path/to/project/artifacts/react-static-templates.js: Property value expected type of string but got null
```

It is because the package `react-static` is installed globally and the minimum node version is
10.16.0 according to [this](https://github.com/react-static/react-static/issues/1189) link. The
build was tested using node version: `v13.5.0` and npm version: `6.13.4`.
