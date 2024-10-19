import {
<<<<<<< HEAD
  SearchOutlined,
  // ShopOutlined,
  ShoppingCartOutlined,
=======
    SearchOutlined,
    // ShopOutlined,
    ShoppingCartOutlined,
>>>>>>> cb333d5318944c3c35431ddc63e28faf460aee85
} from '@ant-design/icons'
import { Button, Dropdown, Input, Menu } from 'antd'
import { useState } from 'react'
import Login from './Login'
import Register from './Register'
import ForgetPassword from './ForgetPassword'
import { Link } from 'react-router-dom'

const Header = () => {
<<<<<<< HEAD
  // const [isOpen, setIsOpen] = useState(false)
  const [buttonLogin, setButtonLogin] = useState(false)
  const [buttonRegister, setButtonRegister] = useState(false)
  const [buttonForgotPassword, setButtonForgotPassword] = useState(false)

  const handleLogin = () => {
      setButtonLogin(!buttonLogin)
  }

  const handleRegister = () => {
      setButtonRegister(!buttonRegister)
  }

  const handleForgotPassword = () => {
      setButtonForgotPassword(!buttonForgotPassword)
  }

  const handleSubmit = (e) => {
      e.preventDefault()
      // Add your submit logic here
  }

  const categories = (
      <Menu>
          <Menu.Item key="1">Toys</Menu.Item>
          <Menu.Item key="2">Tuff Trays</Menu.Item>
          <Menu.Item key="3">Behavioural</Menu.Item>
          <Menu.Item key="4">Sensory</Menu.Item>
          <Menu.Item key="5">Outdoors</Menu.Item>
          <Menu.Item key="6">Sand & Water</Menu.Item>
          <Menu.Item key="7">Strollers</Menu.Item>
          <Menu.Item key="8">Curriculum</Menu.Item>
          <Menu.Item key="9">Adventure</Menu.Item>
          <Menu.Item key="10">School Equipment</Menu.Item>
          <Menu.Item key="11">Furniture & Accessories</Menu.Item>
          <Menu.Item key="12">CLEARANCE</Menu.Item>
      </Menu>
  )

  return (
      <>
          <header className="bg-white shadow-md">
              <div className="mx-auto flex flex-col md:flex-row gap-3 justify-between items-center p-4">
                  <div className="text-2xl font-bold text-purple-700">
                      Educational Toys
                  </div>
                  <Dropdown overlay={categories} trigger={['click']}>
                      <Button className="bg-orange-500 text-white px-4 py-2 rounded">
                          All categories
                      </Button>
                  </Dropdown>
                  <Input
                      placeholder="What are you looking for?"
                      suffix={<SearchOutlined />}
                      className="w-1/3"
                  />
                  <div className="flex flex-col md:flex-row gap-4 items-center space-x-4">
                      <span className="text-gray-700">
                          Get in touch: care@educationaltoys.co.uk
                      </span>
                      <div>
                          <button
                              className="mr-[10px] text-[18px] hover:italic hover:underline font-[400]"
                              id="button-login"
                              onClick={handleLogin}
                          >
                              Log In
                          </button>
                          <button
                              className="text-[18px] hover:italic hover:underline bg-[#757FE2] p-[8px] rounded-[10px] font-[400]"
                              onClick={handleRegister}
                          >
                              Register
                          </button>
                          <button className="hidden text-[18px] hover:italic hover:underline font-[400]">
                              Log Out
                          </button>
                      </div>
                      <ShoppingCartOutlined className="cursor-pointer" />{' '}
                  </div>
              </div>

              {/* Navbar */}
              <nav className="bg-gray-100  ">
                  <div className="mx-auto flex flex-col gap-10 md:flex-row items-center justify-center space-x-4 py-2">
                      <a
                          href="#"
                          className="text-gray-700 hover:text-purple-700"
                      >
                          Toys
                      </a>
                      <a
                          href="#"
                          className="text-gray-700 hover:text-purple-700"
                      >
                          Tuff Trays
                      </a>
                      <a
                          href="#"
                          className="text-gray-700 hover:text-purple-700"
                      >
                          Behavioural
                      </a>
                      <a
                          href="#"
                          className="text-gray-700 hover:text-purple-700"
                      >
                          Sensory
                      </a>
                      <a
                          href="#"
                          className="text-gray-700 hover:text-purple-700"
                      >
                          Outdoors
                      </a>
                      <a
                          href="#"
                          className="text-gray-700 hover:text-purple-700"
                      >
                          Sand & Water
                      </a>
                  </div>
              </nav>
          </header>
          {buttonLogin && (
              <Login
                  handleLogin={handleLogin}
                  handleSubmit={handleSubmit}
                  handleForgotPassword={handleForgotPassword}
                  handleHaveNotAccount={handleRegister}
              />
          )}
          {buttonRegister && <Register handleRegister={handleRegister} />}
          {buttonForgotPassword && (
              <ForgetPassword
                  handleForgotPassword={handleForgotPassword}
                  handleSubmit={handleSubmit}
              />
          )}
      </>
  )
=======
    // const [isOpen, setIsOpen] = useState(false)
    const [buttonLogin, setButtonLogin] = useState(false)
    const [buttonRegister, setButtonRegister] = useState(false)
    const [buttonForgotPassword, setButtonForgotPassword] = useState(false)

    const handleLogin = () => {
        setButtonLogin(!buttonLogin)
    }

    const handleRegister = () => {
        setButtonRegister(!buttonRegister)
    }

    const handleForgotPassword = () => {
        setButtonForgotPassword(!buttonForgotPassword)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        // Add your submit logic here
    }

    const categories = (
        <Menu>
            <Menu.Item key="1">Toys</Menu.Item>
            <Menu.Item key="2">Tuff Trays</Menu.Item>
            <Menu.Item key="3">Behavioural</Menu.Item>
            <Menu.Item key="4">Sensory</Menu.Item>
            <Menu.Item key="5">Outdoors</Menu.Item>
            <Menu.Item key="6">Sand & Water</Menu.Item>
            <Menu.Item key="7">Strollers</Menu.Item>
            <Menu.Item key="8">Curriculum</Menu.Item>
            <Menu.Item key="9">Adventure</Menu.Item>
            <Menu.Item key="10">School Equipment</Menu.Item>
            <Menu.Item key="11">Furniture & Accessories</Menu.Item>
            <Menu.Item key="12">CLEARANCE</Menu.Item>
        </Menu>
    )

    return (
        <>
            <header className="bg-white shadow-md">
                <div className="mx-auto flex flex-col md:flex-row gap-3 justify-between items-center p-4">
                    <div className="text-2xl font-bold text-purple-700">
                        Educational Toys
                    </div>
                    <Dropdown overlay={categories} trigger={['click']}>
                        <Button className="bg-orange-500 text-white px-4 py-2 rounded">
                            All categories
                        </Button>
                    </Dropdown>
                    <Input
                        placeholder="What are you looking for?"
                        suffix={<SearchOutlined />}
                        className="w-1/3"
                    />
                    <div className="flex flex-col md:flex-row gap-4 items-center space-x-4">
                        <span className="text-gray-700">
                            <div className=''> Get in touch: care@educationaltoys.co.uk</div>
                            <Link to="/aboutUs" className='text-[#000] border-1px border-solid underline hover:italic'>About Us ?</Link>
                        </span>
                        <div className=''>Hello</div>
                        <div className='flex items-center'>
                             {/* About us*/}
                            
                            <button
                                className="mr-[10px] text-[10px] hover:italic hover:underline bg-[#757FE2] p-[8px] rounded-[10px] font-[400] h-[42px] inline-flex"
                                id="button-login"
                                onClick={handleLogin}
                            >
                                Log In
                            </button>
                            <button
                                className="text-[18px] hover:italic hover:underline bg-[#757FE2] p-[8px] rounded-[10px] font-[400] h-[42px]"
                                onClick={handleRegister}
                            >
                                Register
                            </button>
                            <button className="hidden text-[18px] hover:italic hover:underline font-[400]">
                                Log Out
                            </button>
                        </div>
                        <ShoppingCartOutlined className="cursor-pointer" />{' '}
                    </div>
                </div>

                {/* Navbar */}
                <nav className="bg-gray-100  ">
                    <div className="mx-auto flex flex-col gap-10 md:flex-row items-center justify-center space-x-4 py-2">
                        <a
                            href="#"
                            className="text-gray-700 hover:text-purple-700"
                        >
                            Toys
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-purple-700"
                        >
                            Tuff Trays
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-purple-700"
                        >
                            Behavioural
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-purple-700"
                        >
                            Sensory
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-purple-700"
                        >
                            Outdoors
                        </a>
                        <a
                            href="#"
                            className="text-gray-700 hover:text-purple-700"
                        >
                            Sand & Water
                        </a>
                    </div>
                </nav>
            </header>
            {buttonLogin && (
                <Login
                    handleLogin={handleLogin}
                    handleSubmit={handleSubmit}
                    handleForgotPassword={handleForgotPassword}
                    handleHaveNotAccount={handleRegister}
                />
            )}
            {buttonRegister && <Register handleRegister={handleRegister} />}
            {buttonForgotPassword && (
                <ForgetPassword
                    handleForgotPassword={handleForgotPassword}
                    handleSubmit={handleSubmit}
                />
            )}
        </>
    )
>>>>>>> cb333d5318944c3c35431ddc63e28faf460aee85
}

export default Header
