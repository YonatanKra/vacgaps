import React, { FunctionComponent, useState } from 'react';
import { FormItem } from '../../form-item';
import { Dropdown, DropdownItemProps } from 'semantic-ui-react'
import { useFormData } from '../../../../providers/FormDataProvider';
import styled from 'styled-components';

type Props = {
    className?: string;
};

const timeOptions: DropdownItemProps[] = [];

for (let i = 0; i <= 23; i++) {
    const hour: string = i < 10 ? `0${i}` : `${i}`;
    for (let j = 0; j < 4; j++) {
        const minute: number = j * 15;
        const formatMinute: string = minute === 0 ? `00` : `${minute}`;

        const item = `${hour}:${formatMinute}`;
        timeOptions.push({ value: item, text: item, hour, minute });
    }
}

const DropdownWrapper = styled.div`
    display: flex;
    flex-direction: row;

    >*:first-child {
        margin-left: 10px;
    }
`;

const Comp: FunctionComponent<Props> = props => {
    const { setWorkingHours } = useFormData();

    const [startTime, setStartTime] = useState<number>();

    return (
        <FormItem className={props.className}>
            <h3>שעות פעילות</h3>
            <DropdownWrapper>
                <Dropdown
                    // onChange={(_, data) => setWorkingHours({en})} TODO: decide on the spec
                    placeholder='התחלה'
                    fluid
                    search
                    clearable
                    selection
                    options={timeOptions}
                />
                <Dropdown
                    // onChange={(_, data) => setWorkingHours({en})} TODO: decide on the spec
                    placeholder='סיום'
                    fluid
                    search
                    clearable
                    selection
                    options={timeOptions}
                />
            </DropdownWrapper>
        </FormItem>
    );
};

export default Comp;