const BASE = import.meta.env.VITE_API_URL

export async function fetchProducts() {
const res = await fetch(`${BASE}/products`)
if (!res.ok) throw new Error('Failed to fetch products')
return res.json()
}


export async function fetchCategories() {
const res = await fetch(`${BASE}/products/categories`)
if (!res.ok) throw new Error('Failed to fetch categories')
return res.json()
}