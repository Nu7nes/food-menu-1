import { ReactElement } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import ListItem, { ItemType } from "../components/ListItem";



export default function ListAll(): ReactElement {
    const data = useSelector((state: RootState) => state.data.menu);
    
    return (
        <>
        <h1>asd</h1>
            {data.map((it: ItemType) => (
                <ListItem
                    item={it}
                    key={it.flavor}
                />
            ))}
        </>
    );
}
