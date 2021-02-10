import React, { FunctionComponent } from 'react';
import { FormItem } from '../../form-item';
import { HEALTH_CARE_SERVICES } from '@vacgaps/constants';
import { useFormData } from '../../../../providers/FormDataProvider';
import { AutoComplete, OptionType } from '../common/auto-complete';

type HealthCareOption = OptionType<string>;
const dropDownOptions: HealthCareOption[] = Object.keys(HEALTH_CARE_SERVICES).map(getOption);

function getOption(value: string) {
    return !value ? undefined : {
        value,
        text: HEALTH_CARE_SERVICES[value] as string,
    };
}

const Comp: FunctionComponent<{ className?: string; }> = props => {
    const { setHealthCareService, healthCareService } = useFormData();

    return (
        <FormItem className={props.className}>
            <h3>קופת חולים</h3>
            <AutoComplete<string>
                options={dropDownOptions}
                onChange={value => setHealthCareService(value)}
                value={healthCareService}
            />
        </FormItem>
    );
};

export default Comp;