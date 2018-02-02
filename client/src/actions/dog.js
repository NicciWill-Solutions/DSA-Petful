import { API_BASE_URL } from '../config';
//const REACT_APP_API_BASE_URL = 'http://localhost:8080/api'

export const FETCH_DOG_REQUEST = 'FETCH_DOG_REQUEST';
export const fetchDogRequest = () => ({
  type: FETCH_DOG_REQUEST,
  loading: true
})

export const FETCH_DOG_SUCCESS = 'FETCH_DOG_SUCCESS';
export const fetchDogSuccess = dog => ({
  type: FETCH_DOG_SUCCESS,
  dogToAdopt: dog
})

export const FETCH_DOG_ERROR = 'FETCH_DOG_ERROR';
export const fetchDogError = (error) => ({
  type: FETCH_DOG_ERROR,
  error
})

export const fetchDog = () => dispatch => {
  dispatch(fetchDogRequest());
  fetch(`${API_BASE_URL}/dog`)
    .then(res => {
      if(!res.ok){
        console.log('There was a problem');
      }
      res.json()
    .then(dog => {
      dispatch(fetchDogSuccess(dog))
    })
    .catch(err => {
      dispatch(fetchDogError(err))
    })
  })
}

export const adoptDog = () => dispatch => {
  const dogInit = { method: 'DELETE'};
  dispatch(fetchDogRequest());
  fetch(`${API_BASE_URL}/dog`, dogInit)
    .then(res => {
      if(!res.ok){
        console.log("Something went wrong");
      }
      res.json()
    .then( () => {
      dispatch(fetchDog())
    })
    .catch(err => {
      dispatch(fetchDogError(err))
    })
  })  
}