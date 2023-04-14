import { Head } from "../../../components/Head";
import { Items } from "../../../components/Items";
import { SnackTitle } from "../../../components/SnackTitle";
import { useItem } from "../../../hooks/useItems";

const Sup = () => {

    const {sups} = useItem()

    return (
        <>
            <Head title="Suplementos" description="Nossos melhores suplementos" />
            <SnackTitle>Suplementos</SnackTitle>
            <Items items={sups}></Items>
        </>
    )
}

export default Sup;