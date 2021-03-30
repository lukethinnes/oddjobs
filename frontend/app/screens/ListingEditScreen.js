import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import * as Yup from 'yup';

import {
    AppForm,
    AppFormField,
    SubmitButton,
} from '../components/forms';
import AppFormPicker from '../components/forms/FormPicker'
import CategoryPickerItem from '../components/CategoryPickerItem';
import FormImagePicker from '../components/FormImagePicker';
import listingsApi from '../api/listings'
import Screen from '../components/Screen'
import useLocation from '../hooks/useLocation';
import UploadScreen from './UploadScreen';

const validationSchema = Yup.object().shape({
    title: Yup.string().required().min(1).label('Title'),
    zip: Yup.number().required().min(5).label('Zip'),
    description: Yup.string().required().label('Description'),
    category: Yup.object().required().nullable().label('Category'),
    images: Yup.array().min(1, 'Please select at least one image')
})

const categories = [
    { label: 'Decor', value: 1, backgroundColor: 'maroon', icon: 'sofa' },
    { label: 'Labor', value: 2, backgroundColor: 'orange', icon: 'hammer' },
    { label: 'Moving', value: 3, backgroundColor: 'purple', icon: 'forklift' },
    { label: 'Digital', value: 4, backgroundColor: 'navy', icon: 'tablet-cellphone' },
    { label: 'Support', value: 5, backgroundColor: 'green', icon: 'account-multiple' },
    { label: 'Misc.', value: 6, backgroundColor: 'black', icon: 'alien-outline' }
];

function ListingEditScreen() {
    const location = useLocation();
    const [uploadVisible, setUploadVisible] = useState(false)
    const [progress, setProgress] = useState(0)

    const handleSubmit = async (listing, {resetForm}) => {
        setProgress(0)
        setUploadVisible(true)
        const result = await listingsApi.addListing(
            { ...listing, location },
            (progress) => setProgress(progress)
            )

        if(!result.ok) {
            setUploadVisible(false)
            return alert('Could not save this listing.')
        }

        resetForm()
    }

    return (
    <>
    <Screen style={styles.container}>
        <UploadScreen 
        onDone={() => setUploadVisible(false)}
        progress={progress} 
        visible={uploadVisible} />
        <AppForm
            initialValues={{
                title: '',
                zip: '',
                description: '',
                category: null,
                images: []
            }}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
        >
        <FormImagePicker name='images' />
        <AppFormField 
            maxLength={255} 
            name='title' 
            placeholder='Title' 
        />
        <AppFormField 
            maxLength={255}
            multiline
            name='description'
            placeholder='Description' 
            />
            <AppFormPicker 
            items={categories} 
            name='category' 
            numberOfColumns={3}
            PickerItemComponent={CategoryPickerItem}
            placeholder='Category'
            width='50%'/>
        <AppFormField 
            keyboardType='numeric'
            maxLength={10}
            name='zip'
            placeholder='Zip'
            width={120}
        />
        <SubmitButton title='List' />
        </AppForm>
    </Screen>
    </>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    }
});

export default ListingEditScreen;