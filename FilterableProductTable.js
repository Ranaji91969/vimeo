import { useState } from "react";


function FilterableProductTable({products}) {
    const [filterText, setFilterText] = useState('');
    const [inStockOnly, setInStockOnly] =useState('false');

    return (
        <div>
            <searchBar
            filterText={filterText}
            inStockOnly={inStockOnly}
            onFiltertextChange={setFilterText}
            onInStockOnlyChange={setInStockOnly}/>
            <ProductTable 
            products={products}
            filterText={filterText}
            inStockOnly={inStockOnly}/>
        </div>
    );
}

export default function FilterableProductTable () {
    return <FilterableProductTable products={PRODUCTS} />;
  }
