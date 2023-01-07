import { createContext } from "react";
import { defaultFields, FIELDS } from '../constants'


export const FormFieldsContext = createContext({
    fields: defaultFields,
    updateFields: () => {},
    
})