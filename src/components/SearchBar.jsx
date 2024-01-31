function SearchBar ({filterText, inStockOnly, onFilterTextChange, onInStockOnlyChange}) {
    return (
        <form>
            <input 
            type="text" 
            value={filterText} 
            placeholder="Search..."
            onChange={(evt) => {
                onFilterTextChange(evt.target.value)
            }} 
            />
            <br />
            <label htmlFor="only-stock">
                <input 
                type="checkbox" 
                id="only=stock" 
                checked={inStockOnly}
                onChange={(evt) => {
                    onFilterTextChange(evt.target.value)
                }}
                />
                {" "}
                Only show products in stock
            </label>
        </form>
    )
}

export default SearchBar