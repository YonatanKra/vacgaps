import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import { FormItem } from '../../form-item';
import { useAddressList, Address } from '../../../../providers/AddressListProvider';
import { useFormData } from '../../../../providers/FormDataProvider';
import styled from 'styled-components';
import { Autocomplete, TextField } from '@material-ui/core';

const DropdownWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    > label {
        font-size: 12px;
    }
`;

const Comp: FunctionComponent<{ className?: string; }> = props => {
    const { isFetchingAddressList, addressList } = useAddressList();
    const [filteredAddressList, setFilteredAddressList] = useState<Address[]>([]);
    const [newAddedAddress, setNewAddedAddress] = useState<Address>(undefined);
    const { setAddress, address, city, healthCareService } = useFormData();

    useEffect(() => {
        const filteredList: Address[] = addressList.filter(_ => {
            if (!!city && _.city !== city) return false;
            if (!!healthCareService && _.healthCareService !== healthCareService) return false;
            return true;
        });

        setFilteredAddressList(filteredList);
    }, [city, healthCareService, addressList]);

    const isEnabled: boolean = useMemo(() => {
        return !!city && !!healthCareService;
    }, [city, healthCareService]);

    const addressListDropdownOptions: { value: string, text: string }[] =
        useMemo(() => {
            const options = filteredAddressList.map(_ => ({
                value: _.address,
                text: _.address,
            }));

            if (newAddedAddress) options.push({
                value: newAddedAddress.address,
                text: newAddedAddress.address,
            });

            return options;
        }, [filteredAddressList, newAddedAddress]);

    useEffect(() => {
        if (!isEnabled) {
            setNewAddedAddress(undefined);
            setAddress(undefined);
        }
    }, [isEnabled, setAddress]);

    return (
        <FormItem className={props.className}>
            <h3>כתובת</h3>
            <DropdownWrapper>
                <Autocomplete
                    value={address}
                    disabled={!isEnabled}
                    loading={isFetchingAddressList}
                    options={addressListDropdownOptions}
                    getOptionLabel={(option) => option.text}
                    renderInput={(params) => <TextField {...params} />}
                    onChange={(_, value) => setAddress(value as string)}
                    freeSolo
                />
                {!isEnabled && <label>בחר תחילה קופת חולים ועיר</label>}
            </DropdownWrapper>
        </FormItem>
    );
};

export default Comp;