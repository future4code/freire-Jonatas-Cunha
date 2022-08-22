function SharePost(title, body, id){
	if (navigator.share !== undefined) {
		navigator.share({
			title: title,
			text: body,
			url: id,
		})
		.then(() => console.log('Successful share'))
		.catch((error) => console.log('Error sharing', error));
	}
}

export default SharePost;