import './Header.scss'


export const Header = () => {

    let light = true;
    

    function changeBg(){
        if(light === true){
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
            light = false;
        }
        else{
            document.body.style.backgroundColor = "rgb(39, 39, 39)";
            document.body.style.color = "white";
            light = true;
        }
    }


    return (
        <div className = "header__container">
            <div className = "header__wrapper">
                <div className = "header__logo-container">
                    KinoSmotr
                </div>
                <div class="form-check form-switch">
                    <input onClick={changeBg} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                </div>
            </div>
        </div>
    )
}