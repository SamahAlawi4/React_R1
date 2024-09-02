import React, { useEffect, useState } from 'react';  
import './Home.css'

export default function Home() {  
    const [products, setProduct] = useState([]);  

    async function getData() {  
        const response = await fetch('https://forkify-api.herokuapp.com/api/search?q=pizza');  
        const data = await response.json();  
         
        setProduct(data.recipes); // تحديث الحالة بالوصفات  
    }  

    useEffect(() => {  
        getData(); // استدعاء الدالة بدون تمرير products  
    }, []);  

    return (  
        <>  
        <div className="container">
            <div className="row">
            {  
                products.map(p => (  
                   <div className="col-lg-3">
                    <div className="product" key={p.recipe_id}>  
                        <h3>{p.title}</h3>  
                        <img src={p.image_url} className="img-thumbnail  "  />

                    </div>  
                    </div>
                ))  
            }  

            </div>
            </div>
        </>  
    );  
}