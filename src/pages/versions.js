/* eslint-disable no-unused-vars */
import React from 'react'
import Link from '@docusaurus/Link'
import Layout from '@theme/Layout'
import Translate, {translate} from '@docusaurus/Translate'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

import {useVersions, useLatestVersion} from '@theme/hooks/useDocs'


function VersionPage() {
	const {
		siteConfig: {organizationName, projectName},
	} = useDocusaurusContext()
	const versions = useVersions()
	const latestVersion = useLatestVersion()
	const currentVersion = versions.find((version) => version.name === 'current')
	const pastVersions = versions.filter(
		(version) => version !== latestVersion && version.name !== 'current',
	)
	const repoUrl = `https://github.com/${organizationName}/${projectName}`

	return (
		<Layout
			title="Versions"
			description="Nocalhost Versions Page">
			<main className="container margin-vert--lg">
			    <h1><Translate>Nocalhost documentation versions</Translate></h1>

				{latestVersion && (
					<div className="margin-bottom--lg">
						<h3 id="next"><Translate>Current Version (Stable)</Translate></h3>
						<p>
							<Translate>Here you can find the documentation for current released version.</Translate>
						</p>
						<table>
							<tbody>
								<tr>
									<th>{latestVersion.label}</th>
									<td>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				)}
			</main>

			{pastVersions.length > 0 && (
				<div className="margin-bottom--lg">
					<h3 id="archive"><Translate>Past version (Not maintained anymore)</Translate></h3>
					<p>
						<Translate>Here you can find documentation for previous versions of Nocalhost.</Translate>
					</p>

					<table>
						<tbody>
							{pastVersions.map((version) => (
								<tr key={version.name}>
									<th>{version.label}</th>
									<td>
										<Link to={version.path}><Translate>Documentation</Translate></Link>
									</td>
									<td>
										<a href={`${repoUrl}/release/tag/v${version.name}`}>
											<Translate>Release Notes</Translate>
										</a>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			)}
		</Layout>
	)
}

export default VersionPage