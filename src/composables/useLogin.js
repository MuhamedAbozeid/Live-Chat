
import { ref } from '@vue/reactivity'
import {projectAuth} from '../firebase/config'

const error = ref(null)

const login = async(email, password) =>{


    error.value=null
    try{
            const res = await projectAuth.signInWithEmailAndPassword(email, password)
            error.value = null
            return res
    }
    catch(err){
        error.value='incorrect login'
    }
}

const useLogin =()=>{
    return{error, login}
}
export default useLogin