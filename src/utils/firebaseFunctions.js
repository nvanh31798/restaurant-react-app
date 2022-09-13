import { async } from "@firebase/util";
import { doc, setDoc } from "firebase/firestore";
import { firestore } from "../firebase.config";

export const saveItem = async(data) => {
    await setDoc(doc(firestore, 'foodItems', `${Date.now()}`), data, {
        merge: true, });
}