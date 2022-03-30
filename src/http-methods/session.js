import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase';
import { errors } from './http-errors';
import { db } from '../firebase';
import { doc , getDoc ,  } from 'firebase/firestore';


export const getUser = async (email) => {
    try {
        const docRef = doc(db, "users", email);
        const docSnap = await getDoc(docRef);
        let data = docSnap.data();
        return data;
    } catch (error) {
        return error;
    }
}

export let signin = async (args) => {
    try {
        const UserCredential = await signInWithEmailAndPassword(auth,args.email,args.password);
        
        const user = UserCredential.user;
        console.log(user);
        if(!user.uid) return {success:false,message:'Usuario y/o contraseña no válidos'};
        return {success:true,message:'Autenticado con éxito',user}
        
    } catch (error) {
        let errorCode;
        let message;
        if(error.code){ 
            errorCode = error.code.split('/');
            message = errors()[errorCode[0]]()[errorCode[1]]()
            return {success:false,message}
        }else{
            return {success:false,message:'Error desconocido, si persiste comuníquese con el administrador del sistema.'}
        }
    }
};

