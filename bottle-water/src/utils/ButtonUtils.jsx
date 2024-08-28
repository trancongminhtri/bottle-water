import { styled } from '@mui/material/styles';
import {Button, Badge} from '@mui/material';


const ButtonNavBar = styled(Button)({
    boxShadow: 'none',
    backgroundColor: 'transparent',
    fontFamily: ['Roboto', 'sans-serif'].join(','),
    fontWeight: 700,
    color: '#ffffff',
    padding: '0 10px 0 10px',
 
    '&:hover': {
        color: '#ffff00',
        backgroundColor: 'transparent',
        borderColor: 'none',
        boxShadow: 'none',
    },
    '&:active': {
        color: '#ffff00',
        backgroundColor: 'transparent',
        borderColor: 'none',
        boxShadow: 'none',
    },
    '&:focus': {
        color: '#ffff00',
        boxShadow: 'none',
    },
});

const ButtonNumberPhone = styled(Button)({
    boxShadow: 'none',
    backgroundColor: 'transparent',
    fontFamily: ['Roboto', 'sans-serif'].join(','),
    fontWeight: 700,
    color: '#ffff00',
    '&:hover': {
        color: '#333',
        backgroundColor: 'transparent',
        borderColor: 'none',
        boxShadow: 'none',
    },
    '&:active': {
        color: '#333',
        backgroundColor: 'transparent',
        borderColor: 'none',
        boxShadow: 'none',
    },
    '&:focus': {
        color: '#333',
        boxShadow: 'none',
    },
});

const StyledBadge = styled(Badge)({
    '& .MuiBadge-badge': {
      right: -3,
      top: -2,
      boxShadow: '1px 1px 3px 0 rgba(0, 0, 0, .3)',
      backgroundColor: '#ff0000',
      padding: '0 4px',
      fontWeight: 'bolder',
      color: '#ffffff',
    }
  });

export const ButtonUtils = {
    ButtonNavBar,
    ButtonNumberPhone,
    StyledBadge,
}