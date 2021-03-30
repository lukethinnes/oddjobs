import React from 'react';
import { View } from 'react-native';

import colors from '../../config/colors';

export default function ListItemSeparator() {
    return (
        <View style={{
            marginTop: 10,
            width: '100%',
            height: 2,
            backgroundColor: colors.light
        }} />
    )
}



