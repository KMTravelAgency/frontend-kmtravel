

function ProductItem() {
    
    return (
    <>
        <div class="flex">
            <div class="flex-none w-48 relative">
                <img src="/frontend-kmtravel/bellaitalia.jpg" alt="" class="absolute inset-0 w-full h-full object-cover" />
            </div>
            <form class="">
                <h1>
                Bella Italia
                </h1>
                <button onClick={console.log("send data to backend")}>order</button>
            </form>
        </div>  
    </>
    );

}

export default ProductItem;
