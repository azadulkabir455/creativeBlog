import {db} from "../firebase-config"
import {doc, deleteDoc} from "firebase/firestore"

export default function useDelete(collectionName,id) {
    const deleteData = async () => {
        const userData = doc(db, collectionName, id);
        await deleteDoc(userData).then(() => {
            console.log("Data delete successfully")
        }).catch((error) => {
            console.log(error.message)
        })
    }
    return {deleteData}
}
