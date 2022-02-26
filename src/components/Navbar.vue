<template>
  <nav v-if="user">
      <div>
         <p>hey there {{user.displayName}}</p> 
         <p class="email">currently logged in as {{user.email}}</p>
         </div>
         <button @click="handleClick">logout</button>
  </nav>
</template>

<script>
import useLogout from '../composables/useLogout'
import getUser from '../composables/getUser'
export default {
   setup(props, context){

        const {user} = getUser()
        const {error, logout} = useLogout()

        const handleClick = async () => {

           await logout()
           if(!error.value){
            //    context.emit('logout')
            console.log('user logged out')
           }
        }
        return{handleClick, user}
   } 
}
</script>

<style>
 nav {
    padding: 20px;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  nav p {
    margin: 2px auto;
    font-size: 16px;
    color: #444;
  }
  nav p.email {
    font-size: 14px;
    color: #999;
  }
</style>