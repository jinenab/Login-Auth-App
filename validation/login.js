const Validator=require("validator")
const isEmpty=require("is-empty")
module.exports=function validateRegisterInput(data){
  let errors={}
  data.email=!isEmpty(data.name)?data.email:""
  data.password=!isEmpty(data.password)?data.password:""
  if(Validator.isEmpty(data.email)){
    errors.email="Email field required"

  }else if(Validator.isEmpty(data.password)){
    errors.password="password field is required"
  }
  return {
    errors,
    isValid:isEmpty(errors)
  }
}
