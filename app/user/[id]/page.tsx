import Link from 'next/link'
import Form from 'next/form'
import { Suspense } from 'react'

type ParamsType = Promise<{ id: string }>
type SearchParamasType = Promise<{ q?: string }>

export default async function page({ params, searchParams }: { params: ParamsType, searchParams: SearchParamasType }) {

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

        <Suspense>
          <SuspenseComponent1 params={params} />
        </Suspense>
        <Suspense>
          <SuspenseComponent2 searchParams={searchParams} />
        </Suspense>
        <Form action="">
          <input name="q" className='border' />
          <button type="submit">Submit</button>
        </Form>
        <Link href={"/"}>Home</Link>
      </div>
    </div>
  )
}

async function SuspenseComponent1({ params }: { params: ParamsType }) {
  const { id } = await params

  return (
    <h1 className="text-3xl">User id:  {id}</h1>
  )
}

async function SuspenseComponent2({ searchParams }: { searchParams: SearchParamasType }) {
  const { q } = await searchParams
  return (
    <h2 className='text-2xl'>Query q: {q}</h2>
  )
}
