"use client"
import TabComponent from "../components/tabs";
import SubMenu from "../components/submenu";
import { useSearchParams } from 'next/navigation';

export default function Categories() {
  const searchParams = useSearchParams()
  const title = searchParams.get('title')
  const description = searchParams.get('description')
    return (
      <div>   
          <SubMenu title={title || ''} description={description || ''}/>
          <TabComponent />
      </div>
    )
  }