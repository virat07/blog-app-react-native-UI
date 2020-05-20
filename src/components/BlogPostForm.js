import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
const BlogPostForm = ({ initialValues, onSubmit }) => {

    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);
    return (
        <View>
            <Text style={styles.textLabel}> Enter Title</Text>
            <TextInput value={title} onChangeText={(text) => setTitle(text)} style={styles.textInput} />
            <Text style={styles.textLabel}>Enter Content </Text>
            <TextInput value={content} onChangeText={(text) => setContent(text)} style={styles.textInput} />
            <Button title='Save Blog Post' onPress={() => onSubmit(title, content)} />

        </View>
    );
};

BlogPostForm.defaultProps = {
    initialValues: {
        titlee: '',
        content: ''
    }
}
const styles = StyleSheet.create({
    textInput: {
        fontSize: 18,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    textLabel: {
        fontSize: 18,
        marginBottom: 5,
        marginLeft: 5
    }
});
export default BlogPostForm;