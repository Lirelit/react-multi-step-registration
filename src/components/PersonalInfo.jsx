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
                <div className='radio-input-wrap'>
                    <InputField
                        radio
                        {...register('sex', {
                            required: 'Sex is required',
                        })}
                        id='male'
                        type='radio'
                        name='sex'
                        value='Male'
                    />
                    <InputLabel htmlFor='male' children='Male'></InputLabel>

                    <InputField
                        radio
                        {...register('sex', {
                            required: 'Sex is required',
                        })}
                        id='female'
                        type='radio'
                        name='sex'
                        value='Female'
                    />
                    <InputLabel htmlFor='female' children='Female' />

                    <InputField
                        radio
                        {...register('sex', {
                            required: 'Sex is required',
                        })}
                        id='other'
                        type='radio'
                        name='sex'
                        value='Other'
                    />
                    <InputLabel htmlFor='other' children='Other' />
                </div>
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
                        validate: () => {
                            let currentData = new Date(Date.now())
                                .toISOString()
                                .slice(0, 10)
                                .replaceAll('-', '')
                            let birthdayData = watch('birthday').replaceAll(
                                '-',
                                ''
                            )
                            let years = Math.floor(
                                (currentData - birthdayData) * 0.0001
                            )
                            if (
                                years < props.validationSchema?.birthday?.minAge
                            ) {
                                return `min age ${props.validationSchema?.birthday?.minAge}`
                            } else if (
                                years >=
                                props.validationSchema?.birthday?.maxAge
                            ) {
                                return `max age ${props.validationSchema?.birthday?.maxAge}`
                            }
                        },
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
                        return <option value={item}> {item}</option>
                    })}
                </SelectField>
            </InputContainer>

            <div className='btn-wrap'>
                <Button children='Back' onClick={goBack} secondary />
                <Button children='Complete' />
            </div>
        </form>
    )
}

export default PersonalInfo
