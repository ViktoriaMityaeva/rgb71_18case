import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
import EqualizerIcon from '@mui/icons-material/Equalizer';

export const btns = [
	{
		name: 'Профиль',
		icon: (color = 'disabled' ) => <AccountCircleIcon color={color} />,
		active: true
	},
	{
		name: 'Отчет',
		icon: (color = 'disabled' ) => <LocalPrintshopIcon color={color} />,
		active: false
	},
	{
		name: 'Статистика',
		icon: (color = 'disabled' ) => <EqualizerIcon color={color} />,
		active: false
	},
	{
		name: 'Справочники',
		icon: (color = 'disabled' ) => <AccountCircleIcon color={color} />,
		active: false
	},
];
