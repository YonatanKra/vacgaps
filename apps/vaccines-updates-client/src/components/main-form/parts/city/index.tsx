import React, { FunctionComponent } from 'react';
import { FormItem } from '../../form-item';
import { CITIES } from '@vacgaps/constants';
import { useFormData } from '../../../../providers/FormDataProvider';
import { AutoComplete, OptionType } from '../common/auto-complete';

type CityOption = OptionType<string>;
const dropDownOptions: CityOption[] = Object.keys(CITIES).map(getOption);

function getOption(value: string) {
    return !value ? undefined : {
        value,
        text: CITIES[value].name as string,
    };
}

const Comp: FunctionComponent<{ className?: string }> = props => {
    const { setCity, city } = useFormData();

    return (
        <FormItem className={props.className}>
            <h3>עיר</h3>
            <AutoComplete<string>
                options={dropDownOptions}
                onChange={value => setCity(value)}
                value={city}
            />
        </FormItem>
    );
};

export default Comp;