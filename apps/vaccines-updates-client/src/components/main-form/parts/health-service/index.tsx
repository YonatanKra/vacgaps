import React, { FunctionComponent } from 'react';
import { FormItem } from '../../form-item';
import { Dropdown } from 'semantic-ui-react'
import { HEALTH_CARE_SERVICES, HEALTH_CARE_SERVICES_TYPE } from '@vacgaps/constants';
import { useFormData } from '../../../../providers/FormDataProvider';

const dropDownOptions = Object.keys(HEALTH_CARE_SERVICES).map(_ => ({
    value: _,
    text: HEALTH_CARE_SERVICES[_],
}));

const Comp: FunctionComponent<{ className?: string; }> = props => {
    const { setHealthCareService } = useFormData();

    return (
        <FormItem className={props.className}>
            <h3>קופה</h3>
            <Dropdown
                onChange={(_, data) => setHealthCareService(data.value as string)}
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