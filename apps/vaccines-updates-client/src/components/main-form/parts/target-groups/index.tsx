import React, { FunctionComponent, useMemo } from 'react';
import { FormItem } from '../../form-item';
import { Checkbox } from 'semantic-ui-react'
import styled from 'styled-components';
import { TargetGroup } from '@vacgaps/constants'
import { useFormData } from '../../../../providers/FormDataProvider';

type Props = {
    className?: string;
};

const TargetGroupsContainer = styled.div`
    display:flex;
    align-items: start;
    flex-direction: column;
`;

const TargetGroupWrapper = styled.div`
    display:flex;

    margin-top: 10px;
    &:first-child {
        margin-top: 0;
    }

    label {
        margin-right: 10px;
    }
`;

const Comp: FunctionComponent<Props> = props => {
    const { addTargetGroup, removeTargetGroup } = useFormData();

    const targetGroupsCheckboxes = useMemo(() => {
        const components = Object
            .entries(TargetGroup)
            .map((_, index) =>
                <TargetGroupWrapper key={index}>
                    <Checkbox id={`targetGroup${index}`} onChange={(_event, data) => {
                        if (data.checked) addTargetGroup(_[1]);
                        else removeTargetGroup(_[1]);
                    }} />
                    <label htmlFor={`targetGroup${index}`}>{_[1]}</label>
                </TargetGroupWrapper>
            );

        return components;
    }, [addTargetGroup, removeTargetGroup]);

    return (
        <FormItem className={props.className}>
            <h3>קבוצות יעד</h3>
            <TargetGroupsContainer>
                {targetGroupsCheckboxes.map(Comp => {
                    return Comp;
                })}
            </TargetGroupsContainer>
        </FormItem>
    );
};

export default Comp;