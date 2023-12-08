import * as React from "react";
import { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Table from 'react-bootstrap/Table';


const Products = () => {
  const [state, setState] = useState(0);
  const [all_products, setProductList] = useState([]);
  const [all_category, setCategory] = useState([]);

  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [category_id, setCategoryId] = useState();
  const [file, setFile] = useState();

  async function ProductList() {
    let result = await fetch("http://127.0.0.1:8000/api/get_product");

    result = await result.json();

    setProductList(result);
  }

  async function Category() {
    let result = await fetch("http://127.0.0.1:8000/api/get_category");
    result = await result.json();

    setCategory(result);
  }

  useEffect(() => {
    ProductList();
    Category();
  }, [state]);

  console.warn("all_products", all_products);

  console.log(all_category);

  async function submit() {
    //let  data=[name,description,category,file];
    const data = new FormData();
    data.append("name", name);
    data.append("description", description);
    data.append("category_id", category_id);
    data.append("file", file);

    let result = await fetch("http://localhost:8000/api/set_product", {
      method: "POST",
      body: data,
    });
    result = await result.json();

    console.log(result);

    if (result.id && result.category_id && result.name && result.description) {
      alert("successfully-added");
    } else {
      alert("server-down");
    }

    setState(state + 1);
  }

  return (
    <>
      <div className="add-product">
        <Form.Group className="mb-3">
          <Form.Label>Select Category</Form.Label>
          <Form.Select
            name="category_id"
            onChange={(e) => setCategoryId(e.target.value)}
          >
            {all_category.map((category, key) => (
              <option value={category.id}>{category.category_name}</option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label> Product Name:</Form.Label>
          <Form.Control
            placeholder="Product-name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label> Product Description:</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formFileLg" className="mb-3">
          <Form.Label>Large file input example</Form.Label>
          <Form.Control
            type="file"
            size="lg"
            name="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </Form.Group>

        <Button variant="primary" onClick={() => submit()}>
          {" "}
          Submit
        </Button>
      </div>



      <h3>Products-table</h3>

      <div>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Category</th>
            <th>Name</th>
            <th>Description</th>
            <th>Image</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {all_products.map((products, key) => (
            <tr key={products.key}>
          
            <td>{products.id}</td>
            <td>{products.category_id}</td>
            <td>{products.name}</td>
            <td>{products.description}</td>

            
            <td className="product-img">{<img src={"http://127.0.0.1:8000/storage/"+products.product_image} />}</td>
            <td>Action</td>
          </tr>
          ))}
        </tbody>
      </Table>
      
    </div>





      
    </>
  );
};

export default Products;
