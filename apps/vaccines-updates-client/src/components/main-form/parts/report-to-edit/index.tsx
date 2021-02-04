import { Autocomplete, TextField } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { CITIES } from '@vacgaps/constants';
import { FormItem } from '../../form-item';
import { NewReport, ReportIdOrNew, ReportOrNew, useFormData } from '../../../../providers/FormDataProvider';
import { useGetReports } from 'apps/vaccines-updates-client/src/hooks/useGetReports';
import styled from 'styled-components';
import React, { FunctionComponent, useCallback } from 'react';
import { VaccinesReport } from '@vacgaps/interfaces';

type ReportOption = {
    text: string;
    report: ReportOrNew;
}

const Comp: FunctionComponent<{ className?: string; }> = props => {
    const getReports = useGetReports();
    const formData = useFormData();
    const refreshReports = useCallback(async () => {
        // TODO: Error treatment
        const reportsResponse = await getReports();
        const reports: ReportOrNew[] = reportsResponse.reports.map(report => {
            return { report };
        });
        reports.unshift(NewReport);
        formData.setAvailableReportsToEdit({reports});
    }, [getReports]);

    const setReportToEdit: (report: ReportOrNew) => void = report => {
        if (!report || report === NewReport) {
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

    function getReportOptions(reports: ReportOrNew[]): ReportOption[] {
        const newReportOption: ReportOption = {
            text: 'הוסף דיווח חדש',
            report: NewReport,
        };

        if (!reports) {
            return [newReportOption];
        }

        let alreadySeenText: {[text: string]: boolean} = {};
        return reports.map(report => {
            if (report === NewReport) {
                return newReportOption;
            }

            let text = CITIES[report.report.city].name;
            let nextIndex = 1;
            while (alreadySeenText[text]) {
                text = CITIES[report.report.city].name + ' (' + (++nextIndex) + ')';
            }

            alreadySeenText[text] = true;

            return {
                text,
                report,
            }
        });
    }

    return (
        <FormItem className={props.className}>
            <h3>בחירת דיווח לעריכה:</h3>
            <Autocomplete<{text: string, report: ReportOrNew}>
                options={getReportOptions(formData.availableReportsToEdit?.reports)}
                getOptionLabel={option => option?.text}
                renderInput={(params) => <TextField {...params} />}
                onChange={(_, value) => setReportToEdit((value as {report: ReportOrNew})?.report ?? NewReport)}
            />
            <Button onClick={refreshReports}>רענן דיווחים</Button>
        </FormItem>
    );
};

export default Comp;
export type { ReportIdOrNew };