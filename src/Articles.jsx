import React from 'react'
import Article from './Article'

const Articles = () => {

  return (
    <section className='articles'>
        <Article
        id='01' title='Reviving Retro PCs' desc='What happens when old PCs are given modern upgrades?' img='src/assets/image-retro-pcs.jpg'
        
        />
        <Article
        id='02' title='Top 10 Laptops of 2022' desc='Our best picks for various needs and budgets.' img='src/assets/image-top-laptops.jpg'
        
        />
        <Article
        id='03' title='The Growth of Gaming' desc='How the pandemic has sparked fresh opportunities.' img='src/assets/image-gaming-growth.jpg'
        
        />
    </section>
  )
}

export default Articles