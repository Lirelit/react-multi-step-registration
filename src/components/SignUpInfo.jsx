import InputMask from 'react-input-mask'
import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { FIELDS, STEPS } from '../utils/constants'
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
        control,
        formState: { errors, isValid },
    } = useForm({
        mode: 'onBlur',
        defaultValues: {
            ...fields.contact,
        },
    })

    const onSubmit = (data) => {
        updateFields(FIELDS.CONTACT, data)
        setStep(STEPS.PERSONAL)
    }

    const onError = (errors, event) => {
        console.log('errors')
        console.log(errors)
        console.log(event)
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit, onError)}
            className='flex-wrap content-position'
        >
            <Controller
                name='mobilePhone'
                control={control}
                render={({ field }) => (
                    <InputContainer error={errors.mobilePhone}>
                        <Flex
                            justifyContent='space-between'
                            alignItems='center'
                        >
                            <InputLabel
                                htmlFor='mobilePhone'
                                children='Mobile Phone'
                            />
                            {errors.mobilePhone && (
                                <InputError
                                    children={
                                        errors?.mobilePhone?.message ||
                                        errors?.mobilePhone?.minLength
                                            .message ||
                                        errors?.mobilePhone.maxLength.message
                                    }
                                />
                            )}
                        </Flex>
                        <InputMask
                            style={{
                                outline: 'none',
                                border: 'none',
                                color: '#ffffffea',
                                fontSize: '18px',
                                paddingLeft: '0',
                                paddingTop: '5px',
                                marginBottom: '4px',
                                WebkitTextFillColor: '#ffffffea',
                                WebkitBoxShadow: 'inset 0 0 0 50px #212121',
                            }}
                            type='tel'
                            mask='+375999999999'
                            maskChar=''
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
                )}
            />
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
