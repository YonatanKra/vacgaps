import React, { FunctionComponent } from 'react';
import { useFormData } from '../../../../providers/FormDataProvider';
import NumericFormItem from '../numeric-form-item';

const Comp: FunctionComponent<{ className?: string }> = props => {
    const { setMinimalAge, minimalAge } = useFormData();
    return <NumericFormItem
        className={props.className}
        onChange={setMinimalAge}
        title="גיל"
        maxValue={70}
        value={minimalAge}
    />
};

export default Comp;