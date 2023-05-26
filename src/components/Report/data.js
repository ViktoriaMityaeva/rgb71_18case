export const btnResults = [
	{
		id: 0,
		text: 'Всего',
		value: 1207,
		color: 'red',
	},
	{
		id: 1,
		text: 'Соответствует',
		value: 809,
		color: 'blue',
	},
	{
		id: 2,
		text: 'Дополнительные назначения',
		value: 114,
		color: 'green',
	},
	{
		id: 3,
		text: 'Частично',
		value: 27,
		color: 'orange',
	},
];

export const columns = [
	{ field: 'report_name', headerName: 'Отчет', flex: 1 },
	{ field: 'sum', headerName: 'Всего', flex: 1 },
	{ field: 'match', headerName: 'Соответствует', flex: 1 },
	{ field: 'extra', headerName: 'Доп. назначения', flex: 1 },
	{ field: 'part', headerName: 'Частично', flex: 1 },
];

export const columnsDoctors = [
	{ field: 'name', headerName: 'ФИО', flex: 1 },
	{ field: 'specialization', headerName: 'Специальность', flex: 1 },
	{ field: 'sum', headerName: 'Всего', flex: 1 },
	{ field: 'match', headerName: 'Соответствует', flex: 1 },
	{ field: 'extra', headerName: 'Доп. назначения', flex: 1 },
	{ field: 'part', headerName: 'Частично', flex: 1 },
];

export const columnsDepartment = [
	{ field: 'name', headerName: 'Отделение', flex: 1 },
	{ field: 'sum', headerName: 'Всего', flex: 1 },
	{ field: 'match', headerName: 'Соответствует', flex: 1 },
	{ field: 'extra', headerName: 'Доп. назначения', flex: 1 },
	{ field: 'part', headerName: 'Частично', flex: 1 },
];

export const rows = [
	{
		id: 0,
		data: {
			name: 'Отчет_23.05.23',
			sum: 286,
			match: 186,
			extra: 92,
			part: 8
		}
	},
	{
		id: 1,
		data: {
			name: 'Отчет_23.05.23',
			sum: 286,
			match: 186,
			extra: 92,
			part: 8
		}
	},
	{
		id: 2,
		data: {
			name: 'Отчет_23.05.23',
			sum: 286,
			match: 186,
			extra: 92,
			part: 8
		}
	},
	{
		id: 3,
		data: {
			name: 'Отчет_23.05.23',
			sum: 286,
			match: 186,
			extra: 92,
			part: 8
		}
	},
];

export const rowsDoctors = [
	{
		id: 0,
		data: {
			name: 'ФИО1',
			spec: 'врач-кардиолог',
			sum: 286,
			match: 186,
			extra: 92,
			part: 8
		}
	},
	{
		id: 1,
		data: {
			name: 'ФИО2',
			spec: 'врач-оториноларинголог',
			sum: 286,
			match: 186,
			extra: 92,
			part: 8
		}
	},
	{
		id: 2,
		data: {
			name: 'ФИО3',
			spec: 'врач-оториноларинголог',
			sum: 286,
			match: 186,
			extra: 92,
			part: 8
		}
	},
	{
		id: 3,
		data: {
			name: 'ФИО4',
			spec: 'врач-кардиолог',
			sum: 286,
			match: 186,
			extra: 92,
			part: 8
		}
	},
];

export const rowsDepartment = [
	{
		id: 0,
		data: {
			name: 'Кардиология',
			sum: 286,
			match: 186,
			extra: 92,
			part: 8
		}
	},

];

export const dataChart = [
	{ name: '09:00', 'Зона 1': 4000, 'Зона 2': 2400, 'Зона 3': 2400 },
	{ name: '09:30', 'Зона 1': 3000, 'Зона 2': 1398, 'Зона 3': 2210 },
	{ name: '10:00', 'Зона 1': 2000, 'Зона 2': 9800, 'Зона 3': 2290 },
	{ name: '10:30', 'Зона 1': 2780, 'Зона 2': 3908, 'Зона 3': 2000 },
	{ name: '11:00', 'Зона 1': 1890, 'Зона 2': 4800, 'Зона 3': 2181 },
	{ name: '11:30', 'Зона 1': 3000, 'Зона 2': 1398, 'Зона 3': 2210 },
	{ name: '12:00', 'Зона 1': 2000, 'Зона 2': 9800, 'Зона 3': 2290 },
	{ name: '12:30', 'Зона 1': 2780, 'Зона 2': 3908, 'Зона 3': 2000 },
	{ name: '13:00', 'Зона 1': 1890, 'Зона 2': 4800, 'Зона 3': 2181 },
];