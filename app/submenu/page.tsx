"use client"
import Link from "next/link";
import PostCard from "../components/post";
import Introduction from "../components/introduction";
import TabComponent from "../components/tabs";
import SubMenu from "../components/submenu";
import { useSearchParams } from 'next/navigation';

export default function Categories() {
  const searchParams = useSearchParams()
  const title = searchParams.get('title')
    return (
      <div>   
          <SubMenu title={title || ''}/>
          <TabComponent />
      </div>
    )
  }