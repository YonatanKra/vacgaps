import React, { createContext, FunctionComponent, useState, useEffect, useContext, useCallback } from 'react';
import { VaccinesReport } from '@vacgaps/interfaces';
import { useFormData } from './FormDataProvider';
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
    const [isFetchingAddressList, setIsFetchingAddressList] = useState<boolean>(false);
    const [addressList, setAddressList] = useState<Address[]>([]);
    const [newAddedAddress, setNewAddedAddress] = useState<Address[]>([]);
    const [combinedAddressList, setCombinedAddressList] = useState<Address[]>([]);
    const { city, healthCareService } = useFormData();

    useEffect(() => {
        const filteredList: Address[] = combinedAddressList.filter(_ => {
            if (!!city && _.city !== city) return false;
            if (!!healthCareService && _.healthCareService !== healthCareService) return false;
            return true;
        });

        if (!areEqual(filteredList, combinedAddressList)) setAddressList(filteredList);
    }, [combinedAddressList, city, healthCareService]);

    useEffect(() => {
        setCombinedAddressList(addressList.concat(newAddedAddress));
    }, [addressList, newAddedAddress]);

    const fetchAddressList = useCallback(async () => {
        console.log("fetching address list");
        setIsFetchingAddressList(true);
        await new Promise(res => setTimeout(res, 3000)); // TODO: replace with a real fetch from the API
        setIsFetchingAddressList(false);
        setAddressList([]);
    }, []);

    useEffect(() => {
        fetchAddressList();
    }, [fetchAddressList]);

    const addNewAddress = useCallback((addressName: string) => {
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
            addNewAddress,
        }}>
            {props.children}
        </AddressListContext.Provider>
    );
}
