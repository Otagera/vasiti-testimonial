import React, { Fragment } from 'react';
import { Disclosure, Menu, Transition, Dialog } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import './App.css';
import logo from '../../assets/Vasiti-Logo-black 1.svg';
import ppl from '../../assets/Testimonial image 1.png';
import line from '../../assets/Vector 5.svg';
import smile from '../../assets/black-beautiful-ladies-smiling 1.png';
import customer1 from '../../assets/head1.png';
import customer2 from '../../assets/head2.png';
import customer3 from '../../assets/head3.png';
import customer4 from '../../assets/head4.png';
import customer5 from '../../assets/head5.png';
import customer6 from '../../assets/head6.png';
import customer7 from '../../assets/head7.png';
import customer8 from '../../assets/head8.png';
import customer9 from '../../assets/head9.png';
import customer10 from '../../assets/head10.png';
import customer11 from '../../assets/head11.png';
import customer12 from '../../assets/head12.png';
import womanShopping from '../../assets/woman-shoppingbag-card 2.png';
import phone from '../../assets/subscribe-banner 1.png';
import fb from '../../assets/fb.svg';
import ln from '../../assets/in.svg';
import tw from '../../assets/tw.svg';
import ig from '../../assets/ig.svg';
import { useRef, useState, useEffect } from 'react';
//import { ExclamationIcon } from '@heroicons/react/outline';

const navigation = [
  { name: 'HOME', href: '#', current: true },
  { name: 'MARKETPLACE', href: '#', current: false },
  { name: 'WHOLESALE', href: '#', current: false },
  { name: 'CENTER', href: '#', current: false },
  { name: 'SERVICES', href: '#', current: false },
  { name: 'INTERNSHIPS', href: '#', current: false },
  { name: 'EVENTS', href: '#', current: false },
]
const profile = [
	{name: 'ABOUT US', active: false },
	{name: 'STORIES', active: false },
	{name: 'CONTACT', active: false },
	{name: 'LOG IN', active: false },
	{name: 'SIGN UP', active: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Nav() {
  return (
    <Disclosure as="nav" className="bg-white-800">
		{({ open }) => (
			<>
				<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
					<div className="relative flex items-center justify-between h-16">
						<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
							{/* Mobile menu button*/}
							<Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
							  <span className="sr-only">Open main menu</span>
							  {open ? (<XIcon className="block h-6 w-6" aria-hidden="true" />) : (<MenuIcon className="block h-6 w-6" aria-hidden="true" />)}
							</Disclosure.Button>
						</div>
						<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
							<div className="flex-shrink-0 flex items-center">
								<img src={logo} alt="Logo" className="block h-8 w-auto" />
							</div>
						</div>
						<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
							<div className="hidden sm:block sm:ml-10">
							  <div className="flex space-x-1">
							    {navigation.map((item) => (
							      <a
							        key={item.name}
							        href={item.href}
							        className={classNames(
							          item.current ? 'bg-gray-100' : 'hover:bg-gray-100 hover:text-black',
							          'px-3 py-2 rounded-md text-sm font-medium text-black'
							        )}
							        aria-current={item.current ? 'page' : undefined}
							      >
							        {item.name}
							      </a>
							    ))}
							  </div>
							</div>

							{/* Profile dropdown */}
							<Menu as="div" className="ml-3 relative">
							  {({ open }) => (
							    <>
							      <div>
							        <Menu.Button className="border border-btnOrange text-white bg-btnOrange rounded-lg h-15 w-25 p-2 my-5 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-btnOrange-800 focus:ring-btnOrange">
								        <span className="sr-only">Open user menu</span>
										START
							        </Menu.Button>
							      </div>
								    <Transition
								        show={open}
								        as={Fragment}
								        enter="transition ease-out duration-100"
								        enterFrom="transform opacity-0 scale-95"
								        enterTo="transform opacity-100 scale-100"
								        leave="transition ease-in duration-75"
								        leaveFrom="transform opacity-100 scale-100"
								        leaveTo="transform opacity-0 scale-95">

								        <Menu.Items
								        	static
								        	className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" >
								        	{profile.map((item, i)=>{
								        		return(
												<Menu.Item key={item.name}>
													<a
														href={`#${item.name}`}
														className={classNames(
														  item.active ? 'bg-gray-100' : '',
														  'block px-4 py-2 text-sm text-gray-700'
														)}
														>
														{item.name}
													</a>
												</Menu.Item>
												)
								        	})}
								        </Menu.Items>
								    </Transition>
							    </>
							  )}
							</Menu>
						</div>
					</div>
				</div>

				<Disclosure.Panel className="sm:hidden">
					<div className=" flex flex-col flex-wrap px-2 pt-2 pb-3 space-y-1">
						{navigation.map((item) => (
							<a
								key={item.name}
								href={item.href}
								className={classNames(
									item.current ? 'bg-gray-100' : 'hover:bg-gray-100 hover:text-black',
							          'px-3 py-2 rounded-md text-sm font-medium text-black'
								)}
								aria-current={item.current ? 'page' : undefined}
							>
								{item.name}
							</a>
						))}
					</div>
				</Disclosure.Panel>
			</>
		)}
    </Disclosure>
  )
}

function Example(props) {
	const [open, setOpen] = useState(false);
	const [inputs, setInputs] = useState({
		fName: '',
		lName: '',
		story: '',
		customer: '',
		statevendor: '',
		city: '',
	});
	const [img] = useState(React.createRef());

	const handleChange = (input, event)=> {
		let type = 'value';
		if(event.target.type === 'checkbox'){
			type = 'checkbox';
		} else if(event.target.type === 'file'){
			type = 'files';
		}
		
		const value = event.target[type];
		setInputs({
			...inputs,
			[input]: value
		});
	}
	useEffect(() => {
		setOpen(props.open);
	}, [props.open]);
	const cancelButtonRef = useRef();

	return (
	    <Transition.Root show={open} as={Fragment}>
		    <Dialog
		        as="div"
		        static
		        className="fixed z-10 inset-0 overflow-y-auto"
		        initialFocus={cancelButtonRef}
		        open={open}
		        onClose={setOpen}
		        >
		        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
			        <Transition.Child
			            as={Fragment}
			            enter="ease-out duration-300"
			            enterFrom="opacity-0"
			            enterTo="opacity-100"
			            leave="ease-in duration-200"
			            leaveFrom="opacity-100"
			            leaveTo="opacity-0"
				        >
				        <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
			        </Transition.Child>

					{/* This element is to trick the browser into centering the modal contents. */}
					<span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
					&#8203;
					</span>
			        <Transition.Child
			            as={Fragment}
			            enter="ease-out duration-300"
			            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
			            enterTo="opacity-100 translate-y-0 sm:scale-100"
			            leave="ease-in duration-200"
			            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
			            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
				        >
					    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
				            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
				                <div className="sm:flex sm:items-start">
					                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
					                    <Dialog.Title as="h3" className="text-lg leading-6 font-black text-center text-gray-900">
					                      Share Your Amazing Story!
					                    </Dialog.Title>
					                    <div className="mt-2">
					                    	<div className='flex flex-col my-5 space-y-2'>
					                    		<label htmlFor='img'>Upload your Picture</label>
							                    <input type="file" ref={img} name='img'
							                    	className='h-10 p-1 rounded-lg border border-gray-200 bg-white bg-opacity-5 outline-none focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent' />
					                    	</div>
					                    	<div className='flex flex-row space-x-10 my-5'>
						                    	<div className='flex flex-col space-y-2'>
						                    		<label htmlFor=''>First Name</label>
								                    <input 
								                    	type="text"
								                    	value={inputs.fName}
								                    	onChange={handleChange.bind(this, 'fName')}
								                    	className='h-10 rounded-lg border border-gray-200 bg-white bg-opacity-5 outline-none focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent' />
						                    	</div>
						                    	<div className='flex flex-col space-y-2'>
						                    		<label htmlFor=''>Last Name</label>
								                    <input
								                    	type="text"
								                    	value={inputs.lName}
								                    	onChange={handleChange.bind(this, 'lName')}
								                    	className='h-10 rounded-lg border border-gray-200 bg-white bg-opacity-5 outline-none focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent' />
						                    	</div>
					                    	</div>
					                    	<div className='flex flex-col my-5 space-y-2'>
					                    		<label htmlFor=''>Share your story</label>
							                    <input
							                    	type="textarea"
							                    	value={inputs.story}
							                    	onChange={handleChange.bind(this, 'story')}
							                    	className='h-20 rounded-lg border border-gray-200 bg-white bg-opacity-5 outline-none focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent' />
					                    	</div>
					                    	<div className='flex flex-row space-x-4 my-5'>
					                    		<label htmlFor=''>What did you interact with Vasiti as?</label>
								                    <input 
														name='customer'
														type='radio'
														value={inputs.customer}
														onChange={handleChange.bind(this, 'customer')} className='mt-2'/>
						                    		<label htmlFor='customer'>Customer</label>								                
								                    <input 
														name='vendor'
														type='radio'
														value={inputs.vendor}
														onChange={handleChange.bind(this, 'vendor')} className='mt-2'/>
						                    		<label htmlFor='vendor'>Vendor</label>									                
					                    	</div>
					                    	<div className='flex flex-col my-5 space-y-2'>
					                    		<label htmlFor=''>City or Higher Institution (for Students)</label>
							                    <input
							                    	type="text"
							                    	value={inputs.city}
							                    	onChange={handleChange.bind(this, 'city')}
							                    	className='h-10 rounded-lg border border-gray-200 bg-white bg-opacity-5 outline-none focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent' />
					                    	</div>
					                    	<button></button>
					                    </div>
					                </div>
				                </div>
				            </div>
				            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
			                <button
			                  type="button"
			                  className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
			                  onClick={() => setOpen(false)}
			                	>
			                  Share your story
			                </button>
			                <button
			                  type="button"
			                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-red text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
			                  onClick={() => setOpen(false)}
			                  ref={cancelButtonRef}
			                	>
			                  Cancel
				                </button>
				            </div>
			            </div>
			        </Transition.Child>
		        </div>
		    </Dialog>
	    </Transition.Root>
	);
}

function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className='flex flex-col mx-auto py-5 font-inter'>
    	<Nav />
	    <div className='flex flex-col md:flex-row md:px-20'>
		    <div className='md:my-32 md:w-1/2 px-5'>
				<p className='pt-4 text-left text-4xl font-black px-5'>Amazing Experiences from Our Wonderful Customers</p>
				<p className='pt-4 text-xl px-5'>Here is what customers and vendors are saying about us, you can share your stories with us too.</p>		    	
		    </div>
			<div className='relative z-0 w-100 h-100 my-16 md:my-24 md:w-1/2 lg:w-3/5'>
				<img src={ppl} alt="People" className='m-auto w-96 h-96 relative z-20 transform md:scale-100'/>
				<div className='rounded-full absolute bg-red-100 bg-opacity-30 inset-0 z-10 m-auto w-96 h-96 transform md:scale-125'></div>
			</div>
		</div>
		<div className='bg-black bg-opacity-90 text-white flex flex-col md:flex-row-reverse md:px-20'>
			<div className='py-10 md:py-20 px-10 w-full md:w-1/2'>
				<h4 className='text-2xl font-bold'>Tolu & Joy's Experience</h4>
				<button className='border border-gray rounded-lg h-15 w-25 p-2 my-5' onClick={() => setOpen(!open)}>CUSTOMER</button>
				<p className='text-left text-lg my-5'>
					I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. 
					I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer 
					service, an all round great experience. I would definately be coming back!
				</p>
				<div className='mx-auto w-max'>
					<p className='mt-10 text-center text-xl' onClick={() => setOpen(!open)}>SHARE YOUR OWN STORY!</p>
					<img src={line} alt="Line" />
				</div>
			</div>
			<div className='relative z-0 w-full h-96 mt-12 mb-5 md:mt-24 md:w-1/2'>
				<img src={smile} alt="Line" className='relative z-20 md:mx-auto'/>
				<div className='rounded-full absolute bg-white bg-opacity-5 inset-0 z-10 transform scale-125 m-auto w-96 h-96'></div>
			</div>
		</div>
		<div className='flex flex-row flex-wrap mt-20 md:mx-20'>
			<article className='p-10 grid grid-cols-6 grid-rows-12 gap-3 md:w-1/2 lg:w-1/3'>
				<img src={customer1} alt="customer" className='row-span-4 col-span-4' />
				<h3 className='row-span-4 col-span-6 text-2xl font-bold'>Joseph Ike</h3>
				<p className='row-span-2 col-span-2 pt-2 text-xl'>In Ikeja</p>
				<p className='row-span-2 col-span-2 bg-blue-100 text-indigo-700 px-2 py-2 rounded-lg w-28 h-10'>CUSTOMER</p>
				<p className='row-span-4 col-span-6 text-left'>
					Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute 
					irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
					Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
				</p>
			</article>
			<article className='p-10 grid grid-cols-6 grid-rows-12 gap-3 md:w-1/2 lg:w-1/3'>
				<img src={customer2} alt="customer" className='row-span-4 col-span-4' />
				<h3 className='row-span-4 col-span-6 text-2xl font-bold'>Adetola Fashina</h3>
				<p className='row-span-2 col-span-2 pt-2 text-xl'>In Ibadan</p>
				<p className='row-span-2 col-span-2 bg-blue-100 text-indigo-700 px-2 py-2 rounded-lg w-28 h-10'>CUSTOMER</p>
				<p className='row-span-4 col-span-6 text-left'>
					Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute 
					irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
					Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
				</p>
			</article>
			<article className='p-10 grid grid-cols-6 grid-rows-12 gap-3 md:w-1/2 lg:w-1/3'>
				<img src={customer3} alt="customer" className='row-span-4 col-span-4' />
				<h3 className='row-span-4 col-span-6 text-2xl font-bold'>Emmanuel Fayemi</h3>
				<p className='row-span-2 col-span-2 pt-2 text-xl'>In Akoka</p>
				<p className='row-span-2 col-span-2 bg-blue-100 text-indigo-700 px-2 py-2 rounded-lg w-28 h-10'>CUSTOMER</p>
				<p className='row-span-4 col-span-6 text-left'>
					Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute 
					irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
					Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
				</p>
			</article>
			<article className='p-10 grid grid-cols-6 grid-rows-12 gap-3 md:w-1/2 lg:w-1/3'>
				<img src={customer4} alt="customer" className='row-span-4 col-span-4' />
				<h3 className='row-span-4 col-span-6 text-2xl font-bold'>Chisom Obilor</h3>
				<p className='row-span-2 col-span-2 pt-2 text-xl'>In Magodo</p>
				<p className='row-span-2 col-span-2 bg-blue-100 text-indigo-700 px-2 py-2 rounded-lg w-28 h-10'>CUSTOMER</p>
				<p className='row-span-4 col-span-6 text-left'>
					Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute 
					irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
					Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
				</p>
			</article>
			<article className='p-10 grid grid-cols-6 grid-rows-12 gap-3 md:w-1/2 lg:w-1/3'>
				<img src={customer5} alt="customer" className='row-span-4 col-span-4' />
				<h3 className='row-span-4 col-span-6 text-2xl font-bold'>Adunoluwa Adeyemi</h3>
				<p className='row-span-2 col-span-2 pt-2 text-xl'>Iwo Road</p>
				<p className='row-span-2 col-span-2 bg-blue-100 text-indigo-700 px-2 py-2 rounded-lg w-28 h-10'>CUSTOMER</p>
				<p className='row-span-4 col-span-6 text-left'>
					Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute 
					irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
					Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
				</p>
			</article>
			<article className='p-10 grid grid-cols-6 grid-rows-12 gap-3 md:w-1/2 lg:w-1/3'>
				<img src={customer6} alt="customer" className='row-span-4 col-span-4' />
				<h3 className='row-span-4 col-span-6 text-2xl font-bold'>Chidi Okeke</h3>
				<p className='row-span-2 col-span-2 pt-2 text-xl'>In Somolu</p>
				<p className='row-span-2 col-span-2 bg-blue-100 text-indigo-700 px-2 py-2 rounded-lg w-28 h-10'>CUSTOMER</p>
				<p className='row-span-4 col-span-6 text-left'>
					Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute 
					irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
					Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
				</p>
			</article>
		</div>
		<div className='flex flex-col md:flex-row-reverse bg-red-100 bg-opacity-30 md:px-20'>
			<div className='relative z-0 w-100 h-100 my-16 md:my-24 md:w-1/2 lg:w-3/5'>
				<img src={womanShopping} alt="Woman Shopping" className='m-auto w-96 h-96 relative z-20'/>
				<div className='rounded-full absolute bg-red-100 bg-opacity-30 inset-0 z-10 transform scale-125 m-auto w-96 h-96'></div>
			</div>
			<div className='py-20 px-10 md:w-1/2 lg:w-2/5'>
				<h4 className='text-xl font-bold'>Victoria’s Experience</h4>
				<button className='border border-btnOrange text-btnOrange rounded-lg h-15 w-25 p-2 my-5' onClick={() => setOpen(!open)}>VENDOR</button>
				<p className='text-left'>
					I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. 
					I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an 
					all round great experience. I would definately be coming back!
				</p>
				<div className='mx-auto w-max'>
					<p className='mt-10 text-center text-xl text-btnOrange' onClick={() => setOpen(!open)}>SHARE YOUR OWN STORY!</p>
					<img src={line} alt="Line" />
				</div>
			</div>
		</div>
		<div className='flex flex-row flex-wrap mt-20 md:px-20'>
			<article className='p-10 grid grid-cols-6 grid-rows-12 gap-3 md:w-1/2 lg:w-1/3'>
				<img src={customer7} alt="customer" className='row-span-4 col-span-4' />
				<h3 className='row-span-4 col-span-6 text-2xl font-bold'>Temi Obadofin</h3>
				<p className='row-span-4 col-span-2 bg-green-100 bg-opacity-30 text-lime-500 font-bold px-3 py-2 rounded-lg w-24 h-10'>VENDOR</p>
				<p className='row-span-4 col-span-6 text-left'>
					Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute 
					irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
					Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
				</p>
			</article>
			<article className='p-10 grid grid-cols-6 grid-rows-12 gap-3 md:w-1/2 lg:w-1/3'>
				<img src={customer8} alt="customer" className='row-span-4 col-span-4' />
				<h3 className='row-span-4 col-span-6 text-2xl font-bold'>Promise Ejiofor</h3>
				<p className='row-span-4 col-span-2 bg-green-100 bg-opacity-30 text-lime-500 font-bold px-3 py-2 rounded-lg w-24 h-10'>VENDOR</p>
				<p className='row-span-4 col-span-6 text-left'>
					Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute 
					irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
					Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
				</p>
			</article>
			<article className='p-10 grid grid-cols-6 grid-rows-12 gap-3 md:w-1/2 lg:w-1/3'>
				<img src={customer9} alt="customer" className='row-span-4 col-span-4' />
				<h3 className='row-span-4 col-span-6 text-2xl font-bold'>Feyisola Arinola</h3>
				<p className='row-span-4 col-span-2 bg-green-100 bg-opacity-30 text-lime-500 font-bold px-3 py-2 rounded-lg w-24 h-10'>VENDOR</p>
				<p className='row-span-4 col-span-6 text-left'>
					Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute 
					irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
					Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
				</p>
			</article>
			<article className='p-10 grid grid-cols-6 grid-rows-12 gap-3 md:w-1/2 lg:w-1/3'>
				<img src={customer10} alt="customer" className='row-span-4 col-span-4' />
				<h3 className='row-span-4 col-span-6 text-2xl font-bold'>Karen Ibeh</h3>
				<p className='row-span-4 col-span-2 bg-green-100 bg-opacity-30 text-lime-500 font-bold px-3 py-2 rounded-lg w-24 h-10'>VENDOR</p>
				<p className='row-span-4 col-span-6 text-left'>
					Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute 
					irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
					Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
				</p>
			</article>
			<article className='p-10 grid grid-cols-6 grid-rows-12 gap-3 md:w-1/2 lg:w-1/3'>
				<img src={customer11} alt="customer" className='row-span-4 col-span-4' />
				<h3 className='row-span-4 col-span-6 text-2xl font-bold'>Oluchi Uzo</h3>
				<p className='row-span-4 col-span-2 bg-green-100 bg-opacity-30 text-lime-500 font-bold px-3 py-2 rounded-lg w-24 h-10'>VENDOR</p>
				<p className='row-span-4 col-span-6 text-left'>
					Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute 
					irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
					Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
				</p>
			</article>
			<article className='p-10 grid grid-cols-6 grid-rows-12 gap-3 md:w-1/2 lg:w-1/3'>
				<img src={customer12} alt="customer" className='row-span-4 col-span-4' />
				<h3 className='row-span-4 col-span-6 text-2xl font-bold'>Amos Okafor</h3>
				<p className='row-span-4 col-span-2 bg-green-100 bg-opacity-30 text-lime-500 font-bold px-3 py-2 rounded-lg w-24 h-10'>VENDOR</p>
				<p className='row-span-4 col-span-6 text-left'>
					Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute 
					irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. 
					Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.
				</p>
			</article>
		</div>
		<div className='bg-black bg-opacity-90 text-white px-10 md:px-20'>
			<div className='flex flex-col md:flex-row-reverse'>
				<div className='md:w-1/2 md:py-20 md:ml-16 md:pr-0 mt-10 md:mt-0'>
					<h4 className='text-3xl md:text-xl font-bold'>Be a  member of our community 🎉</h4>
					<p className='text-left text-lg my-5'>
						We’d make sure you’re always first to know what’s happening on Vasiti—thus, the world.
					</p>
					<form className='bg-white bg-opacity-5 rounded-lg md:w-max' action=''>
						<input 
							type="email"
							placeholder='enter your email address'
							className='m-2 px-5 py-4 border bg-white bg-opacity-5 rounded-lg text-white border-transparent focus:outline-none focus:ring-2 focus:ring-gray-600 focus:border-transparent' />
						<button className='float-right sm:float-none ml-5 mr-2 px-4 py-3 text-black bg-white rounded-lg hover:bg-white-700 focus:outline-none focus:ring-2 focus:ring-white-600 focus:ring-opacity-50'>SUBSCRIBE</button>
					</form>	
				</div>
				<div className='md:w-1/2 w-full m-auto relative'>
					{/*<img src={phone} alt="Phone" className='transform scale-125 md:scale-100  md:-top-5 relative md:absolute' />*/}
					<img src={phone} alt="Phone" className='transform scale-100 md:scale-110 ml-5 md:mt-0 mt-10 m-auto' />
				</div>
			</div>
			<div className='flex flex-row flex-wrap space-x-8 mt-20 md:mt-0 mb-20'>
				<article className='my-5'>
					<h5 className='font-bold text-xl pb-5'>Company</h5>
					<ul>
						<li className='font-thin'>About us</li>
						<li className='font-thin'>Term of Use</li>
						<li className='font-thin'>Privacy Policy</li>
						<li className='font-thin'>Press & Media</li>
					</ul>
				</article>
				<article className='my-5'>
					<h5 className='font-bold text-xl pb-5'>Products</h5>
					<ul>
						<li className='font-thin'>Marketplace</li>
						<li className='font-thin'>Magazine</li>
						<li className='font-thin'>Seller</li>
						<li className='font-thin'>Wholesale</li>
						<li className='font-thin'>Services</li>
					</ul>
				</article>
				<article className='my-5'>
					<h5 className='font-bold text-xl pb-5'>Careers</h5>
					<ul>
						<li className='font-thin'>Become a Campus Rep</li>
						<li className='font-thin'>Become a Vasiti Influencer</li>
						<li className='font-thin'>Become a Campus writer</li>
						<li className='font-thin'>Become an Affiliate</li>
					</ul>
				</article>
				<article className='my-5'>
					<h5 className='font-bold text-xl pb-5'>Get in touch</h5>
					<ul>
						<li className='font-thin'>Contact us</li>
						<li className='font-thin'>Partner with us</li>
						<li className='font-thin'>Advertise with us</li>
						<li className='font-thin'>Help/FAQs</li>
					</ul>
				</article>
				<article className='my-5'>
					<h5 className='font-bold text-xl pb-5'>Join our community</h5>
					<ul>
						<li className='flex flex-row space-x-2'>
							<img src={fb} alt="Facebook" />
							<img src={ig} alt="Instagram" />
							<img src={tw} alt="Twitter" />
							<img src={ln} alt="LinkedIn" />
						</li>
						<li className='font-thin'>Email Newsletter</li>
					</ul>
				</article>
			</div>
		</div>
		<Example open={open} />
    </div>
  );
}

export default App;
