import { Head } from "../../../components/Head";
import { Items } from "../../../components/Items";
import { SnackTitle } from "../../../components/SnackTitle";
import { useItem } from "../../../hooks/useItems";

const Equips = () => {

    const { equips } = useItem()

    return (
        <>
            <Head title="Equipamentos"  />
            <SnackTitle>Equipamentos Fitness</SnackTitle>
            <Items items={equips}></Items>
        </>
    )
};

export default Equips;