import { doc, setDoc , getDocs , collection , getDoc , updateDoc } from "firebase/firestore";
import { db } from "../firebase";

export const createOutbound = async (body) => {
    const outboundRef = doc(db,'outbounds',body.lote);
    const response = await setDoc(outboundRef,body)
    .then(() => ({success:true,message:'Registrado satisfactoriamente'}))
    .catch(error => ({success:false,message:error.message}))
    return response;
};

export const getOutbounds = async () => {
    try {
        let collections = [];
        const qs = await getDocs(collection(db,'outbounds'));
        const results = qs.forEach((doc) => collections = [...collections,doc.data()]);
        return collections;
    } catch (error) {
        console.log(error);
        return error;
    }
}

export const getOutbound = async (lote) => {
    try {
        const docRef = doc(db, "outbounds", lote);
        const docSnap = await getDoc(docRef);
        let data = docSnap.data();
        return data;
    } catch (error) {
        return error;
    }
}

export const updateOutbound  = async (lote,body) => {
    try {
        const docRef = doc(db, 'outbounds', lote);
        await updateDoc(docRef,body);
        return {success:true}
    } catch (error) {
        return {success:false}
    }
};