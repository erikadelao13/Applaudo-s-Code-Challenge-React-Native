import React from 'react';
import { Container, Tab, Tabs, ScrollableTab } from 'native-base';
import styles from './styles';
import { View, Text } from 'react-native';
function tabBarScrollable(props) {
    return (
        <Container style={styles.backgroundContainer}>
            <Tabs
                initialPage={0}
                style={{ borderWidth: 0}}
                tabBarUnderlineStyle={styles.borderBottomTabColor}
                renderTabBar={() => (
                    <ScrollableTab style={{ borderWidth: 0 }} tabsContainerStyle={styles.colorScroll} />
                )}
            >
                <Tab
                    textStyle={styles.textStyleTab}
                    activeTextStyle={styles.activeTextStyleTab}
                    activeTabStyle={styles.activeTabColorBackground}
                    tabStyle={styles.TabColorBackground}
                    heading={'Synopsis'}
                >
                    {props.contentTab1}
                </Tab>
                <Tab
                    textStyle={styles.textStyleTab}
                    activeTextStyle={styles.activeTextStyleTab}
                    activeTabStyle={styles.activeTabColorBackground}
                    tabStyle={styles.TabColorBackground}
                    heading={'Technical Details'}>
                    {props.contentTab2}
                </Tab>
            </Tabs>
        </Container>
    );
}
export default tabBarScrollable;
