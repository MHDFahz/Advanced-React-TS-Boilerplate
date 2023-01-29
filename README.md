# Advanced-React-TS-Boilerplate

## How to use this boilerplate for another project

- create an empty reposiory for your project
- clone this reposiroy

```js
git clone https://github.com/MHDFahz/Advanced-React-TS-Boilerplate.git
```

- change the folder name from `Advanced-React-TS-Boilerplate` to your `project name`

- change the name in `packages.json` from `Advanced-React-TS-Boilerplate` to your `project name`

- remove `.git` folder in the project folder

```sh
sudo rm -r .git
```

- set your repository as upstream.

```sh
git remote add origin <your repo url>
```

- Push to your repository's master

```sh
git push -u origin master
```

## Available Scripts

In the project directory, you can run:

### `npm run commit`

To commit to your repository. You will be prompted the information about the commit. And `lint` will be run before commiting. If there are any lint errors, you should correct it before committing.

### `npm run lint`

To check the lint errors in your repo.

### `npm run lint:fix`

To automatically fix possible lint errors in your repo.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).
