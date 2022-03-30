import { collection, doc, getDocs, getDoc , setDoc, updateDoc, where } from "firebase/firestore";
import { db } from "../firebase";

export const createSell = async (body) => {
    const sellRef = doc(db,'sells',body.outId);
    const response = await setDoc(sellRef,body)
    .then(() => ({success:true,message:'Registrado satisfactoriamente'}))
    .catch(error => ({success:false,message:error.message}))
    return response;
};

export const getSells = async () => {
    try {
        let collections = [];
        const qs = await getDocs(collection(db,'sells'));
        const results = qs.forEach((doc) => collections = [...collections,doc.data()]);
        return collections;
    } catch (error) {
        return error;
    }
}

export const getSell = async (outId) => {
    try {
        const docRef = doc(db, "sells", outId);
        const docSnap = await getDoc(docRef);
        let data = docSnap.data();
        return data;
    } catch (error) {
        return error;
    }
}

/*export const addAmmount  = async (outId,ammount) => {
    try {
        const curr = await getSell(outId);
        const prevAmmount = curr.ammount;const docRef = doc(db, 'sells', outId);
        await updateDoc(docRef,{ammount:prevAmmount + ammount});
        return {success:true}
    } catch (error) {
        return {success:false}
    }
};*/

export const payAmmount  = async (outId,ammount) => {
    try {
        const curr = await getSell(outId);
        const prevAmmount = curr.ammount;
        const docRef = doc(db, 'sells', outId);
        await updateDoc(docRef,{ammount:prevAmmount - ammount});
        return {success:true}
    } catch (error) {
        return {success:false}
    }
}