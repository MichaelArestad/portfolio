import Avatar from "../components/avatar/avatar";

export default {
	title: "Portfolio/Avatar",
	component: Avatar,
	argTypes: {
		size: {
			control: { type: "range", min: 24, max: 160, step: 8 },
		},
	},
};

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});

export const Medium = Template.bind({});
Medium.args = {
	size: 72,
};

export const Small = Template.bind({});
Small.args = {
	size: 40,
};
