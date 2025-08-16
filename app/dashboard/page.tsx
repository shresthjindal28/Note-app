import { Logout } from '@/components/logout'
import { PageWrapper } from '@/components/page-wapper'
import { getNotebooks } from '@/server/notebooks';
import React from 'react'

export default async function page() {
  const notebooks = await getNotebooks();

  return (
    <PageWrapper breadcrumb={[{ label: 'Dashboard', href: '/dashboard' }]}>
      <h1>Dashboard</h1>
      {notebooks.success && notebooks?.notebooks?.map((notebook) =>(
        <div key={notebook.id}>
          {notebook.name}
        </div>
      ))}

      {notebooks.success && notebooks?.notebooks?.length === 0 && (
        <p>No notebooks found</p>
      )}

      <Logout />
    </PageWrapper>
  )
}

