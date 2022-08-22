import PeopleIcon from '@mui/icons-material/People';
import StorageIcon from '@mui/icons-material/Storage';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputCompositeIcon from '@mui/icons-material/SettingsInputComposite';
import SettingsSystemDaydreamIcon from '@mui/icons-material/SettingsSystemDaydream';
export const mainNavBarItems = [
    {
        id: 0,
        icon : <PeopleIcon/>,
        label : 'Authentication',
        route : '/route'
    },
    {
        id: 0,
        icon : <StorageIcon/>,
        label : 'Database',
        route : '/route'
    },
    {
        id: 0,
        icon : <SettingsSystemDaydreamIcon/>,
        label : 'Storage',
        route : '/route'
    },
    {
        id: 0,
        icon : <PublicIcon/>,
        label : 'Hosting',
        route : '/route'
    },
    {
        id: 0,
        icon : <SettingsEthernetIcon/>,
        label : 'Functions',
        route : '/route'
    },
    {
        id: 0,
        icon : <SettingsInputCompositeIcon/>,
        label : 'Machine Learning',
        route : '/route'
    }

]