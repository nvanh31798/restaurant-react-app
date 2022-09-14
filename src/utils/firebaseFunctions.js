import { async } from "@firebase/util";
import { collection, doc, getDoc, getDocs, orderBy, query, setDoc } from "firebase/firestore";
import { firestore } from "../firebase.config";

export const saveItem = async(data) => {
    await setDoc(doc(firestore, 'foodItems', `${Date.now()}`), data, {
        merge: true, });
}

export const getAllFoodItems = async () => {
    const item = await getDocs(
        query(collection(firestore, "foodItems"), orderBy("id", "desc"))
        );
        return item.docs.map((doc)=>doc.data());
};