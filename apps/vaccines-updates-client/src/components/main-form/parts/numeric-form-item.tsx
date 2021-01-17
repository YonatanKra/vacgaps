import React, { FunctionComponent, useCallback, useState } from 'react';
import { FormItem } from '../form-item';
import { Input } from 'semantic-ui-react'
import styled from 'styled-components';

type Props = {
    className?: string;
    onChange: (value: number) => void;
    title: string;
};

function isNumeric(value: string): boolean {
    return /^\d+$/.test(value);
}

const ErrorMessage = styled.label`
    color: orange;
`;

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Comp: FunctionComponent<Props> = props => {
    const [error, setError] = useState<string | undefined>();

    const onValueChange = useCallback((newValue) => {
        if (!isNumeric(newValue)) {
            setError('הכנס מספר בלבד');
            return;
        }

        props.onChange(parseInt(newValue));
        setError(undefined);
    }, []);

    return (
        <FormItem className={props.className}>
            <h3>{props.title}</h3>
            <InputWrapper>
                <Input
                    className="form-input"
                    placeholder={`הכנס ${props.title}`}
                    onChange={(_, data) => onValueChange(data.value)}
                    error={!!error} />
                <ErrorMessage>{error}</ErrorMessage>
            </InputWrapper>
        </FormItem>
    );
};

export default Comp;