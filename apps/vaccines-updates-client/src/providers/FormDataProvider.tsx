import React, { createContext, FunctionComponent, useState, useContext, useCallback, useMemo } from 'react';
import { TargetGroup } from '@vacgaps/constants';
import { VaccinesReport, VaccinesReportId } from '@vacgaps/interfaces';


export type FormDataContextProps = Omit<VaccinesReport, "id"> & {
    setHealthCareService: (newValue: string) => void;
    setCity: (newValue: string) => void;
    setAddress: (newValue: string) => void;
    setMinimalAge: (newValue: number) => void;
    addTargetGroup: (value: TargetGroup) => void;
    removeTargetGroup: (value: TargetGroup) => void;
    clearTargetGroups: () => void;
    setAvailableVaccines: (newValue: number) => void;
    setServiceEndTime: (newValue: string) => void;
    setDisplayEndTime: (newValue: string) => void;
    setComments: (newValue: string) => void;
    setHideReport: (newValue: boolean) => void;
    showHiddenReports: boolean;
    setShowHiddenReports: (newValue: boolean) => void;
    availableReportsToEdit: { reports: ReportOrNew[] };
    setAvailableReportsToEdit: (newValue: { reports: ReportOrNew[] }) => void;
    reportIdToEdit: ReportIdOrNew;
    setReportIdToEdit: (newValue: ReportIdOrNew) => void;
    canSendReport: boolean;
};

export type ReportIdOrNew = { reportId: VaccinesReportId } | 'NewReport';
export type ReportOrNew = { report: VaccinesReport } | 'NewReport';
export const NewReport = 'NewReport';

const FormDataContext = createContext<FormDataContextProps>({} as FormDataContextProps);
export const useFormData = (): FormDataContextProps => useContext(FormDataContext);

export const FormDataProvider: FunctionComponent = props => {
    const initialServiceEndTime = new Date();
    initialServiceEndTime.setHours(20);
    initialServiceEndTime.setMinutes(0);
    initialServiceEndTime.setSeconds(0);
    initialServiceEndTime.setMilliseconds(0);

    const initialDisplayEndTime = new Date();
    initialDisplayEndTime.setHours(23);
    initialDisplayEndTime.setMinutes(59);
    initialDisplayEndTime.setSeconds(59);
    initialDisplayEndTime.setMilliseconds(999);

    const [healthCareService, setHealthCareService] = useState<string>();
    const [city, setCity] = useState<string>();
    const [address, setAddress] = useState<string>();
    const [minimalAge, setMinimalAge] = useState<number>();
    const [targetGroups, setTargetGroups] = useState<TargetGroup[]>([]);
    const [availableVaccines, setAvailableVaccines] = useState<number>();
    const [serviceEndTime, setServiceEndTime] = useState<string>(initialServiceEndTime.toJSON());
    const [displayEndTime, setDisplayEndTime] = useState<string>(initialDisplayEndTime.toJSON());
    const [comments, setComments] = useState<string>();
    const [hideReport, setHideReport] = useState<boolean>();
    const [showHiddenReports, setShowHiddenReports] = useState<boolean>();

    const [availableReportsToEdit, setAvailableReportsToEdit] = useState<{ reports: ReportOrNew[] }>();
    const [reportIdToEdit, setReportIdToEdit] = useState<ReportIdOrNew>(NewReport);

    const addTargetGroup = useCallback((group: TargetGroup) => {
        setTargetGroups([...targetGroups, group]);
    }, [targetGroups]);

    const removeTargetGroup = useCallback((group: TargetGroup) => {
        const indexToRemove = targetGroups.indexOf(group);
        if (indexToRemove < 0) return;

        const newTargetGroups = [...targetGroups];
        newTargetGroups.splice(indexToRemove, 1);
        setTargetGroups(newTargetGroups);
    }, [targetGroups]);

    const canSendReport: boolean = useMemo(() => {
        return !!healthCareService && !!city && !!address && !!displayEndTime;
    }, [healthCareService, city, address, displayEndTime]
    );

    const clearTargetGroups = useCallback(() => {
        setTargetGroups([]);
    }, []);

    return (
        <FormDataContext.Provider value={{
            healthCareService,
            setHealthCareService,
            city,
            setCity,
            address,
            setAddress,
            serviceEndTime,
            setServiceEndTime,
            displayEndTime,
            setDisplayEndTime,
            minimalAge,
            setMinimalAge,
            targetGroups,
            addTargetGroup,
            removeTargetGroup,
            clearTargetGroups,
            availableVaccines,
            setAvailableVaccines,
            comments,
            setComments,
            hideReport,
            setHideReport,
            showHiddenReports,
            setShowHiddenReports,
            availableReportsToEdit,
            setAvailableReportsToEdit,
            reportIdToEdit,
            setReportIdToEdit,
            comingFeedbackCount: undefined,
            canSendReport
        }}>
            {props.children}
        </FormDataContext.Provider>
    );
};
