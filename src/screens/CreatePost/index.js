import React, {useState} from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import { connect } from 'react-redux'
import { postsActions } from '../../store/actions'
import styles from './styles'

const CreatePost = ({addPost, navigation}) => {
	const [content, setContent] = useState('');
	const submit = () => {
		Alert.alert("Create Post", "Are you sure to post this content?", [{text: 'cancel'}, {
			text: 'post', onPress: () => addPost(content).then(() => navigation.pop())
		}])
	}
	return (
		<View style={styles.Outer}>
			<Text style={styles.Label}>What do you want to say?</Text>
			<TextInput
				style={styles.Input}
				autoFocus
				multiline
				onChangeText={setContent}
				value={content}
			/>
			<TouchableOpacity onPress={submit} disabled={!content} style={[styles.Submit, content.length?{}:{backgroundColor: '#bbb'}]}>
				<Text style={styles.SubmitLabel}>Share Post</Text>
			</TouchableOpacity>
		</View>
	)
}

const mapStateToProps = () => ({})
export default connect(mapStateToProps, postsActions)(CreatePost)