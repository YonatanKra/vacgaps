import React, { createContext, FunctionComponent, useState, useEffect, useContext, useCallback } from 'react';
import { VaccinesReport } from '@vacgaps/interfaces';
import { useFormData } from './FormDataProvider';
import { HEALTH_CARE_SERVICE } from '@vacgaps/constants';
import areEqual from 'lodash.isequal';

export type Address = Pick<VaccinesReport, 'address' | 'city' | 'healthCareService'>;
export type AddressListContextProps = {
    addressList: Address[];
    addNewAddress: (addressName: string) => void;
    isFetchingAddressList: boolean;
};

const AddressListContext = createContext<AddressListContextProps>({
    addressList: [],
    isFetchingAddressList: true,
} as any);

export const useAddressList = (): AddressListContextProps => useContext(AddressListContext);

export const AddressListProvider: FunctionComponent = props => {
    const [isFetchingAddressList, setIsFetchingAddressList] = useState<boolean>(true);
    const [addressList, setAddressList] = useState<Address[]>([]);
    const [newAddedAddress, setNewAddedAddress] = useState<Address[]>([]);
    const [combinedAddressList, setCombinedAddressList] = useState<Address[]>([]);
    const { city, healthCareService } = useFormData();

    const filterAddressList = useCallback((city: string, healthCareService: HEALTH_CARE_SERVICE, combinedAddressList: Address[]) => {
        const filteredList: Address[] = combinedAddressList.filter(_ => {
            // if (!!city && _.city !== city) return false;
            // if (!!healthCareService && _.healthCareService !== healthCareService) return false;
            return true;
        });

        if (!areEqual(filteredList, combinedAddressList)) setAddressList(filteredList);
    }, []);

    useEffect(() => {
        filterAddressList(city, healthCareService, combinedAddressList);
    }, [combinedAddressList, city, healthCareService]);

    useEffect(() => {
        setCombinedAddressList(addressList.concat(newAddedAddress));
    }, [addressList, newAddedAddress]);

    const fetchAddressList = useCallback(async () => {
        setIsFetchingAddressList(true);
        await new Promise(res => setTimeout(res, 3000));
        setIsFetchingAddressList(false);
        setAddressList([]);
    }, []);

    useEffect(() => {
        fetchAddressList();
    }, []);

    const addNewAddress = useCallback((addressName: string) => {
        console.log("adding new address", addressName, newAddedAddress)
        setNewAddedAddress(newAddedAddress.concat({
            address: addressName,
            healthCareService,
            city,
        }));
    }, [newAddedAddress, healthCareService, city, setNewAddedAddress]);

    return (
        <AddressListContext.Provider value={{
            addressList: combinedAddressList,
            isFetchingAddressList,
            addNewAddress
        }}>
            {props.children}
        </AddressListContext.Provider>
    );
}
