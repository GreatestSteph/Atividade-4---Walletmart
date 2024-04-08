import MenuWalleMart from "../menu_componente/menu_wallemart";
export default function MenuWalleMart(props) {
    return (
        <div>
            <MenuWalleMart/>
            <div className="container">
                {props.children}
            </div>
        </div>
    )
}