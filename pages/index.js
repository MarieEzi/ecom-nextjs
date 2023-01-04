import React from 'react';
import { client } from '../lib/client';
import { Product, FooterBanner, HeroBanner } from '../components';


const Home = ({ products, bannerData }) => (
  <div>
    <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

    <div className="products-heading">
      <h2>Meilleures ventes</h2>
      <p>Nos bonbons sont doublement bons</p>
    </div>

    <div className="products-container">
      {products?.map((product) => <Product key={product._id} product={product} />)}
    </div>

    <FooterBanner footerBanner={bannerData && bannerData[0]} />
  </div>
);

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const searchQuery = '*[_type == "search"]';
  const searchData = await client.fetch(searchQuery);

  const sidebarQuery = '*[_type == "sidebar"]';
  const sidebarData = await client.fetch(sidebarQuery);

  const faqQuery = '*[_type == "faq"]';
  const faqData = await client.fetch(faqQuery);
  
  return {
    props: { products, bannerData, searchData, sidebarData, faqData }
  }
}



export default Home;
