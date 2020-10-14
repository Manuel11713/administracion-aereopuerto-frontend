import {createStore} from 'redux';

const initialState = {
    pilots:[],
    members:[],
    lobbies:[],
    hangars:[],
    flights:[],
    airplanes:[]
}

const reducerState = (state=initialState,action) => {
    if(action.type==="SET_PILOTS"){
        return{
            ...state,
            pilots:action.pilots
        }
    }
    if(action.type==="SET_MEMBERS"){
        return{
            ...state,
            members:action.members
        }
    }
    if(action.type==="SET_LOBBIES"){
        return{
            ...state,
            lobbies:action.lobbies
        }
    }
    if(action.type==="SET_HANGARS"){
        return{
            ...state,
            hangars:action.hangars
        }
    }
    if(action.type==="SET_FLIGHTS"){
        return{
            ...state,
            flights:action.flights
        }
    }
    if(action.type==="SET_AIRPLANES"){
        return{
            ...state,
            airplanes:action.airplanes
        }
    }
    return state;
}

export default createStore(reducerState);