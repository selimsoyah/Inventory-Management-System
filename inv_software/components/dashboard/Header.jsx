import { History } from 'lucide-react'
import React from 'react'

function Header() {
  return (
    <div className='bg-grey-50 h-14 flex items-center justify-between px-8'>
        <div className='flex'>
                
                <button>
                    <History/>
                </button>
                
        </div>
        <div className='flex'>

        </div>
    </div>
  )
}

export default Header