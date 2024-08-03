import { FaShoppingBasket, FaTasks, FaUserFriends } from 'react-icons/fa';
import { IoSettings } from 'react-icons/io5';
import { GrHomeOption } from 'react-icons/gr';

import { ROUTER_MAP } from '@/shared/constatns';

export const navButtons = [
	{
		id: 1,
		icon: <GrHomeOption/>,
		text: 'Home',
		path: ROUTER_MAP.home
	},
	{
		id: 2,
		icon: <FaTasks/>,
		text: 'Tasks',
		path: ROUTER_MAP.tasks
	},
	{
		id: 3,
		icon: <FaUserFriends/>,
		text: 'Frens',
		path: ROUTER_MAP.frens
	},
	{
		id: 4,
		icon: <FaShoppingBasket/>,
		text: 'Shop',
		path: ROUTER_MAP.shop
	},
	{
		id: 5,
		icon: <IoSettings/>,
		text: 'Settings',
		path: ROUTER_MAP.settings
	}
];
