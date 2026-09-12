import logo from '../src/assets/logo-text.png'

export function Contact() {
    
    return <>
    <div className='flex justify-between py-9 container mx-auto p-3 border-[1px] border-gray-100 h-[224px]'>
            <div>
                <div className='my-3'><img src={logo} alt="" /></div>
                <p className='text-[15px] text-[#475569] '>Curated tools, technologies, and resources for developers building<br /> modern software.</p>
                <div className='flex gap-5 mt-5 text-[15px] text-[#475569] font-medium'><a href="">GitHub</a>
                <a href="">Twitter</a>
                <a href="">LinkedIn</a></div>
   </div>
            <div className='list-none'>
                <h1 className='font-semibold my-3'>PRODUCT</h1>
                <ul className=' text-[#475569]'>
                    <li><a href="">Home</a></li>
                <li><a href="">Technologies</a></li>
                <li><a href="">Projects</a></li></ul>
    </div>
            <div className='list-none'>
                <h1 className='font-semibold my-3'>COMPANY</h1>
                <ul className=' text-[#475569]'>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href="">Career</a></li></ul>
            </div>
            <div className='list-none'>
                <h1 className='font-semibold my-3'>LEGAL</h1>
                <ul className=' text-[#475569]'>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Terms of Service</a></li></ul></div>
            </div>
    
    </>
}