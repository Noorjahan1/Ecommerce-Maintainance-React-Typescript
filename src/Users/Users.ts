let Users:Object[];
async function createUser(email:string,password:string){
    Users.push({
        email:email,
        password:password
        
    })
}
 
export default createUser