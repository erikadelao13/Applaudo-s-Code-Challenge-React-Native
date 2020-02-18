import React from 'react';
import { Container, Tab, Tabs } from 'native-base';
import styles from './styles';
import { View, Text } from 'react-native';
function tabBar(props) {
    return (
        <Container style={styles.backgroundContainer}>
            <Tabs
                initialPage={0}
                style={{ borderWidth: 0 }}
                tabBarUnderlineStyle={styles.borderBottomTabColor}
                locked
            >
                <Tab
                    textStyle={styles.textStyleTab}
                    activeTextStyle={styles.activeTextStyleTab}
                    activeTabStyle={styles.activeTabColorBackground}
                    tabStyle={styles.TabColorBackground}
                    heading={'Anime'}
                >
                    <Container style={styles.containerTab}>
                        {props.contentTab1}
                    </Container>
                </Tab>
                <Tab
                    textStyle={styles.textStyleTab}
                    activeTextStyle={styles.activeTextStyleTab}
                    activeTabStyle={styles.activeTabColorBackground}
                    tabStyle={styles.TabColorBackground}
                    heading={'Manga'}>
                    <Container style={styles.containerTab}>
                        {props.contentTab2}
                    </Container>
                </Tab>
            </Tabs>
        </Container>
    );
}
export default tabBar;
