import { Button, Image, StyleSheet, Text, View } from "react-native";
import { globalStyles, images } from "../styles/global";
import { useNavigation } from "@react-navigation/native";
import Card from "../shared/card";

export default function ReviewDetails({route}){
    
    const {title, rating, body} = route.params;

    const navigation = useNavigation();

    const pressHandler = () => {
        navigation.goBack();
    }

    return(
        <View style={globalStyles.container}>
            <Card>
                <Text>{title}</Text>
                <Text>{rating}</Text>
                <Text>{body}</Text>
                <View style={styles.rating}>
                    <Text>GameZone rating:</Text>
                    <Image source={images.ratings[rating]}/>
                </View>
            </Card>
            <Button title="Back to Home Screen" onPress={pressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        justifyContent: "center",
        paddingTop: 16,
        marginTop: 16,
        borderTopWidth: 1,
        borderTopColor: '#eee'
    }
})