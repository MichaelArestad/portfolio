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
					<YouTube src="https://www.youtube.com/embed/JLYqVV-UbW8" />
				</Card>

				<Card backgroundColor="#000">
					<Item width="large" style={{ margin: "40px auto" }}>
						<Image src="/images/kosmo/full@2x.jpg" width="800" height="600" />
						<Card
							compact
							backgroundColor="#242424"
							textColor="#fff"
							style={{ marginTop: "24px" }}
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
						width="large"
						backgroundColor="#ffffff"
						style={{ margin: "40px auto" }}
					>
						<Text>
							This is a page showing my latest KOSMO setup.{" "}
							<a href="https://twitter.com/michaelarestad">Let me know</a> if
							you have any questions.
						</Text>

						<Text>
							I was particularly drawn to Kosmo modules because I rather enjoy
							the build and they are cost effective. Sam (Look Mum No Computer)
							and a few others from the forums have made PCBs and front panels
							available to purchase. That means all I needed to do to start off
							my modular is order the components and assemble the module. It
							also is somewhat less expensive than purchasing Eurorack modules,
							which can be hundreds of dollars for a single module.
						</Text>
					</Card>
				</Card>

				<Card>
					<Flex
						flexDirection="row-reverse"
						alignItems="center"
						justifyContent="space-between"
					>
						<FlexItem>
							<Image
								caption="This case I built out of rotting plywood from under the shed. It has a folding handle for easy carrying."
								src="/images/kosmo/top@2x.jpg"
								width="800"
								height="600"
							/>
						</FlexItem>
						<FlexItem width="small">
							<Heading>Top case</Heading>

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
								src="/images/kosmo/bottom@2x.jpg"
								width="800"
								height="600"
							/>
						</FlexItem>
						<FlexItem width="small">
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

					<Flex>
						<FlexItem width="small">
							<Heading>In other cases (or shelved)</Heading>
							<Text>These cases are still in progress.</Text>

							<List minimal condensed>
								<li>
									1 x{" "}
									<a href="https://github.com/holmesrichards/GateGrinder">
										GATE GRINDER
									</a>
								</li>
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
									<a href="https://www.lookmumnocomputer.com/projects#/1163-mini-mixer">
										LMNC #1163 MINI MIXER
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
									<a href="https://www.lookmumnocomputer.com/projects#/apcapcapc">
										LMNC AAAPPPCCC
									</a>
								</li>
								<li>
									<a href=""></a>
								</li>
							</List>
						</FlexItem>
					</Flex>

					<Flex>
						<FlexItem width="small">
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
									2 x{" "}
									<a href="https://lookmumnocomputer.discourse.group/t/k25-series-2-5cm-kosmo-utilities">
										CTORP LFO
									</a>
								</li>
								<li>
									2 x{" "}
									<a href="https://lookmumnocomputer.discourse.group/t/k25-series-2-5cm-kosmo-utilities">
										CTORP ATTENUATOR
									</a>
								</li>
								<li>
									2 x{" "}
									<a href="https://lookmumnocomputer.discourse.group/t/k25-series-2-5cm-kosmo-utilities">
										CTORP DUAL G2T
									</a>
								</li>
								<li>
									2 x{" "}
									<a href="https://lookmumnocomputer.discourse.group/t/k25-series-2-5cm-kosmo-utilities">
										CTORP SUB OSC
									</a>
								</li>
								<li>
									2 x{" "}
									<a href="https://lookmumnocomputer.discourse.group/t/k25-series-2-5cm-kosmo-utilities">
										CTORP A/R EG
									</a>
								</li>
								<li>
									2 x{" "}
									<a href="https://lookmumnocomputer.discourse.group/t/kosmo-sequential-switch">
										CTORP SEQUENTIAL SWITCH
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
						<FlexItem width="small">
							<Heading>Why is this here?</Heading>
							<Text>
								Because it's a project I'm continually iterating on stretching
								the limits of my design, electrical, and coding skills. Also, I
								think it's pretty rad.
							</Text>
						</FlexItem>
					</Flex>
				</Card>
			</main>
		</Layout>
	);
}
