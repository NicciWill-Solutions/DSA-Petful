import { API_BASE_URL } from '../config';
//const REACT_APP_API_BASE_URL = 'http://localhost:8080/api'

export const FETCH_CAT_REQUEST = 'FETCT_CAT_REQUEST';
export const fetchCatRequest = () => ({
  type: FETCH_CAT_REQUEST,
  loading: true
})

export const FETCH_CAT_SUCCESS = 'FETCT_CAT_SUCCESS';
export const fetchCatSuccess = cat => ({
  type: FETCH_CAT_SUCCESS,
  catToAdopt: cat
})

export const FETCH_CAT_ERROR = 'FETCT_CAT_ERROR';
export const fetchCatError = error => ({
  type: FETCH_CAT_ERROR,
  error
})

export const fetchCat = () => dispatch => {
  dispatch(fetchCatRequest());
  fetch(`${API_BASE_URL}/cat`)
    .then(res => {
      if(!res.ok) {
        console.log('There was a problem');
      }
      return res.json()
    .then(cat => {
      dispatch(fetchCatSuccess(cat));
    })
    .catch(err => {
      dispatch(fetchCatError(err));
    })
  })
}

export const adoptCat = () => dispatch => {
  const catInit = { method: 'DELETE'};
  dispatch(fetchCatRequest());
  fetch(`${API_BASE_URL}/cat`, catInit)
    .then(res => {
      if(!res.ok){
        console.log("Something went wrong");
      }
      res.json()
    .then( () => {
      dispatch(fetchCat())
    })
    .catch(err => {
      dispatch(fetchCatError(err))
    })
  })  
}
