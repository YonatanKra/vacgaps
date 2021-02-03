import { Autocomplete, TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { CITIES } from '@vacgaps/constants';
import { FormItem } from '../../form-item';
import { NewReport, ReportIdOrNew, useFormData } from '../../../../providers/FormDataProvider';
import { useGetReports } from 'apps/vaccines-updates-client/src/hooks/useGetReports';
import styled from 'styled-components';
import React, { FunctionComponent, useCallback } from 'react';
import { VaccinesReport } from '@vacgaps/interfaces';

type ReportOrNew = VaccinesReport | 'NewReport';
type ReportOrNewOption = {
    text: string;
    value: ReportOrNew;
};
const newReportOption: ReportOrNewOption = {
    text: 'הוסף דיווח חדש',
    value: 'NewReport',
};
let reportToEditOptions: ReportOrNewOption[] = [newReportOption];

const Comp: FunctionComponent<{ className?: string; }> = props => {
    const getReports = useGetReports();
    const formData = useFormData();
    const onRefreshReportsClicked = useCallback(async () => {
        // TODO: Error treatment
        const reportsResponse = await getReports();
        reportToEditOptions = reportsResponse.reports.map(report => {
            return {
                text: CITIES[report.city].name,
                value: report,
            };
        });
        reportToEditOptions.unshift(newReportOption);
    }, [getReports]);

    const setReportToEdit: (report: ReportOrNew) => void = report => {
        if (report === newReportOption.value) {
            formData.setReportToEdit(NewReport);
            return;
        }

        const existingReport = report as VaccinesReport;
        formData.setReportToEdit({reportId: existingReport.id});
        formData.setAddress(existingReport.address);
        formData.setAvailableVaccines(existingReport.availableVaccines);
        formData.setCity(existingReport.city);
        formData.setComments(existingReport.comments);
        formData.setEndTime(existingReport.endTime);
        formData.setHealthCareService(existingReport.healthCareService);
        formData.setMinimalAge(existingReport.minimalAge);
    };

    return (
        <FormItem className={props.className}>
            <h3>בחירת דיווח לעריכה:</h3>
            <Autocomplete
                options={reportToEditOptions}
                getOptionLabel={(option) => option.text}
                renderInput={(params) => <TextField {...params} />}
                onChange={(_, value) => setReportToEdit((value as {value:ReportOrNew}).value)}
                value={newReportOption} />
            <Button onClick={onRefreshReportsClicked}>טען דיווחים</Button>
        </FormItem>
    );
};

export default Comp;
export type { ReportIdOrNew };