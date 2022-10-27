import {useEffect,useState} from 'react'
import {db} from "../firebase-config";
import {collection, getDocs} from "firebase/firestore"

export default function useFetch(collectionName) {
    const [data, setData] = useState([]);
    useEffect(() => {
        const collectionRef = collection(db,collectionName);
        const getData = async () => {
            const data = await getDocs(collectionRef)
            setData(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }
        getData()
    },[data])
    return [data]
}
