import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, Share } from 'react-native'
import { connect } from 'react-redux'
import { showNumber } from '../../misc/numbers'
import { showPostDate } from '../../misc/dates'
import { postsActions } from '../../store/actions/postsActions'
import styles from './styles'
import { PRIMARY_COLOR } from '../../misc/constants'

const Post = ({id, posts, likePost, repostPost}) => {
	const [readMore, setReadMore] = useState(false)

	const details = posts[id].originalId ? {
		...posts[posts[id].originalId],
		repostedContent: true,
		id: posts[id].originalId,
	} : {...posts[id], id}

	const share = () => {
		Share.share({
			message: details.username+" posted:\n"+details.text,
		})
	}
	return (
		<View style={styles.Outer}>
			<View style={styles.Container}>
				<View style={styles.Header}>
					{details.repostedContent && (
						<View style={styles.RepostWrapper}>
							<Image style={styles.RepostIcon} source={require('../../assets/repost.png')} />
							<Text style={styles.Repost}>You reposted</Text>
						</View>
					)}
					<View style={styles.HeaderRow}>
						<Image
							style={styles.Dp}
							source={details.userdp?{uri: details.userdp}:require('../../assets/profile.png')}
						/>
						<View style={styles.HeaderDetails}>
							<Text style={styles.HeaderTitle} numberOfLines={1}>{details.username}</Text>
							<Text style={styles.HeaderDate}>{showPostDate(details.createdAt)}</Text>
						</View>
					</View>
				</View>
				<View style={styles.Content}>
					<View style={styles.ContentTextWrapper}>
						<Text style={styles.ContentText}>
							{readMore?details.text:details.text.substring(0,300)}
							{!readMore && details.text.length>300? '...' :	null}
						</Text>
						{details.text.length>300?(
							!readMore?(
								<TouchableOpacity onPress={() => setReadMore(i => !i)} style={styles.ReadMoreOuter}>
									<Text style={styles.ReadMore}>(Show More)</Text>
								</TouchableOpacity>
							):(
								<TouchableOpacity onPress={() => setReadMore(i => !i)}>
									<Text style={styles.ReadMore}>(Show Less)</Text>
								</TouchableOpacity>
							)
						):null}
					</View>
				</View>
				<View style={styles.Footer}>
					<TouchableOpacity onPress={() => likePost(details.id)} style={styles.FooterButton}>
						<Image
							source={details.liked?require('../../assets/heartFill.png'):require('../../assets/heartOutline.png')}
							style={[styles.FooterButtonIcon, {tintColor: details.liked?PRIMARY_COLOR:'#aaa'}]}
						/>
						<Text style={[styles.FooterButtonLabel, {color: details.liked?PRIMARY_COLOR:'#777'}]}>{showNumber(details.likeCount)}</Text>
					</TouchableOpacity>
					{/* <View style={styles.FooterButtonSeparator} /> */}
					<TouchableOpacity onPress={() => repostPost(details.id)} style={styles.FooterButton}>
						<Image
							style={[styles.FooterButtonIcon, {tintColor: details.reposted?PRIMARY_COLOR:'#aaa'}]}
							source={require('../../assets/repost.png')}
						/>
						<Text style={[styles.FooterButtonLabel, {color: details.reposted?PRIMARY_COLOR:'#777'}]}>{showNumber(details.repostCount)}</Text>
					</TouchableOpacity>
					{/* <View style={styles.FooterButtonSeparator} /> */}
					<TouchableOpacity onPress={() => share()} style={styles.FooterButton}>
						<Image
							style={styles.FooterButtonIcon}
							source={require('../../assets/share.png')}
						/>
					</TouchableOpacity>
				</View>
			</View>
		</View>
	)
}

const mapStateToProps = ({posts}) => (posts)
export default connect(mapStateToProps, postsActions)(Post)