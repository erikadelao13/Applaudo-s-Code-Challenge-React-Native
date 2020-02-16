import React from 'react';
import SkeletonContent from "react-native-skeleton-content-nonexpo";
import styles from './styles';
import { View } from 'react-native';
import { Container } from 'native-base';
const layouts = [styles.bone1, styles.bone1, styles.bone1, styles.bone1, styles.bone1, styles.bone1]
const SkeletonLoading = (props) => {
    return (
        <SkeletonContent
            containerStyle={{ flex: 1 }}
            animationDirection="horizontalLeft"
            isLoading={props.isLoading}
            layout={layouts}
        >
            {props.content}
        </SkeletonContent>
    )
};

export default SkeletonLoading;