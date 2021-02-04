import React, { FunctionComponent, useMemo } from 'react';
import { FormItem } from '../../form-item';
import styled from 'styled-components';
import { TargetGroup } from '@vacgaps/constants'
import { useFormData } from '../../../../providers/FormDataProvider';
import { Checkbox } from '@material-ui/core';

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
    const { addTargetGroup, removeTargetGroup, targetGroups } = useFormData();

    const targetGroupsCheckboxes = useMemo(() => {
        const components = Object
            .entries(TargetGroup)
            .map((_, index) =>
                <TargetGroupWrapper key={index}>
                    <Checkbox
                        color="primary"
                        id={`targetGroup${index}`}
                        onChange={(_event, isChecked) => {
                            if (isChecked) addTargetGroup(_[1]);
                            else removeTargetGroup(_[1]);
                        }}
                        checked={targetGroups.indexOf(_[1]) >= 0}
                    />
                    <label htmlFor={`targetGroup${index}`}>{_[1]}</label>
                </TargetGroupWrapper>
            );

        return components;
    }, [addTargetGroup, removeTargetGroup]);

    return (
        <FormItem className={props.className}>
            <h3>קבוצות יעד</h3>
            <TargetGroupsContainer>
                {targetGroupsCheckboxes}
            </TargetGroupsContainer>
        </FormItem>
    );
};

export default Comp;