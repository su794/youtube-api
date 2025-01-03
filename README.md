# Overview

<img width="659" alt="Screen Shot 2025-01-03 at 4 13 44 PM" src="https://github.com/user-attachments/assets/4f5b613f-f2d7-4251-bbc9-d97287bc2cfe" />

In this project, There are 3 pages configured using react-router-dom.
/videos
/videos/:keyword
/video/watch/:videoId
a Homepage and a page with a path '/videos' are displayed with popular videos.

<img width="659" alt="Screen Shot 2025-01-03 at 4 15 14 PM" src="https://github.com/user-attachments/assets/e82ed709-b866-424e-a6ff-f1e3bfc1e37a" />

When users type the keyword in the search form, the page leads to the videos with the keyword. If some user types the path with a specific keyword, the same screen will be displayed with the keyword in the search form.

<img width="659" alt="Screen Shot 2025-01-03 at 4 16 07 PM" src="https://github.com/user-attachments/assets/aba48f36-82f5-4993-a0ed-5067bae6a330" />

When the video is clicked, it leads to the video detail page with the video, video title, video description, channel Information, and the popular videos from this channel.

Tools: React, TailwindCSS, Youtube Data API, axios, timeago.js, react-router-dom


## Hurdles and Solutions

1. Mock Data: When using Youtube DATA API, there is a quote usage per day. So I could use a limited number of API calls when I built the project. I added mock data in a JSON format to test the video list and other features without getting stuck. So after I tested the function with mock data enough, I used the real YouTube DATA API to see if it's working with real data.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
