import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Table from '../components/Table'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <Navbar/>
    <main className='py-5'>
      <h1 className='overflow-x-auto'>My Daily Notes App</h1>
      <button
  class="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
  href="/download"
>
  Add Notes
      </button>
      <Table/>
    </main>
    </>
  )
}
