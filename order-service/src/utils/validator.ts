import Ajv, {Schema} from "ajv"

const ajv = new Ajv();

export const ValidateRequest = <T>(requestBody:unknown,schema:Schema)=>{
    const validateData = ajv.compile<T>(schema);

    if(validateData(requestBody)){
        return false
    }
    const errors = validateData.errors?.map((err)=>err.message)
    return errors && errors[0]
}