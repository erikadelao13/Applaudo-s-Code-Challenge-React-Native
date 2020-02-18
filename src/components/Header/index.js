import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { Icon } from 'native-base';
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
                                <Icon style={styles.serachIcon} type="FontAwesome" name="search" />
                            </View>
                            <TextInput
                                editable={props.edit}
                                style={styles.searchTextInput}
                                placeholder={props.browseTitle}
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
            {props.normalHeader && (
                <SafeAreaView style={styles.containerNormalHeader}>
                    <View style={styles.fullHeaderContainer}>
                        <TouchableOpacity onPress={props.onPress}>
                            <View style={styles.iconContainer}>
                                <Icon style={styles.arrowIcon} type={'FontAwesome5'} name={'arrow-left'} />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.textContainer}>
                            {/* <Image source={SearchIcon} style={styles.imgSearch} /> */}
                            < Text style={styles.title}>{props.title}</Text>
                        </View>
                    </View>
                </SafeAreaView>
            )}
        </React.Fragment>
    );
}
export default header