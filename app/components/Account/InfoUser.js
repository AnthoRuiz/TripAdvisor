import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";
import * as firebase from "firebase";
import * as Permissions from "expo-permissions";
import * as ImagePicker from "expo-image-picker";

export default function InfoUser(props) {
  const { 
    userInfo: { uid, photoURL, displayName, email },
    toastRef
  } = props;

  const changeAvatar = async () => {
  const resultPermission = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  const resultPermissionCamera = resultPermission.permissions.cameraRoll.status;

    if (resultPermissionCamera === "denied") {
      toastRef.current.show("Es necesario aceptar los permisos de la galeria.");
    }else{
      const result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 3]
      });

      if(result.cancelled) {
        toastRef.current.show("has Cerrado la seleccion de imagenes");
      }else{
        upLoadImage(result.uri).then(() => {
          console.log("imagen subida");
        }).catch(() => {
          toastRef.current.show("Error actualizando el avatar.");
        })
      }
    }
  };

  const upLoadImage = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    const ref = firebase.storage().ref().child(`avatar/${uid}`);
    return ref.put(blob);
  };

  return (
    <View style={styles.viewUserInfo}>
      <Avatar 
        rounded
        size="large"
        showEditButton
        onEditPress={changeAvatar}
        containerStyle={styles.userInfoAvatar}
        source={
          photoURL ? {uri:photoURL} : require("../../../assets/img/avatar-default.jpg")
        }
      />
      <View>
        <Text style={styles.displayName}>
          {displayName ? displayName : "Anonimo"}
        </Text>
        <Text>
          {email ? email.charAt(0).toUpperCase() + email.slice(1) : "Social Login"}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  viewUserInfo: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    paddingTop: 30,
    paddingBottom: 30,
  },
  userInfoAvatar: {
    marginRight: 20,
  },
  displayName: {
    fontWeight: "bold",
    paddingBottom: 5,
  }
});