import React, { createContext, FunctionComponent, useState, useContext, useCallback } from 'react';
import { Time } from '@vacgaps/interfaces';
import { HEALTH_CARE_SERVICE, TargetGroup } from '@vacgaps/constants';

export type WorkingHours = { start: Time, end: Time };
export type FormDataContextProps = {
    healthCareService: HEALTH_CARE_SERVICE;
    city: string;
    address: string;
    minimumAge: number;
    targetGroups: TargetGroup[];
    availableVaccines: number;
    workingHours: WorkingHours;

    setHealthCareService: (newValue: HEALTH_CARE_SERVICE) => void;
    setCity: (newValue: string) => void;
    setAddress: (newValue: string) => void;
    setMinimumAge: (newValue: number) => void;
    addTargetGroup: (value: TargetGroup) => void;
    removeTargetGroup: (value: TargetGroup) => void;
    setAvailableVaccines: (newValue: number) => void;
    setWorkingHours: (newValue: WorkingHours) => void;
};

const FormDataContext = createContext<FormDataContextProps>({} as any);
export const useFormData = (): FormDataContextProps => useContext(FormDataContext);

export const FormDataProvider: FunctionComponent = props => {
    const [healthCareService, setHealthCareService] = useState<HEALTH_CARE_SERVICE>();
    const [city, setCity] = useState<string>();
    const [address, setAddress] = useState<string>();
    const [minimumAge, setMinimumAge] = useState<number>();
    const [targetGroups, setTargetGroups] = useState<TargetGroup[]>([]);
    const [availableVaccines, setAvailableVaccines] = useState<number>();
    const [workingHours, setWorkingHours] = useState<WorkingHours>();

    const addTargetGroup = useCallback((group: TargetGroup) => {
        const newTargetGroups = [...targetGroups];
        newTargetGroups.push(group);
        setTargetGroups(newTargetGroups);
    }, [targetGroups]);

    const removeTargetGroup = useCallback((group: TargetGroup) => {
        const newTargetGroups = [...targetGroups];
        const index = newTargetGroups.indexOf(group);
        if (index > -1) {
            newTargetGroups.splice(index, 1);
        }
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
            minimumAge,
            setMinimumAge,
            targetGroups,
            addTargetGroup,
            removeTargetGroup,
            availableVaccines,
            setAvailableVaccines,
            workingHours,
            setWorkingHours,
        }}>
            {props.children}
        </FormDataContext.Provider>
    );
};
