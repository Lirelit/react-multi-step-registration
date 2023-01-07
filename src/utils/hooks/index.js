import { useContext } from 'react'
import { FormFieldsContext } from '../contexts/FormFieldsContext'
import { FormStepContext } from '../contexts/FormStepContext'

export const useFormStateContext = () => ({
        ...useContext(FormStepContext),
        ...useContext(FormFieldsContext),
})
