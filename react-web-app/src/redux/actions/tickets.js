import url from 'url';
import axios from 'axios';

const tickets = [
  {
    "code":"234",
    "title":"Árbol caído",
    "description":"descripcion",
    "__v":0,
    "createdOn":new Date("2018-03-01T22:44:31.839Z"),
    "coords":["24.23232","36.1234234"]
  },
  {
    "code":"233",
    "title":"Bache en la calle",
    "description":"descripcion",
    "__v":0,
    "createdOn":new Date("2018-03-01T22:44:31.839Z"),
    "coords":["24.23232","36.1234234"]
  },
  {
    "code":"232",
    "title":"Semáforo roto",
    "description":"descripcion",
    "__v":0,
    "createdOn":new Date("2018-03-01T22:44:31.839Z"),
    "coords":["24.23232","36.1234234"]
  },
  {
    "code":"1234",
    "title":"Árbol caído",
    "description":"descripcion",
    "__v":0,
    "createdOn":new Date("2018-03-01T22:44:31.839Z"),
    "coords":["24.23232","36.1234234"]
  },
  {
    "code":"1233",
    "title":"Bache en la calle",
    "description":"descripcion",
    "__v":0,
    "createdOn":new Date("2018-03-01T22:44:31.839Z"),
    "coords":["24.23232","36.1234234"]
  },
  {
    "code":"1232",
    "title":"Semáforo roto",
    "description":"descripcion",
    "__v":0,
    "createdOn":new Date("2018-03-01T22:44:31.839Z"),
    "coords":["24.23232","36.1234234"]
  },
  {
    "code":"2234",
    "title":"Árbol caído",
    "description":"descripcion",
    "__v":0,
    "createdOn":new Date("2018-03-01T22:44:31.839Z"),
    "coords":["24.23232","36.1234234"]
  },
  {
    "code":"2233",
    "title":"Bache en la calle",
    "description":"descripcion",
    "__v":0,
    "createdOn":new Date("2018-03-01T22:44:31.839Z"),
    "coords":["24.23232","36.1234234"]
  },
  {
    "code":"2232",
    "title":"Semáforo roto",
    "description":"descripcion",
    "__v":0,
    "createdOn":new Date("2018-03-01T22:44:31.839Z"),
    "coords":["24.23232","36.1234234"]
  },
  {
    "code":"3234",
    "title":"Árbol caído",
    "description":"descripcion",
    "__v":0,
    "createdOn":new Date("2018-03-01T22:44:31.839Z"),
    "coords":["24.23232","36.1234234"]
  },
  {
    "code":"3233",
    "title":"Bache en la calle",
    "description":"descripcion",
    "__v":0,
    "createdOn":new Date("2018-03-01T22:44:31.839Z"),
    "coords":["24.23232","36.1234234"]
  },
  {
    "code":"3232",
    "title":"Semáforo roto",
    "description":"descripcion",
    "__v":0,
    "createdOn":new Date("2018-03-01T22:44:31.839Z"),
    "coords":["24.23232","36.1234234"]
  },
];

const useTestData = false;
export function fetchTickets() {
  return async (dispatch, getState) => {
    dispatch({ type: 'TICKETS_LOADING', payload: {} });
    !useTestData ?
      axios
        .get(url.resolve((process.env.REACT_APP_API_HOST || 'http://localhost:8080'), '/api/tickets'))
        .then(function (response) {
          console.log(response)
          dispatch({ type: 'TICKETS_LOADED', payload: { tickets: response.data.map((ticket) => Object.assign(ticket, {createdOn: new Date(ticket.createdOn)})) } });
        })
        .catch(function (error) {
          console.error(error)
          dispatch({ type: 'TICKETS_LOAD_ERROR', payload: {} });
        })
    :
      setTimeout(
        () => dispatch({ type: 'TICKETS_LOADED', payload: { tickets } }),
        400
      )
  }
}
