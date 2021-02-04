import React, { FunctionComponent, useMemo } from 'react';
import { FormItem } from '../../form-item';
import { useFormData } from '../../../../providers/FormDataProvider';
import styled from 'styled-components';
import dateFormat from 'dateformat';
import Autocomplete from '@material-ui/core/Autocomplete';
import TextField from '@material-ui/core/TextField';

const timeOptions: { text: string, value: string }[] = [];
const now = new Date();

for (let hour = 0; hour <= 23; hour++) {
    for (let minuteBucket = 0; minuteBucket < 4; minuteBucket++) {
        const minute: number = minuteBucket * 15;

        now.setHours(hour);
        now.setMinutes(minute);
        timeOptions.push(formatDateOption(now));
    }
}

function formatDateOption(date: Date) {
    const hour: number = date.getHours();
    const minute: number = date.getMinutes();
    const formatHour: string = hour < 10 ? `0${hour}` : `${hour}`;
    const formatMinute: string = minute === 0 ? `00` : `${minute}`;
    const text = `${formatHour}:${formatMinute}`;
    return {
        text,
        value: now.toJSON(),
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
    const { endTime, setEndTime } = useFormData();

    const partialEndingTime: string = useMemo(() => {
        return dateFormat(Date.now(), 'dd/mm/yyyy');
    }, []);

    return (
        <FormItem className={props.className}>
            <h3>זמן סיום פעילות</h3>
            <DropdownWrapper>
                <Autocomplete<{ text: string, value: string }>
                    options={timeOptions}
                    getOptionLabel={(option) => option.text}
                    renderInput={(params) => <TextField {...params} />}
                    onChange={(_, value) => setEndTime((value as {value:string}).value)}
                    value={formatDateOption(new Date(endTime))}
                />
                {partialEndingTime}
            </DropdownWrapper>
        </FormItem>
    );
};

export default Comp;