export const API_BASE_URL = process.env.NODE_ENV === "production" ? process.env.REACT_APP_API_BASED_URL : 'http://localhost:8080/api';

//create-react-app does the following:
//npm start - default process.env.NODE_ENV is development
//npm build - default process.env.NODE_ENV is production