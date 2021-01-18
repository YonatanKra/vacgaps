import React, { FunctionComponent, useCallback, useMemo } from 'react';
import { FormItem } from '../../form-item';
import { Dropdown, DropdownItemProps } from 'semantic-ui-react'
import { useAddressList } from '../../../../providers/AddressListProvider';
import { useFormData } from '../../../../providers/FormDataProvider';

type Props = {
    className?: string;
};

const Comp: FunctionComponent<Props> = props => {
    const { isFetchingAddressList, addressList, addNewAddress } = useAddressList();
    const { setAddress, address } = useFormData();

    const addressListDropdownOptions: DropdownItemProps[] = useMemo(() => {
        return addressList.map(_ => {
            const option: DropdownItemProps = {
                value: _.address,
                text: _.address,
            };

            return option;
        });
    }, [addressList]);

    return (
        <FormItem className={props.className}>
            <h3>כתובת</h3>
            <Dropdown
                value={address}
                onChange={(_, data) => {
                    setAddress(data.value as string);
                }}
                placeholder='בחר כתובת'
                allowAdditions={true}
                onAddItem={(_, data) => {
                    addNewAddress(data.value as string);
                }}
                additionLabel="הוסף כתובת "
                fluid
                loading={isFetchingAddressList}
                search
                selection
                clearable
                options={addressListDropdownOptions}
            />
        </FormItem>
    );
};

export default Comp;