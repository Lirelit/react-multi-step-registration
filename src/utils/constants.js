export const STEPS = {
    SIGN_UP: 'SIGN_UP_INFO',
    PERSONAL: 'PERSONAL_INFO',
    ERROR: 'ERROR',
    SUCCESS: 'SUCCESS',
}

export const FIELDS = {
    CONTACT: 'contact',
    PERSONAL: 'personalInfo',
}

export const defaultFields = {
    contact: {
        mobilePhone: '',
        email: '',
    },
    personalInfo: {
        firstName: '',
        lastName: '',
        sex: '',
        birthday: '',
        ocean: '',
        hobby: '',
    }
}
