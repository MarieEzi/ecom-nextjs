import React from 'react'
import Link from 'next/link'

function Sidebar() {
  return (
    <div><div>
    <ul>
      <li>
        <Link href="/avantages">
          <a>Mes avantages</a>
        </Link>
      </li>
      <li>
        <Link href="/commandes">
          <a>Mes commandes</a>
        </Link>
      </li>
      <li>
        <Link href="/informations">
          <a>Mes informations</a>
        </Link>
      </li>
      <li>
        <Link href="/contact">
          <a>Aide et contact</a>
        </Link>
      </li>
    </ul>
  </div>
</div>
  )
}

export default Sidebar