import Back from "../../components/back/back";
import Card from "../../components/card/card";
import Flex from "../../components/flex/flex";
import FlexItem from "../../components/flex/flex-item";
import Heading from "../../components/heading/heading";
import Hero from "../../components/hero/hero";
import Image from "../../components/image/image";
import Item from "../../components/item/item";
import Layout from "../../components/layout/layout";
import List from "../../components/list/list";
import SEO from "../../components/seo";
import Text from "../../components/text/text";
import YouTube from "../../components/youtube/youtube";

export default function Home() {
	return (
		<Layout>
			<SEO title="Kosmo" />

			<main>
				<Hero
					title="Kosmo"
					description="very synth much heck"
					zag
					backgroundColor="#242424"
					textColor="#fff"
				>
					<Back href="/projects/">Projects</Back>
				</Hero>

				<Card backgroundColor="#242424">
					<YouTube src="JLYqVV-UbW8" />
				</Card>

				<Card backgroundColor="#000">
					<Item width="l" style={{ margin: "var( --unit-5 ) auto" }}>
						<Image
							src="/images/kosmo/full@2x.jpg"
							alt="The full majesty of a DIY KOSMO synthesizer"
							width="800"
							height="600"
						/>
						<Card
							compact
							backgroundColor="#242424"
							textColor="#fff"
							style={{ marginTop: "var( --unit-3 )" }}
						>
							<Text caption>
								This giant wall of synth is Kosmo. Kosmo is a modular
								synthesizer I built over the last year using modules primarily
								designed by other folks.
							</Text>
						</Card>
					</Item>
				</Card>

				<Card circles backgroundColor="#242424">
					<Card
						width="l"
						backgroundColor="var( --color-light)"
						style={{ margin: "var( --unit-5 ) auto" }}
					>
						<Item width="m" style={{ margin: "var( --unit-5 ) auto" }}>
							<Text size="l">
								This is a page showing my latest KOSMO setup.{" "}
								<a href="https://twitter.com/michaelarestad">Let me know</a> if
								you have any questions.
							</Text>

							<Text size="l">
								I was particularly drawn to Kosmo modules because I rather enjoy
								the build and they are cost effective. Sam (Look Mum No
								Computer) and a few others from the forums have made PCBs and
								front panels available to purchase. That means all I needed to
								do to start off my modular is order the components and assemble
								the module. It also is somewhat less expensive than purchasing
								Eurorack modules, which can be hundreds of dollars for a single
								module.
							</Text>
						</Item>
					</Card>
				</Card>

				<Card>
					<Flex alignItems="center" justifyContent="space-between">
						<FlexItem>
							<Image
								caption="The latest case for housing utilitarian gems"
								src="/images/kosmo/top.jpg"
								srcset="/images/kosmo/top@2x.jpg 2x"
								width="800"
								height="600"
								alt="The latest case for housing utilitarian gems"
							/>
						</FlexItem>
						<FlexItem width="s">
							<Heading>Top case</Heading>
							<List minimal condensed>
								<li>
									1 x{" "}
									<a href="https://github.com/holmesrichards/GateGrinder">
										GATE GRINDER
									</a>
								</li>
								<li>
									1 x{" "}
									<a href="https://lookmumnocomputer.discourse.group/t/kosmo-sequential-switch">
										CTORP SEQUENTIAL SWITCH (waiting on parts)
									</a>
								</li>
								<li>
									1 x{" "}
									<a href="https://lookmumnocomputer.discourse.group/t/k25-series-2-5cm-kosmo-utilities">
										CTORP GLIDE
									</a>
								</li>
								<li>
									1 x{" "}
									<a href="https://lookmumnocomputer.discourse.group/t/k25-series-2-5cm-kosmo-utilities">
										CTORP LFO
									</a>
								</li>
								<li>
									1 x{" "}
									<a href="https://lookmumnocomputer.discourse.group/t/k25-series-2-5cm-kosmo-utilities">
										CTORP DUAL G2T
									</a>
								</li>
								<li>
									1 x{" "}
									<a href="https://lookmumnocomputer.discourse.group/t/k25-series-2-5cm-kosmo-utilities">
										CTORP SUB OSC
									</a>
								</li>
								<li>
									1 x{" "}
									<a href="https://lookmumnocomputer.discourse.group/t/k25-series-2-5cm-kosmo-utilities">
										CTORP ATTENUATOR (waiting on part)
									</a>
								</li>
								<li>
									1 x{" "}
									<a href="https://lookmumnocomputer.discourse.group/t/k25-series-2-5cm-kosmo-utilities">
										CTORP ATTENUVERTER
									</a>
								</li>
								<li>
									1 x{" "}
									<a href="https://lookmumnocomputer.discourse.group/t/k25-series-2-5cm-kosmo-utilities">
										CTORP A/R EG
									</a>
								</li>
								<li>1 x crucFX VLPG</li>
								<li>
									1 x{" "}
									<a href="https://www.lookmumnocomputer.com/projects#/1163-mini-mixer">
										LMNC #1163 MINI MIXER
									</a>
								</li>
							</List>
						</FlexItem>
					</Flex>

					<Flex
						flexDirection="row-reverse"
						alignItems="center"
						justifyContent="space-between"
					>
						<FlexItem>
							<Image
								caption="This case I built out of rotting plywood from under the shed. It has a folding handle for easy carrying."
								src="/images/kosmo/middle.jpg"
								srcset="/images/kosmo/middle@2x.jpg 2x"
								width="800"
								height="600"
								alt="This case I built out of rotting plywood from under the shed. It has a folding handle for easy carrying."
							/>
						</FlexItem>
						<FlexItem width="s">
							<Heading>Middle case</Heading>

							<Heading level="4">ROW 1</Heading>
							<List minimal condensed>
								<li>
									3 x{" "}
									<a href="https://www.lookmumnocomputer.com/projects#/1222-performance-vco">
										LMNC #1222 Performance VCO
									</a>
								</li>
								<li>
									1 x{" "}
									<a href="https://www.lookmumnocomputer.com/projects#/performance-filter">
										LMNC #1113 PERFORMANCE FILTER
									</a>
								</li>
								<li>
									1 x{" "}
									<a href="https://www.lookmumnocomputer.com/projects#/2399-triple-splashback">
										LMNC #2399 TRIPLE SPLASHBACK
									</a>
								</li>
								<li>
									1 x{" "}
									<a href="https://www.lookmumnocomputer.com/projects#/1157-mini-adsr">
										LMNC #1157 MINI ADSR
									</a>
								</li>
								<li>
									1 x{" "}
									<a href="https://www.lookmumnocomputer.com/projects#/11831184-quad-vca-mixer">
										LMNC #1184 QUAD VCA MIXER
									</a>
								</li>
							</List>

							<Heading level="4">ROW 2</Heading>
							<List minimal condensed>
								<li>
									1 x{" "}
									<a href="https://www.lookmumnocomputer.com/projects#/vclfo">
										LMNC #1145 VCLFO
									</a>
								</li>
								<li>
									1 x{" "}
									<a href="https://www.lookmumnocomputer.com/projects#/1114-funky-filter">
										LMNC #1114 FUNKY FILTER (GRR)
									</a>
								</li>
								<li>
									2 x{" "}
									<a href="https://www.lookmumnocomputer.com/projects#/1161-buffered-multiple">
										LMNC #1161 BUFFERED MULTIPLE
									</a>
								</li>
								<li>1 x DIALUP - I made this</li>
								<li>
									1 x RAT DISTORTION - I made this (
									<a href="https://pushermanproductions.com/product/phil-moulder-guitar-pedal-proco-rat/">
										Proco Rat pedal
									</a>
									)
								</li>
								<li>
									1 x{" "}
									<a href="https://www.lookmumnocomputer.com/projects#/1157-mini-adsr">
										LMNC #1157 MINI ADSR
									</a>
								</li>
								<li>
									1 x{" "}
									<a href="https://www.lookmumnocomputer.com/projects#/1007-midi-cv">
										LMNC #1007 MIDIMUSO MIDI TO CV
									</a>
								</li>
							</List>
						</FlexItem>
					</Flex>

					<Flex alignItems="center" justifyContent="space-between">
						<FlexItem>
							<Image
								caption="A slightly wider case and the blueprint for any future cases."
								src="/images/kosmo/bottom.jpg"
								srcset="/images/kosmo/bottom@2x.jpg 2x"
								width="800"
								height="600"
								alt="A slightly wider case and the blueprint for any future cases."
							/>
						</FlexItem>
						<FlexItem width="s">
							<Heading>Bottom case</Heading>
							<Heading level="4">ROW 1</Heading>
							<List minimal condensed>
								<li>
									1 x{" "}
									<a href="https://www.lookmumnocomputer.com/projects#/1222-performance-vco">
										LMNC #1222 Performance VCO
									</a>
								</li>
								<li>
									1 x{" "}
									<a href="https://reverb.com/item/34546784-crucfx-kosmo-euro-playset-pcb-panel-set">
										crucFX KOSMO EURO PLAYSET
									</a>
								</li>
								<li>
									1 x <a href="http://www.makenoisemusic.com/modules/maths"></a>
									MATHS
								</li>
								<li>
									1 x{" "}
									<a href="http://www.makenoisemusic.com/modules/morphagene"></a>
									MORPHAGENE
								</li>
								<li>
									1 x <a href="https://squarp.net/rample/">RAMPLE</a>
								</li>
								<li>
									1 x{" "}
									<a href="https://www.lookmumnocomputer.com/projects#/performance-filter">
										LMNC #1113 PERFORMANCE FILTER
									</a>
								</li>
								<li>
									1 x{" "}
									<a href="https://www.lookmumnocomputer.com/projects#/11831184-quad-vca-mixer">
										LMNC #1184 QUAD VCA MIXER
									</a>
								</li>
								<li>
									<a href=""></a>
								</li>
								<li>
									<a href=""></a>
								</li>
							</List>

							<Heading level="4">ROW 2</Heading>
							<List minimal condensed>
								<li>
									1 x{" "}
									<a href="https://www.lookmumnocomputer.com/projects#/vclfo">
										LMNC #1145 VCLFO
									</a>
								</li>
								<li>
									2 x{" "}
									<a href="https://www.lookmumnocomputer.com/projects#/1161-buffered-multiple">
										LMNC #1161 BUFFERED MULTIPLE
									</a>
								</li>
								<li>
									1 x{" "}
									<a href="https://lookmumnocomputer.discourse.group/t/k25-series-2-5cm-kosmo-utilities">
										CTORP ATTENUVERTER
									</a>
								</li>
								<li>
									1 x{" "}
									<a href="https://lookmumnocomputer.discourse.group/t/k25-series-2-5cm-kosmo-utilities">
										CTORP GLIDE
									</a>
								</li>
								<li>
									1 x{" "}
									<a href="https://github.com/holmesrichards/Mikrokosmos">
										MIKROKOSMOS
									</a>
								</li>
								<li>
									1 x{" "}
									<a href="https://www.lookmumnocomputer.com/projects#/2000-megadrone">
										LMNC #2000 MEGADRONE
									</a>
								</li>
								<li>
									2 x{" "}
									<a href="https://www.lookmumnocomputer.com/projects#/1157-mini-adsr">
										LMNC #1157 MINI ADSR
									</a>
								</li>
							</List>
						</FlexItem>
					</Flex>

					<Flex
						flexDirection="row-reverse"
						alignItems="center"
						justifyContent="space-between"
					>
						<FlexItem>
							<Image
								caption="A Frankenstein's amp for sure"
								src="/images/kosmo/speakers.jpg"
								srcset="/images/kosmo/speakers@2x.jpg 2x"
								width="800"
								height="600"
								alt="A Frankenstein's amp for sure"
							/>
						</FlexItem>
						<FlexItem width="s">
							<Heading>BUILT-IN AMP!</Heading>
							<Text>
								One day I got jealous of all those synths with built-in speakers
								so I figured I would make my own. I took one of those small belt
								Marshall amps that I found busted at a garage sale, combined it
								with speakers harvested from a failed circuit bend, and made
								this monstrousity to be the base of my Kosmo modular.
							</Text>
						</FlexItem>
					</Flex>

					<Flex>
						<FlexItem width="s">
							<Heading>In other cases (or shelved)</Heading>
							<Text>These cases are still in progress.</Text>

							<List minimal condensed>
								<li>
									1 x{" "}
									<a href="https://www.lookmumnocomputer.com/projects#/vclfo">
										LMNC #1145 VCLFO
									</a>
								</li>
								<li>
									1 x{" "}
									<a href="https://github.com/holmesrichards/Mikrokosmos">
										MUSIC BOX - I made this
									</a>
								</li>
								<li>
									1 x{" "}
									<a href="https://www.lookmumnocomputer.com/projects#/1114-funky-filter">
										LMNC #1114 FUNKY FILTER (GRR)
									</a>
								</li>
								<li>
									1 x{" "}
									<a href="https://lookmumnocomputer.discourse.group/t/k25-series-2-5cm-kosmo-utilities">
										CTORP LFO
									</a>
								</li>
								<li>
									1 x{" "}
									<a href="https://lookmumnocomputer.discourse.group/t/k25-series-2-5cm-kosmo-utilities">
										CTORP DUAL G2T
									</a>
								</li>
								<li>
									1 x{" "}
									<a href="https://lookmumnocomputer.discourse.group/t/k25-series-2-5cm-kosmo-utilities">
										CTORP SUB OSC
									</a>
								</li>
								<li>
									1 x{" "}
									<a href="https://lookmumnocomputer.discourse.group/t/k25-series-2-5cm-kosmo-utilities">
										CTORP A/R EG
									</a>
								</li>
								<li>
									1 x{" "}
									<a href="https://www.lookmumnocomputer.com/projects#/apcapcapc">
										LMNC AAAPPPCCC
									</a>
								</li>
								<li>1 x crucFX VLPG</li>
								<li>
									<a href=""></a>
								</li>
							</List>
						</FlexItem>
					</Flex>

					<Flex>
						<FlexItem width="s">
							<Heading>On the bench</Heading>
							<Text>My to do list.</Text>

							<List minimal condensed>
								<li>
									1 x{" "}
									<a href="https://github.com/holmesrichards/QuantizerModule">
										DUAL QUANTIZER
									</a>
								</li>
								<li>
									1 x{" "}
									<a href="https://lookmumnocomputer.discourse.group/t/k25-series-2-5cm-kosmo-utilities">
										CTORP ATTENUATOR
									</a>
								</li>
								<li>
									1 x{" "}
									<a href="https://www.lookmumnocomputer.com/projects#/1171-oba">
										LMNC #1171 OBA
									</a>
								</li>
							</List>
						</FlexItem>
					</Flex>

					<Flex>
						<FlexItem width="s">
							<Heading>Why is this here?</Heading>
							<Text>
								Because it&apos;s a project I&apos;m continually iterating on
								stretching the limits of my design, electrical, and coding
								skills. Also, I think it&apos;s pretty rad.
							</Text>
						</FlexItem>
					</Flex>
				</Card>
			</main>
		</Layout>
	);
}
