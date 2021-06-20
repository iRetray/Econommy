import React, { useRef, useState, useEffect } from "react";
import PropTypes from "prop-types";
import StorageService from "../../services/StorageService";
import Carousel from "react-native-snap-carousel";
import { View, Text, Dimensions, Image } from "react-native";
import { Button, Input, Avatar } from "@ui-kitten/components";
import { Feather, MaterialIcons, AntDesign, Entypo } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import logoApp from "../../assets/logoApp.png";

import styles from "../../styles/RegisterUser";

const screensData = [
  {
    name: "WELCOME",
  },
  {
    name: "REGISTER",
  },
];

const { width: screenWidth } = Dimensions.get("window");

const RegisterUser = ({ getUserData }) => {
  const carouselRef = useRef(null);
  const [screens, setScreens] = useState([]);
  const [userData, setUserData] = useState({
    name: "",
    work: "",
    photo: null,
    base64Photo: null,
  });

  useEffect(() => {
    setScreens(screensData);
    requestPermissionsCamera();
  }, []);

  const requestPermissionsCamera = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      alert("Econommy necesita el permiso de almacenamiento");
    }
  };

  const goToNextPage = () => {
    carouselRef.current.snapToNext();
  };

  const handleLaunchCamera = async () => {
    const imagePicked = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
      base64: true,
    });

    if (!imagePicked.cancelled) {
      setUserData({
        ...userData,
        photo: imagePicked.uri,
        base64Photo: imagePicked.base64,
      });
    }
  };

  const saveUserData = () => {
    StorageService.storeObjectData({ key: "user", object: userData }).then(
      (response) => {
        if (response.status === "SUCCESS") {
          getUserData();
        }
      }
    );
  };

  const renderItem = ({ item }) => {
    return item.name === "WELCOME" ? (
      <View style={styles.container}>
        <Image
          source={logoApp}
          style={{ width: 250, height: 300, marginBottom: 50 }}
        />
        <Button
          style={styles.playButton}
          size="giant"
          onPress={() => goToNextPage()}
        >
          <View style={styles.buttonContainer}>
            <AntDesign name="play" size={40} color="white" />
            <View style={styles.textContainer}>
              <Text style={styles.textPlay}>Iniciar</Text>
            </View>
          </View>
        </Button>
      </View>
    ) : (
      <View style={styles.container}>
        {userData.photo ? (
          <Avatar
            source={{ uri: userData.photo }}
            style={{ width: 200, height: 200, margin: 40 }}
          />
        ) : (
          <Button
            style={{ ...styles.button, margin: 40 }}
            appearance="ghost"
            size="giant"
            onPress={() => handleLaunchCamera()}
          >
            <View style={styles.containerPhoto}>
              <Text style={styles.textNext}>Elegir una foto de perfil</Text>
              <View style={{ marginHorizontal: 10, padding: 15 }}>
                <Entypo name="images" size={40} color="#1890ff" />
              </View>
            </View>
          </Button>
        )}
        <Input
          value={userData.name}
          label="¿Cuál es tu nombre?"
          placeholder="Hideo Kojima"
          accessoryLeft={() => <Feather name="user" size={24} color="black" />}
          onChangeText={(nextValue) =>
            setUserData({ ...userData, name: nextValue })
          }
        />
        <Input
          value={userData.work}
          label="¿Cuál es tu trabajo?"
          placeholder="Diseñador gráfico"
          accessoryLeft={() => (
            <MaterialIcons name="work-outline" size={24} color="black" />
          )}
          onChangeText={(nextValue) =>
            setUserData({ ...userData, work: nextValue })
          }
          style={{ marginTop: 20 }}
        />
        <Button
          style={styles.buttonFinish}
          size="giant"
          appearance="outline"
          disabled={
            userData.name === "" ||
            userData.work === "" ||
            userData.photo === ""
          }
          onPress={() => saveUserData()}
        >
          Registrarme
        </Button>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View>
        <Carousel
          ref={carouselRef}
          sliderWidth={screenWidth}
          sliderHeight={screenWidth}
          itemWidth={screenWidth - 60}
          data={screens}
          renderItem={renderItem}
          hasParallaxImages={true}
        />
      </View>
    </View>
  );
};

RegisterUser.propTypes = {
  getUserData: PropTypes.any,
};

export default RegisterUser;
