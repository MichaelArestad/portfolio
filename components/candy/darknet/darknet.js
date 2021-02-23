import React from "react";
import Card from "../../card/card";
import styles from "./darknet.module.scss";

export default class DarkNet extends React.Component {
	render() {
		return (
			<Card addedClass={ styles.darknet }>
				<svg
					className={ styles.darknetBeacon }
					width={26}
					height={213}
					viewBox="0 0 26 213"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					style={{
						fill: "white",
					}}
				>
					<g filter="url(#shadow)">
						<path
							className={ styles.beacon__d }
							d="M5.59259 1H1.03704H1V5.59259H1.03704V24.963H5.59259L24 15.7778V7.44444H19.4444V12.7778L5.59259 19.7037V5.59259H24V1H5.59259Z"
						/>
						<g className={ styles.beacon__a }>
							<path d="M13.037 32.1482V32.1111H1V36.7037H11.6296L19.6296 40.9259V56.1482H24V37.9259L13.037 32.1482Z" />
							<path d="M3.2963 41.8148H1V56.1482H5.59259V46.4074H8.62963H15.2963V43.8889L11.3333 41.8148H3.2963Z" />
						</g>
						<path
							className={ styles.beacon__r }
							d="M5.59259 81.963L12.5185 78.4815L19.4444 81.963V87.2963H24V78.963L17.7778 75.8518L24 72.7407V67.8889V63.2963H19.4074H1V67.8889H19.4074V69.7407L1 78.963V87.2963H5.59259V81.963Z"
						/>
						<g className={ styles.beacon__k }>
							<path d="M5.59259 94.4445H1V118.407H5.59259V94.4445Z" />
							<path d="M24.0001 94.4445H19.4075V100.889L13.5927 103.778V109.074L19.4075 111.963V118.407H24.0001V109L18.8519 106.407L24.0001 103.852V94.4445Z" />
						</g>
						<g className={ styles.beacon__n }>
							<path d="M5.59259 139.778H1V149.519H5.59259V139.778Z" />
							<path d="M19.4444 137.815L5.59259 130.889V125.556H1V133.889L19.4074 143.074V149.518H24V145.63V125.556H19.4444V137.815Z" />
						</g>
						<g className={ styles.beacon__e }>
							<path d="M1 180.667H5.59259H24V176.074H5.59259V175.333V170.037L1 172.333V176.074V180.667Z" />
							<path d="M10.8149 166.481V171.074H19.1482L21.4075 166.481H16.1482H10.8149Z" />
							<path d="M24 156.667H1V161.259H24V156.667Z" />
						</g>
						<g className={ styles.beacon__t }>
							<path d="M7.44444 207.185H1V211.778H10.4074L19.6296 192.37H25V187.815H16.6667L7.44444 207.185Z" />
							<path d="M10.7407 187.815H1V192.407H10.7407V187.815Z" />
						</g>
					</g>
					<defs>
						<filter id="shadow">
							<feDropShadow dx={-2} dy={2} stdDeviation={0} floodColor="#BD10E0" />
							<feDropShadow dx={2} dy={-2} stdDeviation={0} floodColor="#009BFF" />
						</filter>
					</defs>
				</svg>
			</Card>
		);
	}
}