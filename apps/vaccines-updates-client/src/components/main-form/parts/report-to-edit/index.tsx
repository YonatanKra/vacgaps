import { Button, Checkbox } from '@material-ui/core';
import { CITIES } from '@vacgaps/constants';
import { FormItem } from '../../form-item';
import { NewReport, ReportIdOrNew, ReportOrNew, useFormData } from '../../../../providers/FormDataProvider';
import { useGetReports } from '../../../../hooks/useGetReports';
import React, { FunctionComponent, useCallback, useEffect, useMemo } from 'react';
import { VaccinesReport } from '@vacgaps/interfaces';
import { AutoComplete, OptionType } from '../common/auto-complete';
import styled from 'styled-components';

type ReportOption = OptionType<ReportOrNew>;

const ReportToEditColumnContainer = styled.div`   
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const ReportToEditRowContainer = styled.div`   
    display: flex;
    flex-direction: row;
    width: 100%;

    >*{
        width: 100%;
    }
`;

const ShowHiddenReportsContainer = styled.div`
    display:flex;

    margin-top: 10px;
    &:first-child {
        margin-top: 0;
    }

    label {
        margin-right: 10px;
    }
`;

const Comp: FunctionComponent<{ className?: string; }> = props => {
    const getReports = useGetReports(/*returnHiddenReports=*/true);
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
            formData.resetForm();
            return;
        }

        const existingReport = (report as { report: VaccinesReport }).report;
        formData.setReportIdToEdit({ reportId: existingReport.id });
        formData.setAddress(existingReport.address);
        formData.setAvailableVaccines(existingReport.availableVaccines);
        formData.setCity(existingReport.city);
        formData.setComments(existingReport.comments);
        formData.setServiceStartTime(existingReport.serviceStartTime);
        formData.setServiceEndTime(existingReport.serviceEndTime);
        formData.setHealthCareService(existingReport.healthCareService);
        formData.setHideReport(!!existingReport.hideReport);
        formData.setMinimalAge(existingReport.minimalAge);
        formData.clearTargetGroups();
        existingReport.targetGroups?.forEach(_ => formData.addTargetGroup(_));
    }, [formData, formData.setReportIdToEdit]);

    const newReportOption: ReportOption = useMemo(() => ({
        text: 'הוסף דיווח חדש',
        value: NewReport,
    }), []);

    function groupBy<T>(array: T[], keySelector: (T) => string): { [key: string]: T[] } {
        return array.reduce((accumulated, item) => {
            const key: string = keySelector(item);
            accumulated[key] = accumulated[key] || [];
            accumulated[key].push(item);
            return accumulated;
        }, {});
    }

    const reportOptions = useMemo(() => {
        const reports = formData.availableReportsToEdit?.reports;
        if (!reports) return [newReportOption];

        const filteredReports = reports.filter(report => formData.showHiddenReports || report === NewReport || !report.report.hideReport);

        const groupedByCity: { [city: string]: VaccinesReport[] } = groupBy(
            filteredReports.filter(report => report !== NewReport)
                   .map(report => (report as { report: VaccinesReport }).report),
            report => report.city);
        
        const groupedByCityAndAddress: [string, [string, VaccinesReport[]][]][] =
            Object.entries(groupedByCity)
                  .map(entry => [entry[0], Object.entries(groupBy(entry[1], report => report.address))]);
        
        const countsByCityAndAddress: { [city: string]: { count: number, byAddress: { [address: string]: { count: number, alreadyAdded: number } } } } =
            Object.fromEntries(groupedByCityAndAddress.map(cityEntry =>
                [cityEntry[0], {
                    count: cityEntry[1].length,
                    byAddress: Object.fromEntries(cityEntry[1].map(addressEntry =>
                        [addressEntry[0], { count: addressEntry[1].length, alreadyAdded: 0 }]
                    ))
                }]
            ));
        
        const options = filteredReports
            .map(report => report === NewReport ? newReportOption : {
                text:
                    CITIES[report.report.city].name +
                    (countsByCityAndAddress[report.report.city].count > 1 ? ' - ' + report.report.address : '') +
                    (countsByCityAndAddress[report.report.city].byAddress[report.report.address].count > 1 ? ' (' + (countsByCityAndAddress[report.report.city].byAddress[report.report.address].alreadyAdded += 1) + ')' : ''),
                value: report,
        });

        return options;
    }, [formData, newReportOption]);

    return (
        <FormItem className={props.className}>
            <ReportToEditColumnContainer>
                <ReportToEditRowContainer>
                    <h3>בחירת דיווח לעריכה:</h3>
                    <AutoComplete<ReportOrNew>
                        options={reportOptions}
                        onChange={value => setReportToEdit(value)}
                    />
                    <Button onClick={refreshReports}>רענן דיווחים</Button>
                </ReportToEditRowContainer>
                <ReportToEditRowContainer>
                    <ShowHiddenReportsContainer>
                        <Checkbox
                                id='showHiddenReportsCheck'
                                onChange={_ => formData.setShowHiddenReports(_.target.checked)}
                                checked={!!formData.showHiddenReports}
                        />
                        <label htmlFor='showHiddenReportsCheck'>הצג דיווחים מוסתרים</label>
                    </ShowHiddenReportsContainer>
                </ReportToEditRowContainer>
            </ReportToEditColumnContainer>
        </FormItem>
    );
};

export default Comp;
export type { ReportIdOrNew };