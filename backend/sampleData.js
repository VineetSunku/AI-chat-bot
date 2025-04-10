// sampleData.js
export const products = [
  { id: 'p1', name: 'Smartphone', price: 699, inStock: true },
  { id: 'p2', name: 'Laptop', price: 1299, inStock: false },
  { id: 'p3', name: 'Headphones', price: 199, inStock: true }
];

export const orders = [
  { id: 'o1', product: 'Smartphone', status: 'Shipped', refund: false },
  { id: 'o2', product: 'Laptop', status: 'Processing', refund: false },
  { id: 'o3', product: 'Headphones', status: 'Delivered', refund: false }
];

export const storePolicies = {
  returnPolicy: 'Returns accepted within 30 days with receipt.',
  shippingPolicy: 'Free shipping on orders over $50.',
  refundPolicy: 'Refunds processed within 7 business days.'
};
