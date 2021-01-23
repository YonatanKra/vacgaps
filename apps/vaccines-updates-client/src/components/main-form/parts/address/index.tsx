import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import { FormItem } from '../../form-item';
import { Dropdown, DropdownItemProps } from 'semantic-ui-react'
import { useAddressList, Address } from '../../../../providers/AddressListProvider';
import { useFormData } from '../../../../providers/FormDataProvider';
import styled from 'styled-components';

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

    const addressListDropdownOptions: DropdownItemProps[] = useMemo(() => {
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
                <Dropdown
                    disabled={!isEnabled}
                    value={address}
                    onChange={(_, data) => {
                        setAddress(data.value as string);
                    }}
                    placeholder={'בחר כתובת'}
                    allowAdditions={true}
                    onAddItem={(_, data) => {
                        setNewAddedAddress({
                            address: data.value as unknown as string,
                            city,
                            healthCareService,
                        });
                    }}
                    additionLabel="הוסף כתובת "
                    fluid
                    loading={isFetchingAddressList}
                    search
                    selection
                    clearable
                    options={addressListDropdownOptions}
                />
                {!isEnabled && <label>בחר תחילה קופת חולים ועיר</label>}
            </DropdownWrapper>
        </FormItem>
    );
};

export default Comp;