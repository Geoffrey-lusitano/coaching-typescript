import React from 'react'
import Logo from '@/assets/Logo.png'
type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='bg-primary-100 py-16'>
        <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
            <div className='mt-16 basis-1/2 md:mt-0'>
                <img src={Logo} alt="logo" />
                <p className='my-5'>
                    blaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadfg xhfxbfxdhfgjdygdfj gcfjxfj hfgjgjhgfjngfikhhgc,n
                </p>
                <p>© Tous droits reserver.</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'> 
                <h4 className='font-bold'>Links</h4>
                <p className='my-5'>Blaaaa</p>
                <p className='my-5'>Blaaaa</p>
                <p className='my-5'>Blaaaa</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'> 
                <h4 className='font-bold'>Contactez nous</h4>
                <p className='my-5'>Blaaaa</p>
                <p>06 65 10 34 78</p>

            </div>
            

        </div>

    </footer>
  )
}

export default Footer