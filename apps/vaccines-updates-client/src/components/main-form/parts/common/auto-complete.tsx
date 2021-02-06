import { TextField, Autocomplete as MaterialAutoComplete, AutocompleteProps } from '@material-ui/core';
import React, { } from 'react';

export type OptionType<T> = {
    text: string;
    value: T;
};

export function AutoComplete<AutoCompleteOptionValueType>
    (props: (
        Omit<AutocompleteProps<OptionType<AutoCompleteOptionValueType>, undefined, undefined, undefined>, 'renderInput'> &
        {
            onChange: (value: AutoCompleteOptionValueType) => void,
            value?: AutoCompleteOptionValueType,
        }
    )): JSX.Element {
    return <MaterialAutoComplete<OptionType<AutoCompleteOptionValueType>>
        {...props}
        getOptionLabel={option => option.text}
        renderInput={(params) => <TextField {...params} />}
        onChange={(_, value) => props?.onChange?.((value as OptionType<AutoCompleteOptionValueType>)?.value)}
        value={(props?.value && props.options.find(_ => _.value === props.value)) || { text: '', value: '' } as any}
    />
}