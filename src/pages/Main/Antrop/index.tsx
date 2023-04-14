import { Head } from "../../../components/Head";
import { Items } from "../../../components/Items";
import { SnackTitle } from "../../../components/SnackTitle";

import { useItem } from "../../../hooks/useItems";

const Antrop = () => {

    const { antrop } = useItem()

    return (
        <>
            <Head title="Antropometria"  />
            <SnackTitle>Antropometria</SnackTitle>
            <Items items={antrop}></Items>
        </>
    )
}

export default Antrop;