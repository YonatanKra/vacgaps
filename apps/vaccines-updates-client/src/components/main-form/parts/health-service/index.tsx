import React, { FunctionComponent } from 'react';
import { FormItem } from '../../form-item';
import { HEALTH_CARE_SERVICES } from '@vacgaps/constants';
import { useFormData } from '../../../../providers/FormDataProvider';
import { Autocomplete, TextField } from '@material-ui/core/';

const dropDownOptions = Object.keys(HEALTH_CARE_SERVICES).map(_ => ({
    value: _,
    text: HEALTH_CARE_SERVICES[_],
}));

const Comp: FunctionComponent<{ className?: string; }> = props => {
    const { setHealthCareService } = useFormData();

    return (
        <FormItem className={props.className}>
            <h3>קופת חולים</h3>
            <Autocomplete
                options={dropDownOptions}
                getOptionLabel={(option) => option.text}
                renderInput={(params) => <TextField {...params} />}
                onChange={(_, value) => setHealthCareService(value as string)}
            />
        </FormItem>
    );
};

export default Comp;