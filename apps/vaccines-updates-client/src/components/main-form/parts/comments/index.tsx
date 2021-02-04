import React, { FunctionComponent } from 'react';
import { FormItem } from '../../form-item';
import { useFormData } from '../../../../providers/FormDataProvider';
import { TextField } from '@material-ui/core';

const Comp: FunctionComponent<{ className?: string; }> = props => {
    const { setComments, comments } = useFormData();

    return (
        <FormItem className={props.className}>
            <h3>הערות</h3>
            <TextField onChange={_ => setComments(_.target.value)} value={comments} />
        </FormItem>
    );
};

export default Comp;