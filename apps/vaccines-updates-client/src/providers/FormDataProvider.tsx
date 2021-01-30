import React, { createContext, FunctionComponent, useState, useContext, useCallback } from 'react';
import { TargetGroup } from '@vacgaps/constants';
import { VaccinesReport } from '@vacgaps/interfaces';

export type FormDataContextProps = VaccinesReport & {
    // healthCareService: string;
    // city: string;
    // address: string;
    // minimumAge: number;
    // targetGroups: TargetGroup[];
    // availableVaccines: number;
    // endingTime: number;

    setHealthCareService: (newValue: string) => void;
    setCity: (newValue: string) => void;
    setAddress: (newValue: string) => void;
    setMinimalAge: (newValue: number) => void;
    addTargetGroup: (value: TargetGroup) => void;
    removeTargetGroup: (value: TargetGroup) => void;
    setAvailableVaccines: (newValue: number) => void;
    setEndTime: (newValue: string) => void;
};

const FormDataContext = createContext<FormDataContextProps>({} as unknown as any);
export const useFormData = (): FormDataContextProps => useContext(FormDataContext);

export const FormDataProvider: FunctionComponent = props => {
    const [healthCareService, setHealthCareService] = useState<string>();
    const [city, setCity] = useState<string>();
    const [address, setAddress] = useState<string>();
    const [minimalAge, setMinimalAge] = useState<number>();
    const [targetGroups, setTargetGroups] = useState<TargetGroup[]>([]);
    const [availableVaccines, setAvailableVaccines] = useState<number>();
    const [endTime, setEndTime] = useState<string>();

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

    return (
        <FormDataContext.Provider value={{
            healthCareService,
            setHealthCareService,
            city,
            setCity,
            address,
            setAddress,
            minimalAge,
            setMinimalAge,
            targetGroups,
            addTargetGroup,
            removeTargetGroup,
            availableVaccines,
            setAvailableVaccines,
            endTime,
            setEndTime,
        }}>
            {props.children}
        </FormDataContext.Provider>
    );
};
