import React, { FunctionComponent } from 'react';
import { useFormData } from '../../../../providers/FormDataProvider';
import NumericFormItem from '../numeric-form-item';

const Comp: FunctionComponent<{ className?: string }> = props => {
    const { setAvailableVaccines } = useFormData();
    return <NumericFormItem className={props.className} onChange={setAvailableVaccines} title="כמות חיסונים" />
};

export default Comp;