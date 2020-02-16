import React, { Component } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { Thumbnail, Label, Icon } from 'native-base';
import styles from './styles'
const header = (props) => {
    return (
        <React.Fragment>
            {props.headerWithSearch && (
                <SafeAreaView style={styles.container}>
                    <View style={styles.fullHeaderContainer}>
                        {/* <Image source={SearchIcon} style={styles.imgSearch} /> */}
                        <View style={styles.searchContainer}>
                            <View style={styles.searchContainerIcon}>
                                <Icon style={styles.serachIcon} type="FontAwesome"  name="search" />
                            </View>
                            <TextInput
                                editable={props.edit}
                                style={styles.searchTextInput}
                                placeholder={props.browseTitle}
                                // placeholderTextColor={colors.white}
                                onChangeText={value =>
                                    props.onChangeValue(props.stateInput, value)
                                }
                                value={props.textValue}
                                keyboardType={props.keyboard}
                            />
                        </View>
                    </View>
                </SafeAreaView>
            )}
        </React.Fragment>
    );
}
export default header