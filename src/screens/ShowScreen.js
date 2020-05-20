import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { EvilIcons } from '@expo/vector-icons';
const ShowScreen = ({ route, navigation }) => {
    const { state } = useContext(Context);
    const { id } = route.params;

    const blogPost = state.find((blogPost) => blogPost.id == id);
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Edit', { id })}>
                    <EvilIcons name="pencil" size={30} style={{ marginRight: 10 }} />
                </TouchableOpacity>
            ),
        });

    }, [navigation]);
    return (
        <View>
            <Text> {blogPost.title}</Text>
            <Text> {blogPost.content}</Text>
        </View>
    );
};
const styles = StyleSheet.create({});
export default ShowScreen;