import React, { FunctionComponent, useMemo } from 'react';
import { FormItem } from '../../form-item';
import { useFormData } from '../../../../providers/FormDataProvider';
import styled from 'styled-components';
import dateFormat from 'dateformat';
import { AutoComplete, OptionType } from '../common/auto-complete';

const timeOptions: OptionType<string>[] = [];
const now = new Date();

for (let hour = 0; hour <= 23; hour++) {
    for (let minuteBucket = 0; minuteBucket < 4; minuteBucket++) {
        const minute: number = minuteBucket * 15;

        now.setHours(hour);
        now.setMinutes(minute);
        now.setSeconds(0);
        now.setMilliseconds(0);
        timeOptions.push(getDateOption(now));
    }
}

function getDateOption(date: Date) {
    const hour: number = date.getHours();
    const minute: number = date.getMinutes();
    const formatHour: string = hour < 10 ? `0${hour}` : `${hour}`;
    const formatMinute: string = minute === 0 ? `00` : `${minute}`;
    const text = `${formatHour}:${formatMinute}`;
    return {
        text,
        value: date.toJSON(),
    };
}

const DropdownWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    >*{
        width: 100%;
    }
    
    >*:first-child {
        margin-left: 10px;
    }
`;

const Comp: FunctionComponent<{ className?: string; }> = props => {
    const { serviceEndTime, setServiceEndTime } = useFormData();

    const partialEndingTime: string = useMemo(() => {
        return dateFormat(Date.now(), 'dd/mm/yyyy');
    }, []);

    return (
        <FormItem className={props.className}>
            <h3>זמן סיום פעילות</h3>
            <DropdownWrapper>
                <AutoComplete<string>
                    options={timeOptions}
                    onChange={value => setServiceEndTime(value)}
                    value={serviceEndTime}
                />
                {partialEndingTime}
            </DropdownWrapper>
        </FormItem>
    );
};

export default Comp;