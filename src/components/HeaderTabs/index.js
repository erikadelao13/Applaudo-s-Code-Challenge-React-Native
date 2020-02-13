import React from 'react';
import { Container, Tab, Tabs, ScrollableTab } from 'native-base';
import styles from './styles';
import { View, Text } from 'react-native';
function tabBarScrollable(props) {
    return (
        <Container style={styles.backgroundContainer}>
            <Tabs
                initialPage={0}
                // onChangeTab={info => props.onChangeTab(info)}
                tabBarUnderlineStyle={styles.borderBottomTabColor}
                renderTabBar={() => (
                    <ScrollableTab tabsContainerStyle={styles.colorScroll} />
                )}>
                <Tab
                    textStyle={styles.textStyleTab}
                    activeTextStyle={styles.activeTextStyleTab}
                    activeTabStyle={styles.activeTabColorBackground}
                    tabStyle={styles.TabColorBackground}
                    heading={'Anime'}
                >
                    {props.contentTab1}
                </Tab>
                <Tab
                    textStyle={styles.textStyleTab}
                    activeTextStyle={styles.activeTextStyleTab}
                    activeTabStyle={styles.activeTabColorBackground}
                    tabStyle={styles.TabColorBackground}
                    heading={'Manga'}>
                    {props.contentTab2}
                </Tab>
            </Tabs>
        </Container>
    );
}
export default tabBarScrollable;
