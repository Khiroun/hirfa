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
import theme from "../../theme";

const DATA = [
  {
    id: "1",
    title: "Plombier",
  },
  {
    id: "2",
    title: "Maçon",
  },
  {
    id: "3",
    title: "Peintre",
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
        style={{marginTop: 50}}
      />
      {selectedJob && (
        <TouchableOpacity
          onPress={() => navigation.navigate("Map")}
          style={{
            marginBottom: 50,
            backgroundColor: theme.COLORS.PRIMARY,
            height: 50,
            justifyContent: "center",
            marginHorizontal: 20,
            borderRadius: 10
          }}

        >
          <Text style={{textAlign: "center", fontSize: 20, color:"white"}}>
            Trouvez un
            <Text style={{color: theme.COLORS.SUCCESS, fontWeight: "bold"}}> {selectedJob} </Text> 
            prets de chez vous
            </Text>
        </TouchableOpacity>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    justifyContent: "space-between"
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
