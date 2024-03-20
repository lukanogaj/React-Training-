import styles from "./index.module.scss";
import Intro from "../Intro";
import Avatar from "../Avatar";

const Card = () => {
	return (
		<div className={styles.card}>
			<Avatar />
			<Intro />
		</div>
	);
};

export default Card;
