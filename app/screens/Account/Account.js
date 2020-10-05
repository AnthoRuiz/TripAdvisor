import React, { useState } from "react";
import { View, Text } from "react-native";
import * as firebase from "firebase";
import UserGuest from "./UserGuest";
import UserLogged from "./UserLogged";

export default function Account() {

    const [login, setLogin] = useState(null);


    return (
        <View>
            <Text> Account </Text>
        </View>
    );
}