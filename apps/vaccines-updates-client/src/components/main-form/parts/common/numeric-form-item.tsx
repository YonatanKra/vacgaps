import React, { FunctionComponent, useCallback, useState } from 'react';
import { FormItem } from '../../form-item';
import { TextField } from '@material-ui/core';

type Props = {
    className?: string;
    onChange: (value: number) => void;
    title: string;
    maxValue?: number;
    value?: number;
};

function isNumeric(value: string): boolean {
    return /^\d+$/.test(value);
}

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
            <TextField
                className="form-input"
                placeholder={`הכנס ${props.title}`}
                onChange={args => onValueChange(args.target.value)}
                helperText={error}
                error={!!error}
                value={props.value || ''} />
        </FormItem>
    );
};

export default Comp;