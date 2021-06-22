import YouTube from "./youtube";

export default {
	title: "Portfolio/YouTube",
	component: YouTube,
	argTypes: {
		src: {
			control: { type: "text" },
		},
		alt: {
			control: { type: "text" },
		},
	},
};

const Template = (args) => <YouTube {...args} />;

export const Default = Template.bind({});
Default.args = {
	src: "Ol8H5oXxClM",
	alt: "NYMS poly patch kids YouTube video",
};
