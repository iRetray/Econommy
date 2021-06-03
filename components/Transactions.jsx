import React from "react";
import { Text, StyleSheet, View, SafeAreaView, ScrollView } from "react-native";

import { Button, Icon, List, ListItem } from "@ui-kitten/components";

const Transactions = () => {
  const data = new Array(20).fill({
    title: "Title for Item",
    description: "Description for Item",
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
      <ScrollView>
        <List data={data} renderItem={renderItem} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Transactions;
