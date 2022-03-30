import { doc, setDoc , getDocs , collection } from "firebase/firestore";
import { db } from "../firebase";

export const createClient = async (body) => {
    const clientRef = doc(db,'clients',body.id);
    const response = await setDoc(clientRef,body)
    .then(() => ({success:true,message:'Registrado satisfactoriamente'}))
    .catch(error => ({success:false,message:error.message}))
    return response;
};

export const getClients = async () => {
    try {
        let collections = [];
        const qs = await getDocs(collection(db,'clients'));
        const results = qs.forEach((doc) => collections = [...collections,doc.data()]);
        return collections;
    } catch (error) {
        console.log(error);
        return error;
    }
}