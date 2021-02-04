import React, { FunctionComponent } from 'react';
import { FormItem } from '../../form-item';
import { HEALTH_CARE_SERVICES } from '@vacgaps/constants';
import { useFormData } from '../../../../providers/FormDataProvider';
import { Autocomplete, TextField } from '@material-ui/core/';

type HealthCareOption = {
    value: string;
    text: string;
}

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
            <Autocomplete<HealthCareOption>
                options={dropDownOptions}
                getOptionLabel={(option) => option.text}
                renderInput={(params) => <TextField {...params} />}
                onChange={(_, value) => setHealthCareService((value as HealthCareOption)?.value)}
                value={healthCareService}
            />
        </FormItem>
    );
};

export default Comp;