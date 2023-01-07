import PersonalInfo from '../components/PersonalInfo'
import SignUpInfo from '../components/SignUpInfo'
import Success from '../components/Success'
import { STEPS } from './constants'

export const getCurrentForm = (step, props) => {
    switch (step) {
        case STEPS.SIGN_UP:
            return <SignUpInfo validationSchema={props}/>
        case STEPS.PERSONAL:
            return <PersonalInfo validationSchema={props}/>
        case STEPS.SUCCESS:
            return <Success />
        default:
            return null
    }
}
