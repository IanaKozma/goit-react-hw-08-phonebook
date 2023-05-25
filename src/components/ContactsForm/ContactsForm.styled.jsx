import styled from '@emotion/styled';
import { Field } from 'formik';

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`;

export const Title = styled.span`
    font-weight: 600;
    color: var(--main-text-color);
    margin-bottom: 5px;
`;

export const StyledField = styled(Field)`
    height: 40px;
    padding: 0 10px 0 10px;
    border: 1px solid var(--second-bg-color);
    outline: none;
    color: var(--main-text-color);
    font-size: 14px;

    &:focus {
        border-color: var(--accent-bg-color);
    }

    &::placeholder {
        font-size: 12px;
        color: var(--main-text-color);
    }
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 300px;
    height: 40px;
    background-color: var(--accent-bg-color);
    color: var(--second-text-color);
    font-family: inherit;
    border: none;
    cursor: pointer;
    transition: background-color var(--main-hover-animation);

    &:hover,
    &:focus {
        background-color: var(--second-bg-color);
    }
`;

export const FormikErrorMessage = styled.div`
    width: 220px;
    height: 20px;
    overflow: auto;
    color: red;
`;
