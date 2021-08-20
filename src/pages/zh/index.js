
import React, { useEffect, useRef } from 'react'
// import {Redirect} from '@docusaurus/router'

function Zh () {
	const ARef = useRef()
	useEffect(() => {
		ARef.current.click()
	}, [])
	return (
		<>
			<a ref={ARef} href="https://nocalhost.dev/zh-CN/" style={{ visibility: 'hidden' }}></a>
		</>
	)
}

export default Zh
