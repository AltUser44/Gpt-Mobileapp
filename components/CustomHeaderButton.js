import { HeaderButton } from 'react-navigation-header-buttons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import color from '../constants/Colors';

const CustomHeaderButton = (props) => {
    return (
        <HeaderButton
            {...props}
            IconComponent={MaterialCommunityIcons}
            iconSize={23}
            color={props.color ?? color.primary}
        />
    );
};

export default CustomHeaderButton;
