import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Page } from './utils/styles'
import { getCurrentForm } from './utils/helpers'
import { defaultFields, STEPS } from './utils/constants'
import { FormStepContext } from './utils/contexts/FormStepContext'
import { useEffect, useState } from 'react'
import { FormFieldsContext } from './utils/contexts/FormFieldsContext'
import axios from 'axios'
import PersonalInfo from './components/PersonalInfo'

function App() {
    const [step, setStep] = useState(STEPS.SIGN_UP)
    const [fields, setFields] = useState(defaultFields)
    const [validationSchema, setValidationSchema] = useState([])

    const updateFields = (field, value) => {
        const newFields = { ...fields }
        newFields[field] = value;
        setFields(newFields);
    }

    useEffect(() => {
        axios
            .get('https://62dae988d1d97b9e0c48e3c3.mockapi.io/schema')
            .then((res) => {
                setValidationSchema(res.data[0])
            })
    }, [])

    return (
        <div>
            <FormStepContext.Provider value={{ step, setStep }}>
                <FormFieldsContext.Provider value={{fields, updateFields}}>
                <Page>
                    <Header />
                    {getCurrentForm(step, validationSchema)}
                    {/* <PersonalInfo/> */}
                    <Footer />
                </Page>
                </FormFieldsContext.Provider>
            </FormStepContext.Provider>
        </div>
    )
}

export default App
