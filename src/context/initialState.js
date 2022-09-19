import { fetchUser } from "../utils/fetchLocalStorageData";

const userInfo = fetchUser();

const initialState = {
    user: userInfo,
    foodItems: null,
    cartShow: false,
};

export default initialState;