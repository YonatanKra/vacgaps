import { Button } from '@material-ui/core';
import { CITIES, HEALTH_CARE_SERVICES } from '@vacgaps/constants';
import React, { FunctionComponent, useCallback, useState } from 'react';
import styled from 'styled-components';
import { useGetReports } from '../../../../hooks/useGetReports';

const FacebookPostContainer = styled.div`   
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border: 1px solid lightgray;
    border-radius: 20px;
    background-color:lightgray;
    width: 90%;
    max-width: 450px;
`;

const FacebookPostTextArea = styled.textarea`
    width: 90%;
`;

function addFieldToRow(rowState: { isAddedField: boolean }, fieldPrefix: string, value: string, convertValue?: (val: string) => string): string {
    if (!value) {
        return '';
    }

    let result = '';
    if (!rowState.isAddedField) {
        rowState.isAddedField = true;
        result += ': ';
    } else {
        result += ', ';
    }

    result += fieldPrefix + (convertValue ? convertValue(value) : value);
    return result;
}

const Comp: FunctionComponent<{ className?: string; }> = props => {
    const [facebookPost, setFacebookPost] = useState<string>();
    const [textAreaRows, setTextAreaRows] = useState<number>();

    const getReports = useGetReports();
    const generatePost = useCallback(async () => {
        // TODO: Error treatment
        const reportsResponse = await getReports();
        const reports = reportsResponse.reports.sort(function (a, b) {
            let result = a.healthCareService.localeCompare(b.healthCareService);
            // if (result === 0) result = a.serviceEndTime - b.serviceEndTime;
            if (result === 0) result = a.city.localeCompare(b.city);
            return result;
        });

        const date = new Date(Date.now());
        let post = 'פוסט ריכוז מידע שיש להיום ' + date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear() + '\n';
        post += 'ימשיך להתעדכן במהלך היום\n';
        post += 'במקביל אתר המשקפת מתעדכן כל הזמן https://www.getvacci.org.il\n\n';
        let lastHealthCare = '';
        for (let i = 0; i < reports.length; ++i) {
            try {
                if (lastHealthCare !== reports[i].healthCareService) {
                    post += 'חיסוני קורונה לחברי\\ות #' + HEALTH_CARE_SERVICES[reports[i].healthCareService] + ':\n';
                    lastHealthCare = reports[i].healthCareService;
                }
                
                post += '- #' + CITIES[reports[i].city].name.replace(' ', '_');
                
                const rowState = { isAddedField: false };
                
                post += addFieldToRow(rowState, 'בכתובת ', reports[i].address);
                post += addFieldToRow(rowState, 'מעל גיל ', reports[i].minimalAge?.toString());
                post += addFieldToRow(rowState, 'עד ', reports[i].serviceEndTime, function(timeJson) {
                    const time = new Date(timeJson);
                    let formatted = '';
                    const currentTime = new Date(Date.now());
                    if (currentTime.getDate() !== time.getDate() || currentTime.getMonth() !== time.getMonth()) {
                        formatted += time.getDate() + '/' + (time.getMonth() + 1) + ' ';
                    }
                    formatted += time.getHours() + ':' + (time.getMinutes() < 10 ? '0' : '') + time.getMinutes();
                    return formatted;
                });

                if (reports[i].comments) {
                    post += ' (' + reports[i].comments + ')';
                }
            } catch (e) {
                console.log('Error in report ' + i + ': ' + e + '\n');
            }
            post += '.\n';
        }

        setFacebookPost(post);
        setTextAreaRows(Math.min(reports.length + 10, 20));
    }, [getReports]);
    
    return (
        <FacebookPostContainer className={props.className}>
            <Button onClick={generatePost}>
                צור פוסט מהדיווחים שנשמרו
            </Button>
            <FacebookPostTextArea
                value={facebookPost}
                readOnly={true}
                rows={textAreaRows}
            />
        </FacebookPostContainer>
    );
};

export default Comp;