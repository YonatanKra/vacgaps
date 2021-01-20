import React, { FunctionComponent, useCallback, useMemo, useState } from 'react';
import { FormItem } from '../../form-item';
import { Dropdown, DropdownItemProps } from 'semantic-ui-react'
import { useFormData } from '../../../../providers/FormDataProvider';
import styled from 'styled-components';
import dateFormat from 'dateformat';

type HourAndMinute = {
    hour: number;
    minute: number;
};

const timeOptions: DropdownItemProps[] = [];
const now = new Date();

for (let hour = 0; hour <= 23; hour++) {
    const formatHour: string = hour < 10 ? `0${hour}` : `${hour}`;
    for (let minuteBucket = 0; minuteBucket < 4; minuteBucket++) {
        const minute: number = minuteBucket * 15;
        const formatMinute: string = minute === 0 ? `00` : `${minute}`;

        const text = `${formatHour}:${formatMinute}`;
        now.setHours(hour);
        now.setMinutes(minute);
        timeOptions.push({
            text,
            value: now.getTime(),
        });
    }
}

const DropdownWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    >*:first-child {
        margin-left: 10px;
    }
`;

const Comp: FunctionComponent<{ className?: string; }> = props => {
    const { setEndingTime, endingTime } = useFormData();

    const partialEndingTime: string = useMemo(() => {
        return dateFormat(endingTime || Date.now(), 'dd/mm/yyyy');
    }, [endingTime]);

    return (
        <FormItem className={props.className}>
            <h3>זמן סיום פעילות</h3>
            <DropdownWrapper>
                <Dropdown
                    onChange={(_, data) => setEndingTime(data.value as any)}
                    placeholder='שעת סיום'
                    fluid
                    search
                    clearable
                    selection
                    options={timeOptions}
                />
                {partialEndingTime}
            </DropdownWrapper>
        </FormItem>
    );
};

export default Comp;