import React, { FunctionComponent, useCallback, useState } from 'react';
import { FormItem } from '../form-item';
import styled from 'styled-components';
import { Input } from '@material-ui/core';

type Props = {
    className?: string;
    onChange: (value: number) => void;
    title: string;
    maxValue?: number;
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
        if (!newValue) {
            setError(undefined);
            props.onChange(undefined);
            return;
        }

        if (!isNumeric(newValue)) {
            setError('הכנס מספר בלבד');
            return;
        }

        if (!!props.maxValue && props.maxValue < newValue) {
            setError(`הכנס ערך הקטן מ-${props.maxValue}`);
            return;
        }

        props.onChange(parseInt(newValue));
        setError(undefined);
    }, [props]);

    return (
        <FormItem className={props.className}>
            <h3>{props.title}</h3>
            <InputWrapper>
                <Input
                    className="form-input"
                    placeholder={`הכנס ${props.title}`}
                    onChange={args => onValueChange(args.target.value)}
                    error={!!error} />
                <ErrorMessage>{error}</ErrorMessage>
            </InputWrapper>
        </FormItem>
    );
};

export default Comp;