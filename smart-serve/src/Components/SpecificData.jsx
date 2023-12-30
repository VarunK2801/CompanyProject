import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';

function SpecificData() {
    const [showData, setShowData]= useState([]);
    const avaliableFields = ['subcategory','Title','Price','Popularity','Descritpion','Rating','UTM source','UTM medium']
    const [counter, setCounter] = useState(0)
    const [data,setData] = useState([]);


    const handleField = ()=>{
        let newCounter ;
        setCounter((prevCounter) => {
            const newData = avaliableFields[prevCounter];
            setShowData((prevData) => [...prevData, newData]);
            newCounter = prevCounter + 1;
            return newCounter;
          });
    }
    const reduceField = ()=>{
        setCounter((prevCounter) => {
            const newCounter = prevCounter - 1;
            // if (newCounter < 0) {
            //   return 0;
            // }
            const updatedData = [...showData];
            updatedData.splice(newCounter, 1);
            setShowData(updatedData);
            return newCounter;
          });
    }

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetch(
              "https://s3.amazonaws.com/open-to-cors/assignment.json"
            );
            const result = await response.json();
            setData(result);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }, []);

      const productIds = Object.keys(data.products || []).sort(
        (a, b) => data.products[b].popularity - data.products[a].popularity
      );
    
      const show = productIds.map((productId) => {
        const product = data.products[productId];
        return (
          <li key={productId}>
            {showData.map((field,index)=>(
                <p key={index}>
                    {field}: {product[field.toLowerCase().replace(' ', '_')]}
                </p>
            ))}
            <hr />
          </li>
        );
      })

    
  return (
      <div>
        <h1>Display Handling</h1>
        <h3>Select the fields to be displayed</h3>
        <NavLink to={'/'} style={{textDecoration:"none",margin:'3rem',padding:"20px"}}> Dashboard</NavLink>
        <NavLink to={'/UserData'} style={{textDecoration:"none",margin:'3rem',padding:"20px"}}> User Data</NavLink>

        <div style={{display:"flex", border:'1px solid black',width:"400px",margin:"1rem"}}>
            <table>
                <tr style={{display:'flex',flexDirection:"column",margin:"2px"}}>
                    <th>Avaliable Fields</th>
                    {avaliableFields.map((field,index)=>(
                        <tr key={index} style={{cursor:'pointer'}}>{field}</tr>
                    ))}
                </tr>
            </table>
            <div style={{display:'flex',flexDirection:'column'}}>
            <button disabled={counter === avaliableFields.length } onClick={handleField} style={{margin:'1rem'}}>&gt;&gt;</button>
            <button disabled={counter === -1} onClick={reduceField} style={{margin:'1rem'}}>&lt;&lt;</button>

            </div>
            <table>
                <tr style={{display:'flex',flexDirection:"column",margin:"2px"}}>
                        <th>Fields to be displayed</th>
                        {showData.map((field,index)=>(
                        <tr key={index} style={{cursor:'pointer'}}>{field}</tr>
                        ))}
                </tr>
            </table>
        </div>
        {showData.length > 0 &&<div
            style={{
            background: 'linear-gradient(to right, gray, white)',
            margin: '1rem',
            padding: '1rem',
            }}
        >
            <p>{show}</p>
        </div>}

    </div>
  )
}

export default SpecificData