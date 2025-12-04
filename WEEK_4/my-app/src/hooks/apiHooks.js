import {useState, useEffect} from 'react';
import fetchData from '../utils/fetchData';

const MEDIA_API = import.meta.env.VITE_MEDIA_API + '/media';
const AUTH_API = import.meta.env.VITE_AUTH_API + '/users/';
const UPLOAD_SERVER = import.meta.env.VITE_UPLOAD_SERVER;

const useMedia = () => {
	const [mediaArray, setMediaArray] = useState([]);

	useEffect(() => {
		try {
			const getMedia = async () => {
				const mediaData = await fetchData(MEDIA_API);
				console.log(mediaData);

				const newArray = await Promise.all(
					mediaData.map(async (item) => {
						const user = await fetchData(AUTH_API + item.user_id);
						return { ...item, username: user.username };
					}),
				);
				console.log(newArray);
				setMediaArray(newArray);
			};
			getMedia();
		} catch (error) {
			console.log('ERROR', error);
		}
	}, []);

	const postMedia = async (fileData, inputs, token) => {
		const mediaPayload = {
			title: inputs.title,
			description: inputs.description,
			filename: fileData.filename,
			media_type: fileData.media_type,
            filesize: fileData.filesize,
		};
		const fetchOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(mediaPayload),
		};
		const result = await fetchData(MEDIA_API, fetchOptions);
		return result;
	};

	const deleteMedia = async (mediaId, token) => {
		const fetchOptions = {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		};
		const result = await fetchData(MEDIA_API + '/' + mediaId, fetchOptions);
		return result;
	};

	const modifyMedia = async (mediaId, inputs, token) => {
		const mediaPayload = {
			title: inputs.title,
			description: inputs.description,
		};
		const fetchOptions = {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(mediaPayload),
		};
		const result = await fetchData(MEDIA_API + '/' + mediaId, fetchOptions);
		return result;
	};

	return {mediaArray, postMedia, deleteMedia, modifyMedia};
};

const useAuthentication = () => {
	 const postLogin = async (inputs) => {
		 const fetchOptions = {
			 method: 'POST',
			 headers: {
				 'Content-Type': 'application/json',
			 },
			 body: JSON.stringify(inputs),
		 };
		 const loginResult = await fetchData(import.meta.env.VITE_AUTH_API + '/auth/login', fetchOptions);
		 console.log('postLogin result', loginResult);
		 return loginResult;
	 };
    return {postLogin};
};

const useUser = () => {
	const getUserByToken = async (token) => {
		if (!token) throw new Error('No token provided');
		const fetchOptions = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		};
		const user = await fetchData(AUTH_API + 'token', fetchOptions);
		return user;
	};

	const postUser = async (inputs) => {
		const fetchOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(inputs),
		};
		const result = await fetchData(import.meta.env.VITE_AUTH_API + '/users', fetchOptions);
		return result;
	};

	return {getUserByToken, postUser};
};

const useFile = () => {
	const postFile = async (file, token) => {
		const formData = new FormData();
		formData.append('file', file);

		const fetchOptions = {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: formData,
		};

		const result = await fetchData(UPLOAD_SERVER + '/upload', fetchOptions);
		return result;
	};

	return {postFile};
};

const useLike = () => {
	const LIKES_API = import.meta.env.VITE_MEDIA_API + '/likes';

	const getLikeCountByMediaId = async (mediaId) => {
		const fetchOptions = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		};
		const result = await fetchData(LIKES_API + '/count/' + mediaId, fetchOptions);
		return result;
	};

	const getLikeByUser = async (mediaId, token) => {
		if (!token) throw new Error('No token provided');
		const fetchOptions = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		};
		const result = await fetchData(LIKES_API + '/bymedia/user/' + mediaId, fetchOptions);
		return result;
	};

	const postLike = async (mediaId, token) => {
		if (!token) throw new Error('No token provided');
		const payload = {
			media_id: mediaId,
		};
		const fetchOptions = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
			body: JSON.stringify(payload),
		};
		const result = await fetchData(LIKES_API, fetchOptions);
		return result;
	};

	const deleteLike = async (likeId, token) => {
		if (!token) throw new Error('No token provided');
		const fetchOptions = {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${token}`,
			},
		};
		const result = await fetchData(LIKES_API + '/' + likeId, fetchOptions);
		return result;
	};

	return {getLikeCountByMediaId, getLikeByUser, postLike, deleteLike};
};

export {useMedia, useAuthentication, useUser, useFile, useLike};