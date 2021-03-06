import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => { //inside of braces {video} is equivalent to props and then assigning const video = props.video
	const imageUrl = video.snippet.thumbnails.default.url;

	return (
		<li className="list-group-item" onClick={()=>onVideoSelect(video)}>
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageUrl} alt="media"/>
				</div>

				<div className="media-body">
					<div className="media-heading" >{video.snippet.title}</div>
				</div>
			</div>
		</li>
	);
}

export default VideoListItem;
