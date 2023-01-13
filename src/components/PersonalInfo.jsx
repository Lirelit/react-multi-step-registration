import React from 'react'
import { useForm } from 'react-hook-form'
import { FIELDS, STEPS } from '../utils/constants'
import {
    InputField,
    InputError,
    InputContainer,
    InputLabel,
    Flex,
    Button,
    SelectField,
    InputFieldCheckbox,
    InputFieldRadio,
    CheckboxLabel,
} from '../utils/styles'
import { useFormStateContext } from '../utils/hooks'

function PersonalInfo(props) {
    const { setStep, updateFields, fields } = useFormStateContext()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid },
    } = useForm({
        mode: 'onBlur',
        defaultValues: {
            ...fields.personalInfo,
        },
    })

    const onSubmit = (data) => {
        console.log(data)
        updateFields(FIELDS.PERSONAL, data)
        setStep(STEPS.SUCCESS)
    }

    console.log(fields)

    const goBack = () => {
        setStep(STEPS.SIGN_UP)
    }

    const onError = (errors, event) => {
        console.log(errors)
        console.log(event)
    }

    const sex = ['Male', 'Female', 'Other']

    const validateBirthday = () => {
        console.log(watch('birthday'))
        let currentData = new Date()
        let birthdayData = new Date(watch('birthday'))
        let years = (currentData - birthdayData) / 3.154e10
        if (years < props.validationSchema?.birthday?.minAge) {
            return `min age ${props.validationSchema?.birthday?.minAge}`
        } else if (years >= props.validationSchema?.birthday?.maxAge) {
            return `max age ${props.validationSchema?.birthday?.maxAge}`
        }
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className='flex-wrap content-position'
        >
            <InputContainer error={errors.firstName}>
                <Flex justifyContent='space-between' alignItems='center'>
                    <InputLabel htmlFor='firstName' children='First Name' />
                    {errors.firstName && (
                        <InputError children={errors?.firstName?.message} />
                    )}
                </Flex>
                <InputField
                    {...register('firstName', {
                        required: {
                            value: props.validationSchema?.firstName?.required,
                            message: 'First Name is required',
                        },
                        minLength: {
                            value: props.validationSchema?.firstName?.minLength,
                            message: `Min length ${props.validationSchema?.firstName?.minLength}`,
                        },
                        maxLength: {
                            value: props.validationSchema?.firstName?.maxLength,
                            message: `Max length ${props.validationSchema?.firstName?.maxLength}`,
                        },
                    })}
                    id='firstName'
                />
            </InputContainer>
            <InputContainer error={errors.lastName}>
                <Flex justifyContent='space-between' alignItems='center'>
                    <InputLabel htmlFor='lastName' children='Last Name' />
                    {errors.lastName && (
                        <InputError children={errors?.lastName?.message} />
                    )}
                </Flex>
                <InputField
                    {...register('lastName', {
                        required: {
                            value: props.validationSchema?.lastName?.required,
                            message: 'Last Name is required',
                        },
                        minLength: {
                            value: props.validationSchema?.lastName?.minLength,
                            message: `Min length ${props.validationSchema?.lastName?.minLength}`,
                        },
                        maxLength: {
                            value: props.validationSchema?.lastName?.maxLength,
                            message: `Max length ${props.validationSchema?.lastName?.maxLength}`,
                        },
                    })}
                    id='lastName'
                />
            </InputContainer>
            <InputContainer error={errors.sex}>
                <Flex
                    justifyContent='space-between'
                    alignItems='center'
                    style={{ marginBottom: '10px' }}
                >
                    <InputLabel htmlFor='sex' children='Sex' />
                    {errors.sex && (
                        <InputError children={errors?.sex?.message} />
                    )}
                </Flex>
                    {sex.map((item) => (
                        <CheckboxLabel   
                            key={item}
                            htmlFor={item}
                        >
                            <InputFieldRadio
                                {...register('sex', {
                                    required: 'Sex is required',
                                })}
                                id={item}
                                type='radio'
                                name='sex'
                                value={item}
                            />
                            {item}
                        </CheckboxLabel>
                    ))}
            </InputContainer>
            <InputContainer error={errors.birthday}>
                <Flex justifyContent='space-between' alignItems='center'>
                    <InputLabel htmlFor='birthday' children='Birthday' />
                    {errors.birthday && (
                        <InputError children={errors?.birthday?.message} />
                    )}
                </Flex>
                <InputField
                    type='date'
                    {...register('birthday', {
                        required: {
                            value: props.validationSchema?.birthday?.required,
                            message: 'Birthday is required',
                        },
                        validate: validateBirthday,
                    })}
                    id='birthday'
                />
            </InputContainer>

            <InputContainer error={errors.ocean}>
                <Flex justifyContent='space-between' alignItems='center'>
                    <InputLabel
                        htmlFor='ocean'
                        children='Your Favorite Ocean'
                    />
                    {errors.ocean && (
                        <InputError children={errors?.ocean?.message} />
                    )}
                </Flex>
                <SelectField
                    id='ocean'
                    {...register('ocean', {
                        required: {
                            value: props.validationSchema?.ocean?.required,
                            message: 'Ocean is required',
                        },
                    })}
                >
                    <option value=''>-Select- </option>
                    {props?.validationSchema?.ocean?.oneOf.map((item) => {
                        return (
                            <option key={item} value={item}>
                                {' '}
                                {item}
                            </option>
                        )
                    })}
                </SelectField>
            </InputContainer>

            <InputContainer error={errors.hobby}>
                <Flex
                    style={{ marginBottom: '10px' }}
                    justifyContent='space-between'
                    alignItems='center'
                >
                    <InputLabel htmlFor='hobby' children='Hobby' />
                    {errors.hobby && (
                        <InputError children={errors?.hobby?.message} />
                    )}
                </Flex>
                {props?.validationSchema?.hobby?.anyOf.map((item) => {
                    return (
                        <CheckboxLabel
                            htmlFor={item}
                            key={item}
                        >
                            <InputFieldCheckbox
                                type='checkbox'
                                id={item}
                                value={item}
                                {...register('hobby', {
                                    required: {
                                        value: props?.validationSchema?.hobby
                                            ?.required,
                                        message: 'Hobby is required',
                                    },
                                })}
                            />
                            {item}
                        </CheckboxLabel>
                    )
                })}
            </InputContainer>
            <div className='btn-wrap'>
                <Button children='Back' onClick={goBack} secondary />
                <Button children='Complete' />
            </div>
        </form>
    )
}

export default PersonalInfo
