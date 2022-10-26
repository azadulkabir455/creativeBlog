import {db} from "../firebase-config"
import {collection, addDoc} from "firebase/firestore"

export default function useCreate(dbCollection, userData) {
    const addData = async () => {
        const collectionRef = collection(db, dbCollection);
        await addDoc(collectionRef,userData).then(() => {
            console.log("Data Upload Succesfully")
        }).catch((error) => {
            console.log(error.message)
        })
    }
    return [addData];
}
