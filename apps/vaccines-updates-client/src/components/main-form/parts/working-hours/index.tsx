import React, { FunctionComponent, useMemo } from 'react';
import { FormItem } from '../../form-item';
import { useFormData } from '../../../../providers/FormDataProvider';
import styled from 'styled-components';
import dateFormat from 'dateformat';
import Autocomplete from '@material-ui/core/Autocomplete';
import TextField from '@material-ui/core/TextField';

type HourAndMinute = {
    hour: number;
    minute: number;
};

const timeOptions: { text: string, value: string }[] = [];
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
            value: now.toJSON(),
        });
    }
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
                <Autocomplete
                    options={timeOptions}
                    getOptionLabel={(option) => option.text}
                    renderInput={(params) => <TextField {...params} />}
                    onChange={(_, value) => setEndTime((value as {value:string; text:any}).value)} />
                {partialEndingTime}
            </DropdownWrapper>
        </FormItem>
    );
};

export default Comp;