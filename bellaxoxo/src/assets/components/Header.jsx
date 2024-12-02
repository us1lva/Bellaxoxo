import style from './Header.module.css'
import {efeito} from './efeito'



function Header (){

    return(
        <header>
            
    <div className={style.logo}>Bellaxoxo</div>
    <div className={style.pens}>
        <div className={style.line}></div>
        <div className={style.line}></div>
        <div className={style.line}></div>
    </div>
    <nav className={style.nav_bar}>
        <ul>
            <li>
                <a href="" className={style.active}>home</a>
            </li>
            <li>
                <a href="">Features</a>
            </li>
            <li>
                <a href="">Pricing</a>
            </li>
            <li>
                <a href="">About</a>
            </li>
            <li>
                <a href="">Contact</a>
            </li>
        </ul>

    </nav>
</header>
    )

}



export default Header