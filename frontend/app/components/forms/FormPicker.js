import React from 'react';
import { useFormikContext } from 'formik';
import { StyleSheet } from 'react-native';
import AppPicker from '../Picker';
import ErrorMessage from './ErrorMessage';

function AppFormPicker({ items, name, numberOfColumns, PickerItemComponent, placeholder, width }) {

    const { errors, setFieldValue, touched, values } = useFormikContext();

    return (
    <>
        <AppPicker
            items={items}
            numberOfColumns={numberOfColumns}
            onSelectItem={(item) => setFieldValue(name, item)}
            PickerItemComponent={PickerItemComponent}
            placeholder={placeholder}
            selectedItem={values[name]}
            style={styles.picker}
            width={width}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
    );
}

const styles = StyleSheet.create({
    picker: {
        fontSize: 8
    }
})
export default AppFormPicker;