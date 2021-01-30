import React, { FunctionComponent } from 'react';
import { FormItem } from '../../form-item';
import { CITIES } from '@vacgaps/constants';
import { useFormData } from '../../../../providers/FormDataProvider';
import { TextField, Autocomplete } from '@material-ui/core';

type Props = {
    className?: string;
};

const dropDownOptions = Object.keys(CITIES).map(_ => ({
    value: _,
    text: CITIES[_].name,
}));

const Comp: FunctionComponent<Props> = props => {
    const { setCity } = useFormData();

    return (
        <FormItem className={props.className}>
            <h3>עיר</h3>
            <Autocomplete
                options={dropDownOptions}
                getOptionLabel={(option) => option.text}
                renderInput={(params) => <TextField {...params} />}
                onChange={(_, value) => setCity(value as string)}
            />
        </FormItem>
    );
};

export default Comp;