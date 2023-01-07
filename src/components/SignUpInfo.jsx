import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { defaultFields, FIELDS, STEPS } from '../utils/constants'
import {
    InputField,
    InputError,
    InputContainer,
    InputLabel,
    Flex,
    Button,
} from '../utils/styles'
import { useFormStateContext } from '../utils/hooks'

function SignUpInfo(props) {
    
    const { setStep, updateFields, fields } = useFormStateContext()
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors, isValid },
    } = useForm({
        mode: 'onBlur',
        defaultValues: {
            ...fields.contact,
        },
    })

    console.log(props)
    console.log(props.validationSchema?.password?.minLength);

    const onSubmit = (data) => {
        console.log(data)
        updateFields(FIELDS.CONTACT, data)
        setStep(STEPS.PERSONAL)
    }

    const onError = (errors, event) => {
        console.log('errors')
        console.log(errors)
        console.log(event)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)} className='flex-wrap content-position'>
            <InputContainer error={errors.mobilePhone}>
                <Flex justifyContent='space-between' alignItems='center'>
                    <InputLabel htmlFor='mobilePhone' children='Mobile Phone' />
                    {errors.mobilePhone && (
                        <InputError
                            children={
                                errors?.mobilePhone?.message ||
                                errors?.mobilePhone?.minLength.message ||
                                errors?.mobilePhone.maxLength.message
                            }
                        />
                    )}
                </Flex>
                <InputField
                    type='tel'
                    {...register('mobilePhone', {
                        required: 'Mobile Phone is required',
                        pattern: {
                            value: /^\+375\d{9}$/,
                            message: 'Invalid mobile phone',
                        },
                    })}
                    id='mobilePhone'
                />
            </InputContainer>
            <InputContainer error={errors.email}>
                <Flex justifyContent='space-between' alignItems='center'>
                    <InputLabel htmlFor='email' children='Email' />
                    {errors.email && (
                        <InputError children={errors.email.message} />
                    )}
                </Flex>
                <InputField
                    type='email'
                    {...register('email', {
                        required: 'Email required',
                        pattern: {
                            value: props.validationSchema?.email?.regExp,
                            message: 'Invalid email',
                        },
                    })}
                    id='email'
                />
            </InputContainer>
            <InputContainer error={errors.password}>
                <Flex justifyContent='space-between' alignItems='center'>
                    <InputLabel htmlFor='password' children='Password' />
                    {errors.password && (
                        <InputError children={errors.password.message} />
                    )}
                </Flex>
                <InputField
                    type='password'
                    {...register('password', {
                        required: 'Password required',
                        minLength: {
                            value: props.validationSchema?.password?.minLength,
                            message: `Min length ${props.validationSchema?.password?.minLength}`,
                        },
                        maxLength: {
                            value: props.validationSchema?.password?.maxLength,
                            message: `Max length ${props.validationSchema?.password?.maxLength}`,
                        },
                    })}
                    id='password'
                />
            </InputContainer>
            <InputContainer error={errors.repeat_password}>
                <Flex justifyContent='space-between' alignItems='center'>
                    <InputLabel
                        htmlFor='repeatPassword'
                        children='Repeat password'
                    />
                    {errors.repeat_password && (
                        <InputError children={errors.repeat_password.message} />
                    )}
                </Flex>
                <InputField
                    type='password'
                    {...register('repeat_password', {
                        required: 'Password required',
                        validate: (val) => {
                            if (watch('password') != val) {
                                return "Passwords don't match"
                            }
                        },
                        minLength: {
                            value: props.validationSchema?.password?.minLength,
                            message: `Min length ${props.validationSchema?.password?.minLength}`,
                        },
                        maxLength: {
                            value: props.validationSchema?.password?.maxLength,
                            message: `Max length ${props.validationSchema?.password?.maxLength}`,
                        },
                    })}
                    id='repeatPassword'
                />
            </InputContainer>
            <div>
                <Button children='Next' />
            </div>
        </form>
    )
}

export default SignUpInfo
