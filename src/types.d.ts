type BasketItem={
    title:string,
    price:number,
    count:number,
    id:string
}

export type BasketContextState={
    basketItems:BasketItem[];
    addBasket:(value:BasketItem)=>any,
    changeItemCount:(value1:BasketItem,value2:number)=>any,
    confirmBasket:()=>void
    deleteBasket:(value:string)=>void
}