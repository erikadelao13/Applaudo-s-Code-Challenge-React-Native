import React from 'react';
import { Container, Tab, Tabs, ScrollableTab } from 'native-base';
import styles from './styles';
import { View, Text } from 'react-native';
function tabBar(props) {
    return (
        <Container style={styles.backgroundContainer}>
            <Tabs
                initialPage={0}
                style={{ borderWidth: 0}}
                // onChangeTab={info => props.onChangeTab(info)}
                tabBarUnderlineStyle={styles.borderBottomTabColor}
                // renderTabBar={() => (
                //     <ScrollableTab style={{ borderWidth: 0}} tabsContainerStyle={styles.colorScroll} />
                // )}
                locked
                >
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
export default tabBar;
