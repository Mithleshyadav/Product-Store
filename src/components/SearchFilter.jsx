import React from 'react'


export default function SearchFilter({ search, setSearch, categories, category, setCategory }){
return (
<div className="flex flex-col sm:flex-row gap-3 sm:items-center">
<input
value={search}
onChange={(e) => setSearch(e.target.value)}
placeholder="Search products..."
className="flex-1 px-4 py-2 rounded border border-gray-200 bg-white focus:outline-none"
/>


<select
value={category}
onChange={(e) => setCategory(e.target.value)}
className="px-3 py-2 rounded border border-gray-200 bg-white"
>
<option value="">All categories</option>
{categories.map((c) => (
<option key={c} value={c}>{c}</option>
))}
</select>
</div>
)
}