import React,{useState}from "react";
const TokenContext=React.createContext({
tokenid:'',
emailid:'',
isLoggedIn:false,
login:(token)=>
{

},
logout:()=>
{

},
setEmail:(email)=>
{

}
});
export const TokenProvider=(props)=>
{
  const initailToken=localStorage.getItem('token');
  const [tokenid,updateToken]=useState(initailToken);
  const [email,updateEmail]=useState('');
  const userIsLoggedIn=!!tokenid;
  let enteredemail;

const loginHandler=(token)=>{
  
  updateToken(token)
  localStorage.setItem('token',token);
  
}
const logoutHandler=()=>
{   
    
    updateToken(null);
    localStorage.removeItem('token');
    
}
const setEmailHandler=(email)=>
{
     updateEmail(email)
}
const tokenContext={
    tokenid:tokenid,
    emailid:email,
    isLoggedIn:userIsLoggedIn,
    login:loginHandler,
    logout:logoutHandler,
    setEmail:setEmailHandler
}

 return(
    <TokenContext.Provider value={tokenContext}>{props.children}</TokenContext.Provider>
 )

}


export default TokenContext;