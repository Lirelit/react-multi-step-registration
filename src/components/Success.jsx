import React from 'react'
import { useFormStateContext } from '../utils/hooks'
import {
    InputContainer,
    InputLabel,
    Flex,
    Button,
    InputFieldDetails,
} from '../utils/styles'

function Success() {
    const {fields } = useFormStateContext()

    return (
        <form className='flex-wrap content-position'>
            <div>
                <InputContainer>
                    <Flex justifyContent='space-between' alignItems='center'>
                        <InputLabel children='Mobile Phone' />
                    </Flex>
                    <InputFieldDetails
                        children={fields?.contact?.mobilePhone}
                        id='mobilePhone'
                    />
                </InputContainer>
                <InputContainer>
                    <Flex justifyContent='space-between' alignItems='center'>
                        <InputLabel children='Email' />
                    </Flex>
                    <InputFieldDetails children={fields?.contact?.email} />
                </InputContainer>
                <InputContainer>
                    <Flex justifyContent='space-between' alignItems='center'>
                        <InputLabel children='First name' />
                    </Flex>
                    <InputFieldDetails children={fields?.personalInfo?.firstName} />
                </InputContainer>
                <InputContainer>
                    <Flex justifyContent='space-between' alignItems='center'>
                        <InputLabel children='Last name' />
                    </Flex>
                    <InputFieldDetails children={fields?.personalInfo?.lastName} />
                </InputContainer>
                <InputContainer>
                    <Flex justifyContent='space-between' alignItems='center'>
                        <InputLabel children='Sex' />
                    </Flex>
                    <InputFieldDetails children={fields?.personalInfo?.sex} />
                </InputContainer>
                <InputContainer>
                    <Flex justifyContent='space-between' alignItems='center'>
                        <InputLabel children='Birthday' />
                    </Flex>
                    <InputFieldDetails children={fields?.personalInfo?.birthday} />
                </InputContainer>
                <InputContainer>
                    <Flex justifyContent='space-between' alignItems='center'>
                        <InputLabel children='Ocean' />
                    </Flex>
                    <InputFieldDetails children={fields?.personalInfo?.ocean} />
                </InputContainer>
                <InputContainer>
                    <Flex justifyContent='space-between' alignItems='center'>
                        <InputLabel children='Hobby' />
                    </Flex>
                    {fields?.personalInfo?.hobby.map((item) => {
                        return <InputFieldDetails children={item} />
                    })}
                    
                </InputContainer>
            </div>
            <Button children='Done' />
        </form>
    )
}

export default Success
