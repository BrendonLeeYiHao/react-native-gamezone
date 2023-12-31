import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View, Modal, TouchableWithoutFeedback, Keyboard } from "react-native";
import { globalStyles } from "../styles/global";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Card from "../shared/card";
import {MaterialIcons} from '@expo/vector-icons';
import ReviewForm from "./reviewForm";

export default function Home(){

    const navigation = useNavigation();

    const [modalOpen, setModalOpen] = useState(false);

    const [reviews, setReviews] = useState([
        {title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'hello', key: '1'},
        {title: 'Harry Potter', rating: 4, body: 'hi', key: '2'},
        {title: 'Final Fantasy', rating: 3, body: 'ello', key: '3'}
    ]);

    const pressHandler = () => {
        navigation.navigate("ReviewDetails");
    }

    const addReview = (review) => {
        review.key = Math.random().toString();
        setReviews((currentReviews) => {
            return [review, ...currentReviews];
        });
        setModalOpen(false);
    }

    return(
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType="slide">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalContent}>
                        <MaterialIcons name='close' size={24} style={{...styles.modalToggle, ...styles.modalClose}} onPress={() => setModalOpen(false)}/>
                        <ReviewForm addReview={addReview}/>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
            <MaterialIcons name='add' size={24} style={styles.modalToggle} onPress={() => setModalOpen(true)}/>

            <FlatList data={reviews} renderItem={({item}) => (
                <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                    <Card>
                        <Text style={globalStyles.titleText}>{item.title}</Text>
                    </Card>
                </TouchableOpacity>
            )} />
            {/* <Button title="go to review det" onPress={pressHandler}/> */}
        </View>
    )
}

const styles = StyleSheet.create({
    modalToggle: {
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
        alignSelf: 'center'
    },

    modalClose: {
        marginTop: 20,
        marginBottom: 0
    },

    modalContent: {
        flex: 1
    }
})