import Account from '../../static/Account';
import Print from '../../static/Print';
import Equalizer from '../../static/Equalizer';
import MedBookIcon from '../../static/MedBookIcon';

export const btns = [
	{
		id: 3,
		name: 'Справочники',
		icon: (color = '#bdbdbd' ) => <MedBookIcon color={color} />,
		link: '/guide',
	},
	{
		id: 2,
		name: 'Статистика',
		icon: (color = '#bdbdbd' ) => <Equalizer color={color} />,
		link: '/statistic',
	},
	{
		id: 1,
		name: 'Отчет',
		icon: (color = '#bdbdbd' ) => <Print color={color} />,
		link: '/report',
	},
	{
		id: 0,
		name: 'Профиль',
		icon: (color = '#bdbdbd' ) => <Account color={color} />,
		link: '/account',
	},
];
