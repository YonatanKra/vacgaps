import React, { FunctionComponent } from 'react';
import { FormItem } from '../../form-item';
import { Dropdown } from 'semantic-ui-react'
import { HEALTH_CARE_SERVICE } from '@vacgaps/constants';
import { useFormData } from '../../../../providers/FormDataProvider';

type Props = {
    className?: string;
};

const dropDownOptions = Object.entries(HEALTH_CARE_SERVICE).map(_ => ({
    value: _[0],
    text: _[1],
}));

// TODO: css the dropdown list to rtl
const Comp: FunctionComponent<Props> = props => {
    const { setHealthCareService } = useFormData();

    return (
        <FormItem className={props.className}>
            <h3>קופה</h3>
            <Dropdown
                onChange={(_, data) => setHealthCareService(data.value as HEALTH_CARE_SERVICE)}
                placeholder='בחר קופת חולים'
                fluid
                search
                clearable
                selection
                options={dropDownOptions}
            />
        </FormItem>
    );
};

export default Comp;