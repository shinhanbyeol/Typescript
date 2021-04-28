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

type ShoppingItem = Pick<Product, 'id'|'name'|'price'>;
function displayProductDetail(shoppingItem: Pick<Product, 'id'|'name'|'price'>) {
  // ..
}

// Partial - 오브젝트의 요소를 옵셔널하게 처리.
// interface UpdateProduct {
//   id?: number;
//   name?: string;
//   price?: number;
//   brand?: string;
//   stock?: number;
// }
// type UpdateProduct = Partial<Product>
function updateProductItem(productItem: Partial<Product>) {
 //....
}


interface UserProfile {
  username: string;
  email: string;
  profilePhotoUrl: string;
}

// Partial 구현1
// interface UserProfileUpdate {
//   username?: string;
//   email?: string;
//   profilePhotoUrl?: string;
// }

// Partial 구현2
// type UserProfileUpdate = {
//   username?: UserProfile['username'];
//   email?: UserProfile['email'];
//   profilePhotoUrl?: UserProfile['profilePhotoUrl'];
// }

// Partial 구현3
// type UserProfileUpdate = {
//     [p in 'username' | 'email' | 'profilePhotoUrl']?: UserProfile[p]
// }

// Partial 구현4
type userProfileKeys = keyof UserProfile;
type UserProfileUpdate = {
  [p in keyof UserProfile]?: UserProfile[p]
}

// Partial 구현5
type Subset<T> = {
  [p in keyof T]?: T[p]
}

// Pick의 반대가 Omit
// Omit
interface AddressBook {
  name: string;
  phone: number;
  address: string;
  company: string;
}

const phoneBook: Omit<AddressBook, "address"> = {
  name: "name",
  phone: 123456789,
  company: "company"
}