import React, { FunctionComponent, useState } from 'react';
import { FormItem } from '../../form-item';
import { CITIES } from '@vacgaps/constants';
import { useFormData } from '../../../../providers/FormDataProvider';
import { TextField, Autocomplete } from '@material-ui/core';

type Props = {
    className?: string;
};

type CityOption = {
    value: string;
    text: string;
}

const dropDownOptions: CityOption[] = Object.keys(CITIES).map(getOption);

function getOption(value: string) {
    return !value ? undefined : {
        value,
        text: CITIES[value].name as string,
    };
}

const Comp: FunctionComponent<Props> = props => {
    const { setCity, city } = useFormData();

    return (
        <FormItem className={props.className}>
            <h3>עיר</h3>
            <Autocomplete<CityOption>
                options={dropDownOptions}
                getOptionLabel={(option) => option.text}
                renderInput={(params) => <TextField {...params} />}
                onChange={(_, value) => setCity((value as CityOption)?.value)}
                value={getOption(city)}
            />
        </FormItem>
    );
};

export default Comp;