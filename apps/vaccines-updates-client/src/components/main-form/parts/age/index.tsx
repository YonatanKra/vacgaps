import React, { FunctionComponent } from 'react';
import { useFormData } from '../../../../providers/FormDataProvider';
import NumericFormItem from '../numeric-form-item';

const Comp: FunctionComponent<{ className?: string }> = props => {
    const { setMinimalAge } = useFormData();
    return <NumericFormItem
        className={props.className}
        onChange={setMinimalAge}
        title="גיל"
        maxValue={70}
    />
};

export default Comp;