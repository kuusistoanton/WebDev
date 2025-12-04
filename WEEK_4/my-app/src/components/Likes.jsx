import { useState, useEffect, useCallback } from 'react';
import { useLike } from '../hooks/apiHooks';
import { useUserContext } from '../hooks/contextHooks';

const Likes = ({ mediaId }) => {
	const { user } = useUserContext();
	const { getLikeCountByMediaId, getLikeByUser, postLike, deleteLike } = useLike();
	const [likeCount, setLikeCount] = useState(0);
	const [userLike, setUserLike] = useState(null);
	const [isLiked, setIsLiked] = useState(false);
	const [loading, setLoading] = useState(false);

	// Fetch like count and user's like status
	useEffect(() => {
		const fetchLikes = async () => {
			if (!mediaId) {
				return;
			}

			try {
				setLoading(true);
				// Get like count
				const countResult = await getLikeCountByMediaId(mediaId);
				setLikeCount(countResult.count || countResult || 0);

				// Get user's like if logged in
				if (user && user.user_id) {
					try {
						const likeResult = await getLikeByUser(mediaId, localStorage.getItem('token'));
						if (likeResult) {
							setUserLike(likeResult);
							setIsLiked(true);
						} else {
							setIsLiked(false);
						}
					} catch (err) {
						setIsLiked(false);
					}
				} else {
					setIsLiked(false);
				}
			} catch (error) {
				console.error('Error fetching likes:', error);
				setLikeCount(0);
				setIsLiked(false);
			} finally {
				setLoading(false);
			}
		};

		fetchLikes();
	}, [mediaId, user?.user_id]);

	const handleLikeToggle = useCallback(async () => {
		if (!user || !user.user_id) {
			return;
		}

		const token = localStorage.getItem('token');

		try {
			if (isLiked && userLike) {
				// Unlike
				await deleteLike(userLike.like_id, token);
				setIsLiked(false);
				setUserLike(null);
				setLikeCount((prev) => Math.max(0, prev - 1));
			} else {
				// Like
				const result = await postLike(mediaId, token);
				setIsLiked(true);
				setUserLike(result);
				setLikeCount((prev) => prev + 1);
			}
		} catch (error) {
			console.error('Error toggling like:', error);
		}
	}, [isLiked, userLike, user?.user_id, mediaId, postLike, deleteLike]);

	return (
		<div className="flex items-center space-x-4 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
			<button
				onClick={handleLikeToggle}
				disabled={!user || !user.user_id}
				className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition ${
					isLiked
						? 'bg-red-500 text-white'
						: 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-600'
				} ${!user || !user.user_id ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
			>
				<span className="text-xl">{isLiked ? '❤️' : '🤍'}</span>
				<span className="text-sm font-medium">{isLiked ? 'Unlike' : 'Like'}</span>
			</button>
			<span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
				{likeCount} {likeCount === 1 ? 'like' : 'likes'}
			</span>
		</div>
	);
};

export default Likes;
