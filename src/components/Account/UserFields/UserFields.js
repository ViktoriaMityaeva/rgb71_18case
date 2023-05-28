import { Divider, Grid, ListItemText } from '@mui/material';
import React from 'react';
import styles from './UserField.module.scss';

const UserFields = ({ title, value}) => {

	return (
		<Grid container>
			<Grid item xs={6} sm={6} md={6} lg={6} xl={6} className={styles.gridItem}>
				<ListItemText>{title}</ListItemText>
				<ListItemText>{value}</ListItemText>
			</Grid>
			<Divider />
		</Grid>
	);
};

export default UserFields;