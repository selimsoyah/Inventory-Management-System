import { History, Plus, Users2 ,Bell,Settings , ChevronDown} from 'lucide-react'
import React from 'react'
import SearchInput from './SearchInput'

function Header() {
  return (
    <div className='bg-grey-50 h-14 flex items-center justify-between px-8'>
      <div className='flex items-center gap-3'>

        <button>
          <History />
        </button>
        <SearchInput />
      </div>
      <div className='flex items-center gap-3'>
        <div className='pr-2 border-r border-gray-300'>
          <button className='p-2 rounded-lg bg-blue-600'>
            <Plus className='w-4 h-4 text-slate-50' />
          </button>
        </div>
        <div className='flex border-r border-gray-300'>
          <button className='p-2 rounded-lg hover:bg-blue-200'>
            <Users2 className='w-4 h-4 text-slate-900' />
          </button>
          <button className='p-2 rounded-lg hover:bg-blue-200'>
            <Bell className='w-4 h-4 text-slate-900' />
          </button>
          <button className='p-2 rounded-lg hover:bg-blue-200'>
            <Settings className='w-4 h-4 text-slate-900' />
          </button>
        </div>

        <div className='flex gap-6'>
            <button className='flex items-center'>
              <span>Salim </span>
              <ChevronDown className='h-4 w-4'/>
            </button>
        </div>
      </div>
    </div>
  )
}

export default Header