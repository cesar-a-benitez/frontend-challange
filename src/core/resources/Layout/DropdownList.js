// Import Dependencies and Libraries
import React    from 'react'
import { Button, Menu, MenuItem, makeStyles, ListItemIcon, ListItemText, withStyles, Typography } from '@material-ui/core';

// Icons import
import ListIcon         from '@material-ui/icons/List';
const categories        = require('./icons/shape-blk.png');
const games             = require('./icons/controller-classic-blk.png');
const phone             = require('./icons/phone-blk.png');
const computer          = require('./icons/laptop-blk.png');
const receiver          = require('./icons/television-blk.png');
const eletronics        = require('./icons/gear-blk.png');
const eletrodomestics   = require('./icons/washing-machine-blk.png');
const sports            = require('./icons/basketball-blk.png');
const health            = require('./icons/shower-head-blk.png');

const btns = [  'Categorias',
                'Games',
                'Celulares e Tablets',
                'Informática',
                'Receptores',
                'Eletrônicos',
                'Eletrodomésticos',
                'Esporte e Lazer',
                'Saúde e Beleza']; 

const icons = [ categories,
                games,
                phone,
                computer,
                receiver,
                eletronics,
                eletrodomestics,
                sports,
                health];

const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    button: {
        margin: theme.spacing(2),
      },
    item: {
        fontSize: 15
    }
}));

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})(props => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
        }}
        transformOrigin={{
        vertical: 'top',
        horizontal: 'center',
        }}
        {...props}
    />
));

// Definition of styles to be used
const StyledMenuItem = withStyles(theme => ({
root: {
    '&:focus': {
    backgroundColor: theme.palette.primary.main,
    '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white,
    },
    },
},
}))(MenuItem);

export default function DropdownList() {

    // Declaration of constants and states to be used
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    // Inflate dropdown list function
    const inflateDropdown = btns.map((item, index) =>
        <StyledMenuItem key={index}>
            <ListItemIcon>
                <img src={icons[index]} style={{color: 'black'}} alt="Fail to load resource"/>
            </ListItemIcon>
            <ListItemText primary={item} />
        </StyledMenuItem>
    )

    return(
        <div className={classes.button}>
            <Button 
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick}
                style={{background: 'white', color: '#13609c', height: 54}}
            ><ListIcon fontSize='default' /><div style={{marginTop: '1%'}}><Typography variant="caption" gutterBottom>Baixar Lista</Typography></div></Button>
            <StyledMenu 
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {inflateDropdown}
            </StyledMenu>
        </div>
    );
}