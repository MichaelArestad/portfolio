import styles from "./flex.module.scss";
import Item from "../item/item";

export default function FlexItem({ children, ...props }) {
	return (
		<Item className={ styles.flexItem } { ...props }>{ children }</Item>
	);
}