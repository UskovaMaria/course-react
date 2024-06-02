import { createSlice } from "@reduxjs/toolkit";

console.log(process.env.PUBLIC_URL);

const productSlice = createSlice({
  name: 'products',
  initialState: {
    prodsList: [
      { id: 1, name: 'Сердечко кохання', img: `${process.env.PUBLIC_URL +'/images/product-1.jpg'}`, price: 10, text: 'Запах: ніжний аромат троянди та ванілі. Для чого: для атмосфери романтичного настрою', type: 'product', publish: true },
      { id: 2, name: 'Вихір кохання', img: `${process.env.PUBLIC_URL +'/images/product-2.jpg'}`, price: 20, text: 'Запах: ніжний аромат лаванди. Для чого: для створення атмосфери затишку', type: 'product', publish: true },
      { id: 3, name: 'Веселка', img: `${process.env.PUBLIC_URL +'/images/product-3.jpg'}`, price: 10, text: 'Запах: Свіжий аромат лайма. Для чого: для енергії та свіжості в приміщені.', type: 'product', publish: true },
      { id: 4, name: 'Жіноча чарівність', img: `${process.env.PUBLIC_URL +'/images/product-4.jpg'}`, price: 10, text: 'Запах: ніжний аромат лаванди та фрезій. Для чого: для затишку та комфорту.', type: 'product', publish: true },
      { id: 5, name: 'Основи виготовлення свічок', img: `${process.env.PUBLIC_URL +'/images/course-1.jpg'}`, price: 40, text: 'Будем навчати основам виготовлення свічок з різних матеріалів.', type: 'course', publish: true },
      { id: 6, name: 'Мистецтво ароматерапії', img: `${process.env.PUBLIC_URL +'/images/course-2.jpg'}`, price: 40, text: 'Будем вивчати мистецтво ароматерапії та виготовлення свічок з різними ароматами.', type: 'course', publish: true },
    ],
  },
  reducers: {
    addProduct(state, action) {
      const product = action.payload.product;
      state.prodsList.push(product);
    },
  }
});

export const { addProduct } = productSlice.actions;
export default productSlice.reducer;