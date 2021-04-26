// 유틸리티 타입 또는 제네릭 타입 - Pick

interface Product {
  id: number;
  name: string;
  price: number;
  brand: string;
  stock: number;
}

// ex api 함수
function fetchProducts(): Promise<Product[]> {
  // ..
}

interface ProductDetail {
  id: number;
  name: string;
  price: number;
}

// type ShoppingItem = Pick<Product, 'id'|'name'|'price'>;

function displayProductDetail(shoppingItem: Pick<Product, 'id'|'name'|'price'>) {
  // ..
}