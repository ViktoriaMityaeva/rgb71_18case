import styles from './Authtorization.module.scss';
import SingInForm from './SingInForm/SingInForm';
import backgroundImage from '../../assets/Avtorization.svg';
import Logo from './Icon/Logo';

export default () => {
	return (
		<div
			className={styles.main}
			style={{ backgroundImage: `url(${backgroundImage})` }}
		>
			<div className={styles.wrapper}>
				<div className={styles.card}>
					<div className={styles.logo}>
						<Logo/>
					</div>
					<SingInForm />
				</div>
			</div>
		</div>
	);
};