import React, { FunctionComponent } from 'react';
import { FormItem } from '../../form-item';
import { useFormData } from '../../../../providers/FormDataProvider';
import { TextField } from '@material-ui/core';

const Comp: FunctionComponent<{ className?: string; }> = props => {
    const { setAddress, address } = useFormData();

    return (
        <FormItem className={props.className}>
            <h3>כתובת</h3>
            <TextField onChange={_ => setAddress(_.target.value)} value={address} />
        </FormItem>
    );
};

export default Comp;