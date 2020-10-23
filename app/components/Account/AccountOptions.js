import React from "react";
import { View, StyleSheet } from "react-native";
import { ListItem } from "react-native-elements";
import { map } from "lodash";

export default function AccountOptions(props) {
  const selectedComponent = (key) => {
    console.log(key);
  }
  
  const {userInfo, toastRef} = props;
  const menuOpstions = generateOpstions(selectedComponent);


  return (

    <View>
      {map(menuOpstions, (menu, index) => (
        <ListItem 
          key =  {index}
          title = {menu.title}
          leftIcon = {{
            type: menu.iconType,
            name: menu.iconNameLeft,
            color: menu.iconColorLeft
          }}
          rightIcon = {{
            type: menu.iconType,
            name: menu.iconNameRight,
            color: menu.iconColorRight
          }}
          containerStyle={styles.menuItem}
          onPress={menu.onPress}
        />
      ))}
    </View>

  );
};

function generateOpstions(selectedComponent) {
  return [
    {
      title: "Cambiar Nombre y Apellido.",
      iconType: "material-community",
      iconNameLeft: "account-circle",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => selectedComponent("displayName"),
    },
    {
      title: "Cambiar Email.",
      iconType: "material-community",
      iconNameLeft: "at",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => selectedComponent("email"),
    },
    {
      title: "Cambiar Contrasena.",
      iconType: "material-community",
      iconNameLeft: "lock-reset",
      iconColorLeft: "#ccc",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
      onPress: () => selectedComponent("password"),
    },
  ]
}

const styles = StyleSheet.create({
  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: "#e3e3e3",
  }
});