import React, { useEffect, useState, useMemo } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductList from './components/ProductList'
import SearchFilter from './components/SearchFilter'
import { fetchProducts, fetchCategories } from './services/api'


export default function App(){
const [products, setProducts] = useState([])
const [categories, setCategories] = useState([])
const [search, setSearch] = useState('')
const [category, setCategory] = useState('')
const [loading, setLoading] = useState(true)
const [error, setError] = useState(null)


useEffect(() => {
  const controller = new AbortController()

  async function load() {
    try {
      setLoading(true)
      setError(null)

      const [prods, cats] = await Promise.all([
        fetchProducts({ signal: controller.signal }),
        fetchCategories({ signal: controller.signal })
      ])

      setProducts(prods)
      setCategories(cats)

    } catch (err) {
      if (err.name === "AbortError") return
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  load()

  return () => controller.abort()
}, [])



const filtered = useMemo(() => {
const q = search.trim().toLowerCase()
return products.filter(p => {
if (category && p.category !== category) return false
if (!q) return true
return (
p.title.toLowerCase().includes(q) ||
p.description.toLowerCase().includes(q) ||
p.category.toLowerCase().includes(q)
)
})
}, [products, search, category])


return (
<div className="min-h-screen flex flex-col">
<Header />


<main className="max-w-6xl w-full mx-auto px-4 py-8 flex-1">
<div className="mb-6">
<SearchFilter
search={search}
setSearch={setSearch}
categories={categories}
category={category}
setCategory={setCategory}
/>
</div>


{loading && (
<div className="text-center py-12">Loading...</div>
)}


{error && (
<div className="text-center text-red-500 py-6">Error: {error}</div>
)}


{!loading && !error && (
<ProductList products={filtered} />
)}
</main>


<Footer />
</div>
)
}