import { DrawerNavigationProp } from "@react-navigation/drawer";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Text,
} from "react-native";
import { RootStackParamList } from "../../../Screens";

const DATA = [
  {
    id: "1",
    title: "Job 1",
  },
  {
    id: "2",
    title: "Job 2",
  },
  {
    id: "3",
    title: "Job 3",
  },
];

type NavigationProp = DrawerNavigationProp<RootStackParamList, "UserMain">
type Props = {
  navigation: NavigationProp
}
export default function Main({ navigation } : Props) {
  type StringOrNull = string | null
  type JobType = {
    id: string,
    title: string
  }
  const [jobs, setJobs] = useState<JobType[]>([]);
  const [selectedJob, setSelectedJob] = useState<StringOrNull>(null);
  useEffect(() => {
    setJobs(DATA);
  }, []);
  const Item = ({ title }: {title: string}) => (
    <TouchableOpacity
      style={styles.item}
      onPress={() => {
        setSelectedJob(title);
      }}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );

  const renderItem = ({ item } : {item :JobType}) => <Item title={item.title} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={jobs}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      {selectedJob && (
        <TouchableOpacity onPress={() => navigation.navigate("Map")}>
          <Text>Trouvez des {selectedJob} prets de vous</Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
