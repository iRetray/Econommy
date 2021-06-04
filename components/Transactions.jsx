import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button, Icon, List, ListItem, TabBar } from '@ui-kitten/components';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createMaterialTopTabNavigator();

import IncomesTab from './IncomesTab';
import ExpensesTab from './ExpensesTab';

const Transactions = () => {
  const [selectedTab, setSelectedTab] = React.useState('INCOMES');

  const data = new Array(20).fill({
    title: 'Title for Item',
    description: 'Description for Item',
  });

  const renderItemAccessory = (props) => <Button size="tiny">FOLLOW</Button>;

  const renderItemIcon = (props) => <Icon {...props} name="person" />;

  const renderItem = ({ item, index }) => (
    <ListItem
      title={`${item.title} ${index + 1}`}
      description={`${item.description} ${index + 1}`}
      accessoryLeft={renderItemIcon}
      accessoryRight={renderItemAccessory}
    />
  );

  return (
    <SafeAreaView>
      <View style={styles.tabBar}>
        <View style={styles.tab}>
          <Icon style={styles.iconsTab} fill="#389e0d" name="flash" />
          <Text style={styles.textIncomes}>Ingresos</Text>
        </View>
        <View style={styles.tab}>
          <Icon style={styles.iconsTab} fill="#595959" name="briefcase" />
          <Text style={styles.work}>Todo</Text>
        </View>
        <View style={{ ...styles.tab }}>
          <Icon style={styles.iconsTab} fill="#595959" name="briefcase" />
          <Text style={styles.work}>Gastos</Text>
        </View>
      </View>

      <Text>El tab seleccionado es: {selectedTab}</Text>
      <ScrollView>
        <List data={data} renderItem={renderItem} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    marginTop: '10%',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
  tab: {
    alignItems: 'center',
    alignContent: 'center',
    width: '33%',
  },
  iconsTab: {
    width: 30,
    height: 30,
  },
  textIncomes: {
    color: '#389e0d',
    fontWeight: 'bold',
  },
});

export default Transactions;
