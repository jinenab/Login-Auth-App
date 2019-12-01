const Validator=require("Validator")
const isEpty=require("is-empty")
module.exports=function validateLoginInput(data) {
let errors={}
data.email=isEmpty(data.email)?"":data.email
data.password=isEmpty(data.password)?"":data.password

//Check the email
if(Validator.isEmpty(data.email)){
  errors.email="Email required"
}
else if(!Validator.isEmail(data.email)){
  errors.email="Invalid email"
}
//Check password
if(Validator.isEmpty(data.password)){
  errors.password="Password required"
}

return({
  errors,
  isValid:isEmpty(errors)
})
}
