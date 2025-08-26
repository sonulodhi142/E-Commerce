import React, { useState } from 'react';

const Home = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    image: ''
  });

  const [data, setData] = useState([]);

  function inputHandler(e) {
    const { name, value, type, files } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === "file" ? files[0] : value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setData(prev => [...prev, form]);

    setForm({
      name: '',
      phone: '',
      image: ''
    });
  }
  function deleteHandle(id){
    let updateData = data.filter((item, index)=> (index != id))
    setData(updateData)
  }
  function editHandle(id){
    document.getElementById("update").style.display = 'block'
    document.getElementById("submit").style.display = 'none'
    let updateData = data.filter((item, index)=> (index == id))
    setForm({
      name: updateData[0].name,
      phone: updateData[0].phone,
      image: ''
    });
  }

  function updateHandle(id){
    
  }

  return (
    <div>
      <h1>User Form</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={inputHandler}
        />
        <br /><br />
        
        <label>Phone:</label>
        <input
          type="number"
          name="phone"
          value={form.phone}
          onChange={inputHandler}
        />
        <br /><br />
        
        <label>Image:</label>
        <input
          type="file"
          name="image"
          onChange={inputHandler}
        />
        <br /><br />
        
        <button id='submit' type="submit">Submit</button>
        <button id='update' style={{display:'none'}} type="submit">update</button>

      </form>

      <h2>All Submissions</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {index + 1}. {item.name} - {item.phone}
            <img 
                src={URL.createObjectURL(item.image)} 
                alt="Uploaded" 
                width="50" 
                height="50"
                style={{ marginLeft: "10px" }}
              />
              <button onClick={()=>deleteHandle(index)}>delete</button>
              <button onClick={()=>editHandle(index)}>edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
