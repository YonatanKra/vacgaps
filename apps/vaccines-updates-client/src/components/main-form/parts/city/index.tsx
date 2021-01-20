import React, { FunctionComponent } from 'react';
import { FormItem } from '../../form-item';
import { CITIES, CITIES_TYPE } from '@vacgaps/constants';
import { Dropdown } from 'semantic-ui-react'
import { useFormData } from '../../../../providers/FormDataProvider';

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
            <Dropdown
                onChange={(_, data) => setCity(data.value as string)}
                placeholder='בחר עיר'
                fluid
                search
                selection
                clearable
                options={dropDownOptions}
            />
        </FormItem>
    );
};

export default Comp;