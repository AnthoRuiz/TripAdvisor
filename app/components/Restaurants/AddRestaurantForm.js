import React, { useState } from "react";
import { View, ScrollView, StyleSheet, Alert, Dimensions } from "react-native";
import { Icon, Avatar, Image, Input, Button } from "react-native-elements";

export default function AddRestaurantForm(props) {

  const {toastRef, setIsLoading, navigation} = props;
  const [restaurantName, setRestaurantName] = useState("");
  const [restaurantAddress, setRestaurantAddress] = useState("");
  const [restaurantDescription, setRestaurantDescription] = useState("");
  
  const addRestaurant = () => {
    console.log("ok");
    console.log(restaurantName);
    console.log(restaurantAddress);
    console.log(restaurantDescription);
  };
  
  return (
    <ScrollView style={styles.scrollView}>
      <FormAdd 
        setRestaurantName={setRestaurantName}
        setRestaurantAddress={setRestaurantAddress}
        setRestaurantDescription={setRestaurantDescription}
      />
      <UploadImage />
        <Button 
          title="Crear Restaurante"
          onPress={addRestaurant}
          buttonStyle={styles.btnAddRestaurant}
        />
    </ScrollView>
  );
}

function FormAdd(props){
  const {setRestaurantName, setRestaurantAddress, setRestaurantDescription} = props;
  return (
    <View style={styles.viewForm}>
      <Input
        placeholder="Nombre del Restaurante" 
        containerStyle={styles.input}
        onChange={e=> setRestaurantName(e.nativeEvent.text)}
      />
      <Input
        placeholder="Direccion" 
        containerStyle={styles.input}
        onChange={e=> setRestaurantAddress(e.nativeEvent.text)}
      />
      <Input
        placeholder="Descripcion del Restaurante"
        multiline={true}
        inputContainerStyle={styles.textArea}
        onChange={e=> setRestaurantDescription(e.nativeEvent.text)}
      />
    </View>
  );
}

function UploadImage() {

  const imageSelect = () => {
    console.log("imagenes");
  };
  
  return(
    <View style={styles.viewImages}>
      <Icon 
        type="material-community"
        name="camera"
        color="#7a7a7a"
        containerStyle={styles.containerIcon}
        onPress={imageSelect}
      />

    </View>
  )
  
}

const styles = StyleSheet.create({
  scrollView: {
    height: "100%",
  },
  viewForm: {
    marginLeft: 10,
    marginRight: 10,
  },
  input: {
    marginBottom: 10,
  },
  textArea: {
    height: 100,
    width: "100%",
    padding: 0,
    margin: 0,
  },
  btnAddRestaurant: {
    backgroundColor: "#00a680",
    margin: 20,
  },
  viewImages: {
    flexDirection: "row",
    marginLeft: 20,
    marginRight: 20,
    marginTop: 30,
  },
  containerIcon: {
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
    height: 70,
    width: 70,
    backgroundColor: "#e3e3e3",
  },
  miniatureStyle: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  viewPhoto: {
    alignItems: "center",
    height: 200,
    marginBottom: 20,
  },
  mapStyle: {
    width: "100%",
    height: 550,
  },
  viewMapBtn: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  viewMapBtnContainerCancel: {
    paddingLeft: 5,
  },
  viewMapBtnCancel: {
    backgroundColor: "#a60d0d",
  },
  viewMapBtnContainerSave: {
    paddingRight: 5,
  },
  viewMapBtnSave: {
    backgroundColor: "#00a680",
  },
});