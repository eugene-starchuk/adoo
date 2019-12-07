
import MenuItem from './MenuItem';


const Menu = () => (
    <div className='menu'>
        <MenuItem index={0} name='home' />
        <MenuItem index={1} name='about' />
        <MenuItem index={2} name='gallery' />
        <MenuItem index={3} name='contact' />
    </div>
);


export default Menu;
