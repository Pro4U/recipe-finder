import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Home() {

    const [allData,setData] = useState();

    useEffect(()=>{
        const fetchRecipe = async () => {
            try{
                const recipe = await axios.get("https://forkify-api.herokuapp.com/api/search?q=pizza");
                console.log(recipe.data.recipes);
                setData(recipe.data.recipes);
            }
            catch(err){
                console.log(err);
            }
        }

        
        fetchRecipe();

    
    },[]);

    function searchRecipe(){

    }
   
    return (
        <div className="row">
          {allData && allData.map((item, index) => (
            index % 5 === 0 && 
            <div key={index} className="col-lg-12">
              <div className="row">
                {allData.slice(index, index + 5).map((subItem, subIndex) => (
                  <div key={subIndex} className="col-lg-2 col-md-3 col-sm-4 col-6 mb-4">
                    <a href={subItem.link}>
                      <Card style={{ width: '15rem', height: '25rem', margin: '1rem' }}>
                        <Card.Img variant="top" src={subItem.image_url} style={{ width: '15em', height: '15rem' }} />
                        <Card.Body>
                          <Card.Title>{subItem.title}</Card.Title>
                          <Card.Text>{subItem.publisher}</Card.Text>
                        </Card.Body>
                      </Card>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )
      
      
      
}

export default Home