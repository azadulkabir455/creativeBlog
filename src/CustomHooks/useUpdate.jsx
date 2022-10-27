import {db} from "../firebase-config"
import {doc, updateDoc} from "firebase/firestore"

export default function useUpdate(dbcollection, userId, userData) {

    const updateData = async () => {
        const userDoc = doc(db,dbcollection,userId);
        await updateDoc(userDoc, userData).then(() => {
            console.log("Data Update successfull")
        }).catch((error) => {
            console.log(error.message)
        })
    }
  return [updateData]
}
