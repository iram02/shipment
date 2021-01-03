#Below is the description of the task:

##Technology used:
1. ReactJS
2. Material UI
3. Axios (for API call)

##Details:
1. I bootstraped the react project using the create-react-app package.
2. For designing the UI, I used Material-UI. Material-UI provides some predefined and highly customizable react components which we can directly use in the app. This makes the UI development very easy as compared to traditional CSS styling.
3. All the components of the project reside inside the src folder.
4. Index.js, App.js and App.css are at the root location. All the other individual components are defined inside the components/Layout folder.
5. The Main.js file inside the components folder has the main layout of the app. I have used the Material UI Vertical Grid component to define the grid on which the app is designed.
6. Once the layout was ready, I used the useState hooks on each component to define their individual state values.
7. I have also used the useEffect hook on the App component for making an Axios call to the API.
8. The data from the Axios call is stored inside the state in the App component.
9. This data is then passed as props to the children components and the data is rendered accordingly.
10. On executing the npm run build command, the application is built and is production ready. This is also provided by the create-react-app package.
