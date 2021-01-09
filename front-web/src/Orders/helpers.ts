import { Product } from './types';

export function checkIsSelected(selectedProducts: Product[], product: Product){
  return selectedProducts.some(item => item.id === product.id);
}

export function formatPrice(price: number){
  const formatter = new Intl.NumberFormat('en-CA', {
    style:'currency',
    currency:'CAD',
    minimumFractionDigits: 2
  });
  return formatter.format(price);
}
