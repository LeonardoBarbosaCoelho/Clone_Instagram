export default function ItemMenu(props) {
    return(
        <div className="ItemMenu">   
            <li>
            <span>{props.icone}</span>
            <h6><span>{props.texto}</span></h6>
            </li>
        </div>
    )
}

