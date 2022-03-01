
import { makeStyles} from '@mui/styles';

const useStyles = makeStyles({
    logo:{
        width: 100,
        padding:10,
        // height:100,
    },
    navbar: {
        background: ['#000', '!important'],
        position: ['static', '!important'],
        height: [50, '!important']
    }
})

const Header = () =>{
    const classes = useStyles();
    const logo="https://miro.medium.com/max/802/1*dLWPk_rziSpWhPx1UWONbQ@2x.png";
    return (
            <img src={logo} alt="logo" className={classes.logo} />
    )
}

export default Header