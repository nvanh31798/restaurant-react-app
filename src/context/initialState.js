import { fetchUser } from "../utils/fetchLocalStorageData";

const userInfo = fetchUser();

const initialState = {
    user: userInfo,
};

// console.log(initialState);
export default initialState;