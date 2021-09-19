import React, { useEffect } from "react";
import { View, Text, FlatList } from 'react-native'
import styles from './styles'
import { connect } from 'react-redux'
import { postsActions } from "../../store/actions/postsActions";
import Post from '../../components/Post'
import FloatingButton from "../../components/FloatingButton";
import LoadingScreen from "../../components/LoadingScreen";
import ErrorScreen from "../../components/ErrorScreen";

const Home = ({list, posts, loading, error, loadPosts, navigation}) => {
	useEffect(() => {
		loadPosts()
	}, [])
	return (
		<LoadingScreen loading={loading}>
		{/* <View style={styles.Outer}> */}
			{error?
				<ErrorScreen
					tryAgain={() => loadPosts()}
					errorMessage="Something went wrong."
				/>
			:
				<FlatList
					data={list}
					extraData={posts}
					keyExtractor={(item) => item}
					renderItem={({item}) => <Post id={item} />}
					ListFooterComponent={<View style={{height: 100}} />}
				/>
			}
			<FloatingButton onPress={() => navigation.navigate('CreatePost')} />
		{/* </View> */}
		</LoadingScreen>
	)
}

const mapStateToProps = ({posts}) => (posts)
export default connect(mapStateToProps, postsActions)(Home)