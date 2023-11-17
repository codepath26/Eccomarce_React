import { createContext, useContext, useReducer } from "react";



const ProductContext = createContext({
  products : [],
  totalPrice : 0,
  addProduct : (product)=>{},
  removeProduct : (id)=>{},
});


const initialState = {
  products : [],
  totalPrice : 0,
}

const reducer = (state , action)=>{
  if(action.type === 'ADD'){
    const updatedPrice  = state.totalPrice + Number(action.product.price);
    const existingProductIndex = state.products.findIndex(item=>item.id === action.product.id);

    const existingProduct = state.products[existingProductIndex];
    let updatedProducts;
    if(existingProduct){
      const updatedProduct = {...existingProduct , quantity : Number(existingProduct.quantity) + 1};
      console.log("updatedproduct" , updatedProduct)
      updatedProducts = [...state.products];
      updatedProducts[existingProductIndex] = updatedProduct;
    }else{
      console.log("else")
        //  let updatedProduct = {...action.product , quantity : 1}
       updatedProducts = state.products.concat(action.product);
       console.log(updatedProducts)
    }
   return {
    products : updatedProducts,
    totalPrice : updatedPrice,
   }
  }
  if(action.type === "REMOVE"){
    const productIndex = state.products.findIndex(item=>item.id === action.id);
    const product = state.products[productIndex];
    console.log(product.price  , typeof(product.price) , "price")
    console.log(product.quantity  , typeof(product.quantity) , "quantity")
    const updatedPrice  = Number(state.totalPrice - Number(product.price * product.quantity)) ;
    console.log(updatedPrice , typeof updatedPrice);
   const updatedProducts = state.products.filter(item => item.id !== action.id);
   return {
    products : updatedProducts,
    totalPrice : updatedPrice,
   }
   
  }

}

const ProductProvider = ({children})=>{
  const [productsDetails , dispatch] = useReducer(reducer , initialState);

 const addProduct = (product)=>{
  dispatch({
    type : 'ADD',
    product : product,
  })
 }
 const removeProduct = (id)=>{
  dispatch({
    type : "REMOVE",
    id : id,
  })
 }
  return(
    <ProductContext.Provider value={{productsDetails , addProduct , removeProduct}}>
      {
        children
      }
    </ProductContext.Provider>
  )
}


export default ProductProvider;

export function useProduct (){
   return useContext(ProductContext); 
}