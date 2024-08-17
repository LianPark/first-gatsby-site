/* src/pages/about-us.tsx */
 
import React from 'react';
import PageMeta from './PageMeta'
import { Link } from 'gatsby'


export const Head = () => <title>Home Page</title>



 
export default function AboutUs(){
  return(
    <>
      <h1>ABOUT</h1>
      <Link to="/">Home</Link>
      <Link to="/about-us">About</Link>
    </>
    
    
  )
}
 
// 이제 `localhost:8000/about-us` 에서 접근 가능
