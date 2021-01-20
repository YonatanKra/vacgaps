import React, { createContext, FunctionComponent, useState, useContext, useCallback } from 'react';
import { TargetGroup } from '@vacgaps/constants';

export type FormDataContextProps = {
    healthCareService: string;
    city: string;
    address: string;
    minimumAge: number;
    targetGroups: TargetGroup[];
    availableVaccines: number;
    endingTime: number;

    setHealthCareService: (newValue: string) => void;
    setCity: (newValue: string) => void;
    setAddress: (newValue: string) => void;
    setMinimumAge: (newValue: number) => void;
    addTargetGroup: (value: TargetGroup) => void;
    removeTargetGroup: (value: TargetGroup) => void;
    setAvailableVaccines: (newValue: number) => void;
    setEndingTime: (newValue: number) => void;
};

const FormDataContext = createContext<FormDataContextProps>({} as any);
export const useFormData = (): FormDataContextProps => useContext(FormDataContext);

export const FormDataProvider: FunctionComponent = props => {
    const [healthCareService, setHealthCareService] = useState<string>();
    const [city, setCity] = useState<string>();
    const [address, setAddress] = useState<string>();
    const [minimumAge, setMinimumAge] = useState<number>();
    const [targetGroups, setTargetGroups] = useState<TargetGroup[]>([]);
    const [availableVaccines, setAvailableVaccines] = useState<number>();
    const [endingTime, setEndingTime] = useState<number>();

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
            minimumAge,
            setMinimumAge,
            targetGroups,
            addTargetGroup,
            removeTargetGroup,
            availableVaccines,
            setAvailableVaccines,
            endingTime,
            setEndingTime,
        }}>
            {props.children}
        </FormDataContext.Provider>
    );
};
