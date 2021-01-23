import React, { createContext, FunctionComponent, useState, useEffect, useContext, useCallback } from 'react';
import { VaccinesReport } from '@vacgaps/interfaces';

export type Address = Pick<VaccinesReport, 'address' | 'city' | 'healthCareService'>;
export type AddressListContextProps = {
    addressList: Address[];
    isFetchingAddressList: boolean;
};

const AddressListContext = createContext<AddressListContextProps>({} as unknown as any);

export const useAddressList = (): AddressListContextProps => useContext(AddressListContext);

export const AddressListProvider: FunctionComponent = props => {
    const [isFetchingAddressList, setIsFetchingAddressList] = useState<boolean>(false);
    const [addressList, setAddressList] = useState<Address[]>([]);

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

    return (
        <AddressListContext.Provider value={{
            addressList,
            isFetchingAddressList,
        }}>
            {props.children}
        </AddressListContext.Provider>
    );
}
