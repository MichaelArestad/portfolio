import Back from "./back";

export default {
	title: "Portfolio/Back",
	component: Back,
};

const Template = (args) => <Back {...args}>{args.children}</Back>;

export const Default = Template.bind({});
Default.args = {
	href: "https://github.com/MichaelArestad/portfolio",
	children: "Edit on GitHub",
};
