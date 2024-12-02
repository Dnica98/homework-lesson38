import CartIcon from '../../assets/shopping-cart.png';
import AddIcon from '../../assets/add.png';
import MinusIcon from '../../assets/minus.png'

import './styles.css'

const iconSize = {
    sm: 'icon-sm',
    md: 'icon-md',
    lg: 'icon-lg',
    xl: 'icon-xl'
}

const iconName = {
    cart: CartIcon,
    add: AddIcon,
    minus: MinusIcon
}

const Icon = ({name, size}) => {
    return(
        <img src={iconName[name]} className={iconSize[size]} alt={name} />
    )
}

export default Icon;