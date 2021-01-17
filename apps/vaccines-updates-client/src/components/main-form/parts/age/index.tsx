import React, { FunctionComponent } from 'react';
import { useFormData } from '../../../../providers/FormDataProvider';
import NumericFormItem from '../numeric-form-item';

const Comp: FunctionComponent<{ className?: string }> = props => {
    const { setMinimumAge } = useFormData();
    return <NumericFormItem className={props.className} onChange={setMinimumAge} title="גיל" />
};

export default Comp;