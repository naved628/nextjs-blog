import classes from './logo.module.css'


function Logo(){
    let logoTitle ="Navz' Next blog";
    return (
        <div className={classes.logo}>{logoTitle}</div>
    )
}

export default Logo;