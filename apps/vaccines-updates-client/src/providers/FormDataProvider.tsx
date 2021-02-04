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
    setAvailableVaccines: (newValue: number) => void;
    setEndTime: (newValue: string) => void;
    setComments: (newValue: string) => void;
    setHideReport: (newValue: boolean) => void;

    availableReportsToEdit: {reports: ReportOrNew[]};
    setAvailableReportsToEdit: (newValue: {reports: ReportOrNew[]}) => void;
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
    let initialEndTime = new Date();
    initialEndTime.setHours(20);
    initialEndTime.setMinutes(0);
    initialEndTime.setSeconds(0);
    initialEndTime.setMilliseconds(0);

    const [healthCareService, setHealthCareService] = useState<string>();
    const [city, setCity] = useState<string>();
    const [address, setAddress] = useState<string>();
    const [minimalAge, setMinimalAge] = useState<number>();
    const [targetGroups, setTargetGroups] = useState<TargetGroup[]>([]);
    const [availableVaccines, setAvailableVaccines] = useState<number>();
    const [endTime, setEndTime] = useState<string>(initialEndTime.toJSON());
    const [comments, setComments] = useState<string>();
    const [hideReport, setHideReport] = useState<boolean>();

    const [availableReportsToEdit, setAvailableReportsToEdit] = useState<{reports: ReportOrNew[]}>();
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
        return !!healthCareService && !!city && !!address && !!endTime;
    }, [healthCareService, city, address, endTime]
    );

    return (
        <FormDataContext.Provider value={{
            healthCareService,
            setHealthCareService,
            city,
            setCity,
            address,
            setAddress,
            endTime,
            setEndTime,
            minimalAge,
            setMinimalAge,
            targetGroups,
            addTargetGroup,
            removeTargetGroup,
            availableVaccines,
            setAvailableVaccines,
            comments,
            setComments,
            hideReport,
            setHideReport,
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
