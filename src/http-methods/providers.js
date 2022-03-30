import { doc, setDoc , getDocs , collection , getDoc } from "firebase/firestore";
import { db } from "../firebase";

export const createProvider = async (body) => {
    const providerRef = doc(db,'providers',body.id);
    const response = await setDoc(providerRef,body)
    .then(() => ({success:true,message:'Registrado satisfactoriamente'}))
    .catch(error => ({success:false,message:error.message}))
    return response;
};

export const getProviders = async () => {
    try {
        let collections = [];
        const qs = await getDocs(collection(db,'providers'));
        const results = qs.forEach((doc) => collections = [...collections,doc.data()]);
        return collections;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const getProvider = async (id) => {
    try {
        const docRef = doc(db, "providers", id);
        const docSnap = await getDoc(docRef);
        let data = docSnap.data();
        return data;
    } catch (error) {
        return error;
    }
}