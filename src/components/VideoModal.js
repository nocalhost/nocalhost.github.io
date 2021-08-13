import React from 'react'
// import {  createPortal } from 'react-dom'
import styles from '../pages/index.module.css'
// const body = document.getElementsByTagName('body')

function VideoModal (props) {
	const Div = (<div className={styles.modal} onClick={() => props.setShowVideoModa(false)}>
		<div className={styles.modalMask}>
			<div className={styles.contentVideoContainer}>
				<video controls autoPlay width="100%" poster="img/poster-en.jpg" style={{ objectFit: 'cover', borderRadius: '10px' }} >
					<source src="https://nocalhost-1301578102.cos.ap-nanjing.myqcloud.com/nh-overview-eng-20210714.mp4" type="video/mp4" />
					<track src="video/nh-overview-eng.vtt" kind="subtitles" label="en text track" srcLang="en" default />
					<track src="video/nh-overview.chn.vtt" kind="subtitles" label="中文字幕" srcLang="zh" />
					<p>Your browser doesn&apos;t support HTML5 video. Here is a <a href="https://nocalhost-1301578102.cos.ap-nanjing.myqcloud.com/nh-overview-eng-20210714.mp4">link to the video</a> instead.</p>
				</video>
			</div>
		</div>
	</div>)
	return Div
}

export default VideoModal