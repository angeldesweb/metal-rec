import { doc, setDoc , getDocs , collection } from "firebase/firestore";
import { db } from "../firebase";

export const createInbound = async (body) => {
    const inboundRef = doc(db,'inbounds',body.lote);
    const response = await setDoc(inboundRef,body)
    .then(() => ({success:true,message:'Registrado satisfactoriamente'}))
    .catch(error => ({success:false,message:error.message}))
    return response;
};

export const getInbounds = async () => {
    try {
        let collections = [];
        const qs = await getDocs(collection(db,'inbounds'));
        const results = qs.forEach((doc) => collections = [...collections,doc.data()]);
        return collections;
    } catch (error) {
        console.log(error);
        return error;
    }
}