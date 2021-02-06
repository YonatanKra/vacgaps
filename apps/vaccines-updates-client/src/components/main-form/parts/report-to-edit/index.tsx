import { Button } from '@material-ui/core';
import { CITIES } from '@vacgaps/constants';
import { FormItem } from '../../form-item';
import { NewReport, ReportIdOrNew, ReportOrNew, useFormData } from '../../../../providers/FormDataProvider';
import { useGetReports } from '../../../../hooks/useGetReports';
import React, { FunctionComponent, useCallback, useEffect, useMemo } from 'react';
import { VaccinesReport } from '@vacgaps/interfaces';
import { AutoComplete, OptionType } from '../common/auto-complete';

type ReportOption = OptionType<ReportOrNew>;

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
        formData.setAvailableReportsToEdit({ reports });
    }, [getReports, formData.setAvailableReportsToEdit]);

    useEffect(() => {
        refreshReports();
    }, [refreshReports]);

    const setReportToEdit = useCallback((report: ReportOrNew) => {
        if (!report || report === NewReport) {
            formData.setReportIdToEdit(NewReport);
            return;
        }

        const existingReport = (report as { report: VaccinesReport }).report;
        formData.setReportIdToEdit({ reportId: existingReport.id });
        formData.setAddress(existingReport.address);
        formData.setAvailableVaccines(existingReport.availableVaccines);
        formData.setCity(existingReport.city);
        formData.setComments(existingReport.comments);
        formData.setServiceEndTime(existingReport.serviceEndTime);
        formData.setHealthCareService(existingReport.healthCareService);
        formData.setHideReport(!!existingReport.hideReport);
        formData.setMinimalAge(existingReport.minimalAge);
        formData.clearTargetGroups();
        existingReport.targetGroups?.forEach(_ => formData.addTargetGroup(_));
    }, [formData]);

    const newReport: ReportOption = useMemo(() => ({
        text: 'הוסף דיווח חדש',
        value: NewReport,
    }), []);

    const reportOptions = useMemo(() => {
        const reports = formData.availableReportsToEdit?.reports;
        if (!reports) return [newReport];

        const alreadySeenText: { [text: string]: boolean } = {};
        return reports.map(report => {
            if (report === NewReport) {
                return newReport;
            }

            let text = CITIES[report.report.city].name;
            let nextIndex = 1;
            while (alreadySeenText[text]) {
                text = CITIES[report.report.city].name + ' (' + (++nextIndex) + ')';
            }

            alreadySeenText[text] = true;

            return {
                text,
                value: report,
            } as ReportOption;
        });
    }, [formData, newReport]);

    return (
        <FormItem className={props.className}>
            <h3>בחירת דיווח לעריכה:</h3>
            <AutoComplete<ReportOrNew>
                options={reportOptions}
                onChange={value => setReportToEdit(value)}
            />
            <Button onClick={refreshReports}>רענן דיווחים</Button>
        </FormItem>
    );
};

export default Comp;
export type { ReportIdOrNew };