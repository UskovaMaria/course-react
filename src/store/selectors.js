import { createSelector } from 'reselect';

// Основний селектор для отримання списку продуктів
const selectProducts = (state) => state.products.prodsList;

export const selectFilteredProducts = createSelector(
  [selectProducts],
  (prodsList) => prodsList.filter(prod => prod.type === 'product')
);

const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.items
);

// Мемоізований селектор для фільтрації курсів
export const selectCoursesList = createSelector(
  [selectProducts],
  (products) => products.filter(prod => prod.type === 'course')
);