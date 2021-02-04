import { Autocomplete, TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { CITIES } from '@vacgaps/constants';
import { FormItem } from '../../form-item';
import { NewReport, ReportIdOrNew, ReportOrNew, useFormData } from '../../../../providers/FormDataProvider';
import { useGetReports } from 'apps/vaccines-updates-client/src/hooks/useGetReports';
import styled from 'styled-components';
import React, { FunctionComponent, useCallback } from 'react';
import { VaccinesReport } from '@vacgaps/interfaces';


const Comp: FunctionComponent<{ className?: string; }> = props => {
    const getReports = useGetReports();
    const formData = useFormData();
    const onRefreshReportsClicked = useCallback(async () => {
        // TODO: Error treatment
        const reportsResponse = await getReports();
        const reports: ReportOrNew[] = reportsResponse.reports.map(report => {
            return { report };
        });
        reports.unshift(NewReport);
        formData.setAvailableReportsToEdit({reports});
    }, [getReports]);

    const setReportToEdit: (report: ReportOrNew) => void = report => {
        if (report === NewReport) {
            formData.setReportIdToEdit(NewReport);
            return;
        }

        const existingReport = (report as {report: VaccinesReport}).report;
        formData.setReportIdToEdit({reportId: existingReport.id});
        formData.setAddress(existingReport.address);
        formData.setAvailableVaccines(existingReport.availableVaccines);
        formData.setCity(existingReport.city);
        formData.setComments(existingReport.comments);
        formData.setEndTime(existingReport.endTime);
        formData.setHealthCareService(existingReport.healthCareService);
        formData.setHideReport(!!existingReport.hideReport);
        formData.setMinimalAge(existingReport.minimalAge);
    };

    return (
        <FormItem className={props.className}>
            <h3>בחירת דיווח לעריכה:</h3>
            <Autocomplete
                options={formData.availableReportsToEdit?.reports ?? [NewReport]}
                getOptionLabel={(option) => option === NewReport ? 'הוסף דיווח חדש' : CITIES[option.report.city].name}
                renderInput={(params) => <TextField {...params} />}
                onChange={(_, value) => setReportToEdit(value as ReportOrNew)}
                value={NewReport} />
            <Button onClick={onRefreshReportsClicked}>טען דיווחים</Button>
        </FormItem>
    );
};

export default Comp;
export type { ReportIdOrNew };