import React from 'react'
import styled from 'styled-components'
import { STEPS } from '../utils/constants'

const BreadcrumbsList = styled.ul`
    display: flex; 
    align-content: center;
    justify-content: center;
    margin-top: 20px;
    list-style: none;
    color: #ffffffea;
    font-size: 18px;
    padding: 0;
    & > button:after {
        content: '/';
        padding: 0 20px;
        text-decoration: none;
        pointer-events: none;
    }
    & > button:after:hover {
        text-decoration: none;
    }
`

const CrumbButton = styled.button`
    display: inline-block;
    font-size: 16px;
    font-family: inherit;
    border: none;
    background-color: inherit;
    color: #e6e0e0;
    :hover {
        cursor: pointer;
        color: #8c6097;
    }
    :last-of-type {
        color: #89b1b6;
    }
    :last-of-type:hover {
        cursor: auto;
    }
    &:last-of-type:after {
        content: '';
        padding: 0;
    }
`

export const getCurrentCrumbs = (step, setStep) => {
    const goBack = () => {
        setStep(STEPS.SIGN_UP)
    }

    switch (step) {
        case STEPS.SIGN_UP:
            return (
                <BreadcrumbsList>
                    <CrumbButton>SignUpInfo</CrumbButton>
                </BreadcrumbsList>
            )
        case STEPS.PERSONAL:
            return (
                <BreadcrumbsList>
                    <CrumbButton onClick={goBack}>SignUpInfo</CrumbButton>
                    <CrumbButton>PersonalInfo</CrumbButton>
                </BreadcrumbsList>
            )
        default:
            return null
    }
}

export default getCurrentCrumbs
