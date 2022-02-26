<template>
  <form >
      <textarea 
      placeholder="type a message and hit enter to send..." 
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
      ></textarea>
      <div class="error">{{error}}</div>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '../composables/getUser'
import { timestamp } from '../firebase/config'
import useCollection from '../composables/useCollection'
export default {
setup(){
    const message = ref('')

    const { error, addDoc} = useCollection('messages')
    const {user}= getUser()

    const handleSubmit = async() =>{

        const chat = {
            name: user.value.displayName,
            message: message.value,
            createdAt: timestamp()
        }
        await addDoc(chat)
        if(!error.value){
          message.value =''
        }
     }

    return{handleSubmit, message, error}
    }
}
</script>

<style>
form {
    margin: 10px;
  }
  textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
  }
</style>