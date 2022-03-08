import Header from "./components/Header";
import ProductList from "./components/ProductList";
import {useMemo, useState, useEffect} from "react";

import axios from "axios";

function App() {
    // const [products, setProducts] = useState([
    //     {
    //         id: 1,
    //         title: "Египет",
    //         description: "Идеальное место для дайвинга и прогулок по дюнам пустыни",
    //         image: "https://avatars.mds.yandex.net/i?id=9b0ca528054c34d068267eef5f8b6205-5876357-images-thumbs&n=13&exp=1",
    //         price: 46250,
    //         favorite: false
    //     },
    //     {
    //         id: 2,
    //         title: "Мексика",
    //         description: "Земля ацтеков и майя с древней культурой и пляжной идиллией",
    //         image: "https://avatars.mds.yandex.net/i?id=72fff16b94bbee6b5793e7a632518669-5855963-images-thumbs&n=13&exp=1",
    //         price: 132000,
    //         favorite: false
    //     },
    //     {
    //         id: 3,
    //         title: "Мальдивы",
    //         description: "Райские острова с подводными отелями и ресторанами",
    //         image: "https://avatars.mds.yandex.net/i?id=4d9cc6cf0be8372f08c3fc9606bde842-5875471-images-thumbs&n=13&exp=1",
    //         price: 128950,
    //         favorite: false
    //     },
    //     {
    //         id: 4,
    //         title: "Индонезия",
    //         description: "Тысячи островов для дайвинга, серфинга и райского наслаждения",
    //         image: "https://avatars.mds.yandex.net/i?id=578df9b7146f19a1b292a0d6a507a3c7-5876724-images-thumbs&n=13&exp=1",
    //         price: 78964,
    //         favorite: false
    //     },
    //     {
    //         id: 5,
    //         title: "Чехия",
    //         description: "Край лечебных вод и средневековых замков",
    //         image: "https://avatars.mds.yandex.net/i?id=bbdfea158bba86b10ea3ea7785dbe494-4965879-images-thumbs&n=13&exp=1",
    //         price: 102130,
    //         favorite: false
    //     }
    // ]);

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const apiUrl = 'https://fakestoreapi.com/products?limit=8';
        axios.get(apiUrl).then((resp) => {
            const allPersons = resp.data;
            setProducts(allPersons);
            setLoading(true);
        });
    }, [setProducts]);

    const favoriteProduct = (product) => {
        let status = false;
        if (product.favorite) {
            status = false;
        } else {
            status = true;
        }

        setProducts(
            products.map((item) =>
                item.id === product.id
                    ? {...item, favorite: status}
                    : item
            )
        )
    }

    const removeProduct = (product) => {
        setProducts(products.filter(p => p.id !== product.id))
    }

    const [filter, setFilter] = useState({status: false});

    const sortedProducts = useMemo(() => {
        if(filter.status === false) {
            // console.warn("status 1 -",filter.status);
            return products;
        } else {
            // console.warn("status 2 -",filter.status);
            return products.filter(p => p.favorite === filter.status);
        }
    }, [filter.status, products]);

    return (
        <div className="App">
            <Header filter={filter} setFilter={setFilter}/>

            <ProductList remove={removeProduct} favorite={favoriteProduct} products={sortedProducts} loading={loading}/>
        </div>
    );
}

export default App;
