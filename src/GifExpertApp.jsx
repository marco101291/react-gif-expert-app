import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components/'


export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch Man'])

    const onAddCategory=(newCategory)=>{
     

        if(categories.includes(newCategory.toLowerCase())) return;
        // categories.push(newCategory)
        //Valorant
        setCategories([newCategory, ...categories])
        // setCategories(cat=> [...cat, 'Valorant'])
    }
    
  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            
            onNewCategory={value => onAddCategory(value)}
        />
                {
                    categories.map((category) =>  (
                            <GifGrid 
                            key={category} 
                            category={category}
                            />
                        ))
                }
    </>
  )
}
