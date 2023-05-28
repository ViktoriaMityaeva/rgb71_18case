import { Divider, Grid, ListItemText } from '@mui/material';
import React from 'react';
import styles from './UserField.module.scss';

const UserFields = ({ title}) => {

	return (
		<Grid container>
			<Grid item xs={4} sm={4} md={4} lg={4} xl={4} className={styles.gridItem}>
				<ListItemText>{title}</ListItemText>
			</Grid>
			<Divider />
		</Grid>
	);
};

export default UserFields;