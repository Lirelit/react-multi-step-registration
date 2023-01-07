import React, { useState } from 'react'
import PersonalInfo from './PersonalInfo'
import SignUpInfo from './SignUpInfo'

function Form() {
    const [page, setPage] = useState(0)
    const [formData, setFormData] = useState({
        phone: '',
        email: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        lastName: '',
        sex: '',
        birthday: '',
        ocean: '',
        hobby: '',
    })

    const formTitles = ['Sign Up', 'Personal Info']

    const pageDisplay = () => {
        if (page === 0) {
            return <SignUpInfo formData={formData} setFormData={setFormData} />
        } else if (page === 1) {
            return (
                <PersonalInfo formData={formData} setFormData={setFormData} />
            )
        }
    }

    return (
        <form className='form' onSubmit={(e) => e.preventDefault()}>
            <div className='form-container'>
                <div className='form-title'>{formTitles[page]}</div>
                <div className='body'>{pageDisplay()}</div>
                <div className='footer'>
                    {page !== 0 && (
                        <button
                            // disabled={page == 0}
                            onClick={() => setPage((currPage) => currPage - 1)}
                        >
                            Prev
                        </button>
                    )}
                    <button
                        // disabled={page == formTitles.length - 1}
                        onClick={() => setPage((currPage) => currPage + 1)}
                    >
                        {page === formTitles.length - 1 ? "Submit" : "Next" }
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Form
