import Avatar from "../components/avatar/avatar";

export default {
	title: "Portfolio/Avatar",
	component: Avatar,
};

const Template = (args) => <Avatar {...args} />;

export const Default = Template.bind({});

// export const Small = Template.bind({});
// Default.args = {
//   size: 40,
// };
