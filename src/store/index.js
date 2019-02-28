import {createStore} from "redux";
import Reducers from "../reducers/index";

export default function confingStore(){

    const store = createStore(
        Reducers
    )
    return store;
}