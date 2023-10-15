export const validation = (info)=>{

    const {name , email} = info

    const error = {}

    if(!name){
        error.name = "Name is Required"
    }
    else if(name.isMatch()){
        error.name = "Name is Not correct Format"
    }

    if(!email){
        error.email = "Email is Required"
    }
    else if(email.isMatch()){
        error.email = "Email is Not correct Format"
    }

    return error
}