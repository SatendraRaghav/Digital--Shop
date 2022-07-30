const initialValue  = {
    obj:[],
    virtualObj:{
        name:"",
        email:"",
        mobileNumber:"" ,
        avatar_image:"",
        first_name:"",
        last_name:""  ,
        avatar_email:""         
    },
    mainLogic:false,
    data:[],
    
};

const reducer = (state,action)=>{
    switch(action.type){
     case "saveFormData":
        return{...state,obj:action.payload}
     case "saveVartualFormData":
        return{...state,virtualObj:action.payload}
     case "mainPage":
            return{...state,mainLogic:action.payload}
     case "setData":
                return{...state,data:action.payload}
    default:
        return initialValue;

    }
}    

export default reducer;