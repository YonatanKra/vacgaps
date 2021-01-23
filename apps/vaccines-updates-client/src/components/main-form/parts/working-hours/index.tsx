import React, { FunctionComponent, useMemo } from 'react';
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
    const { endTime, setEndTime } = useFormData();

    const partialEndingTime: string = useMemo(() => {
        return dateFormat(endTime || Date.now(), 'dd/mm/yyyy');
    }, [endTime]);

    return (
        <FormItem className={props.className}>
            <h3>זמן סיום פעילות</h3>
            <DropdownWrapper>
                <Dropdown
                    onChange={(_, data) => setEndTime(data.value as unknown as any)}
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