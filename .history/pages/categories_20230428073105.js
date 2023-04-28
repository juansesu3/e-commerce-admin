import Layout from "@/components/Layout"
import axios from "axios";
import { Result } from "postcss";
import { useEffect, useState } from "react"



const Categories = () => {

  const [name, setName] = useState('');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('/api/categories').then(result => {
      setCategories(result.data);
    });
  }, []);

  const saveCategory = async (ev) => {
    ev.preventDefault();
    await axios.post('/api/categories', { name });
    setName('');
  }

  return (
    <Layout>
      <h1>Categories</h1>
      <label >New category name</label>
      <form onSubmit={saveCategory} className="flex gap-1">
        <input
          type=""
          name=""
          className="mb-0"
          value={name}
          onChange={ev => setName(ev.target.value)}
          placeholder="New category" />
        <button
          type='submit'
          className="btn-primary py-1" >Save</button>
      </form>
      <table className="basic mt-4">
        <thead>
          <tr>
            <td>Category name</td>
          </tr>
        </thead>
        <tbody>
          {categories.length > 0 && categories.map(category =>(
            <tr key={category._id}>
              td
              {category.name}
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  )
}

export default Categories