import React, { useState, useEffect } from 'react'
import Translate from '@docusaurus/Translate'


const ProductVideoCards = [
	{
		url: 'https://www.youtube.com/embed/z7I-vopn-gQ',
		title: 'Nocalhost Overview',
		language: 'en',
		description: (
			<>
            A open-source cloud-native application development tool based on IDE, helps you to develop cloud-native applications faster and easier.
			</>
		),
	},
	{
		url: '//player.bilibili.com/player.html?aid=716660126&bvid=BV1RX4y1w7hB&cid=369570676&page=1',
		title: 'Nocalhost 概览',
		language: 'zh-cn',
		description: (
			<>
            Nocalhost 是一款基于 IDE 的云原生开发工具，能一键连接远端 K8s 环境实现实时的云原生应用开发。自动化的文件同步让任何代码修改都可以立即在远端生效，免去了提交、构建和推送镜像等操作，能大幅提速编码自测的反馈过程，让研发效率更高效。
			</>
		),
	},
]

const TutorialVideoCards = [
	{
		url: '//player.bilibili.com/player.html?aid=804411974&bvid=BV18y4y1j7Mk&cid=376861492&page=1',
		title: '秒级反馈循环的云原生开发体验',
		language: 'zh-cn',
		description: (
			<>
            本教程覆盖了在使用 Nocalhost 开发过程中需要用到的大多数功能，对于一些开发中会碰到的部分 Nocalhost 问题，也有所提及。
			</>
		),
	},
]

// eslint-disable-next-line react/prop-types
function Card({title, url, description}) {
	return (
		<div className="col col--5 margin-bottom--lg">
			<div className="video-card card">
				<iframe
					className="video-frame"
					src={url}
					frameBorder={0}
					width={'100%'}
					height={240}
					border={0}
					allowFullScreen
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				/>
				<div className="card__body">
					<h4>{title}</h4>
					<p>{description}</p>
				</div>
			</div>
		</div>
	)
}

function VideoCard() {
	const [ isZh, setIsZh ] = useState(false)
	useEffect(() => {
		setIsZh(location.pathname.indexOf('zh-') !== -1)
	})
	return (
		<div className="margin-top--lg">
			<div className="container">
				<section className="video-section">
					<h2><Translate>Product Videos</Translate></h2>
					<div className="row">
						{ProductVideoCards.filter((item) => {
							if (isZh) {
								return item.language === 'zh-cn'
							} else {
								return item.language !== 'zh-cn'
							}
						}).map((props, idx) => {
							return <Card key={idx} {...props} />							
						}							
						)}
					</div>
				</section>
				<section className="video-section">
					<h2><Translate>Tutorials</Translate></h2>
					<div className="row">
						{TutorialVideoCards.filter((item) => {
							if (isZh) {
								return item.language === 'zh-cn'
							} else {
								return item.language !== 'zh-cn'
							}
						}).map((props, idx) => (
							<Card key={idx} {...props} />
						))}
					</div>
				</section>
			</div>
		</div>
	)
}

export default VideoCard