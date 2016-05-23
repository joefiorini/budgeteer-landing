import logo from './logo.svg';
import smartphone from './smartphone.svg';
import laptop from './laptop.svg';
import coinDollar from './coin-dollar.svg';
import SvgIcon from './SvgIcon';

export const Logo = SvgIcon({ displayName: 'Logo' })(logo);

export const Smartphone = SvgIcon({ displayName: 'Smartphone' })(smartphone);

export const Laptop = SvgIcon({ displayName: 'Laptop' })(laptop);

export const CoinDollar = SvgIcon({ displayName: 'CoinDollar' })(coinDollar);
