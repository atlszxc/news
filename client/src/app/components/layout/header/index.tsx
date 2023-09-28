import { CurencyService } from "@/api/curency.service"
import Link from "next/link"
import USDIcon from '@/assets/UsdIcon.svg'
import EURIcon from '@/assets/EurIcon.svg'
import BTCIcon from '@/assets/BtcIcon.svg'
import CalendarIcon from '@/assets/CalendarIcon.svg'
import SearchIcon from '@/assets/SearchIcon.svg'
import LoginIcon from '@/assets/LoginIcon.svg'
import Image from "next/image"
import HeaderBlock from "./components/HeaderBlock"

const Header = async () => {
    const curensies = await CurencyService.getCurency()

    return (
        <header className="flex justify-between items-center px-9 py-5 bg-white rounded-b-2xl">
           <section className="flex items-center">
                <Link 
                    href='/'
                    className='font-medium text-lg'
                >
                    <h2>Лого</h2>
                </Link>

                <section className="flex ml-[105px]">
                    <HeaderBlock icon={CalendarIcon} text={new Date().toLocaleDateString('ru-RU', { weekday: 'short', year: 'numeric', month: 'numeric', day: 'numeric' }).toLocaleUpperCase()} />
                    {
                        curensies.map((item, id) => <HeaderBlock icon={id === 0? USDIcon : id === 1? EURIcon : BTCIcon} text={item.toFixed(2)} key={id} /> )
                    }
                </section>
           </section>

            <section className="flex items-center">
                    <Image 
                        src={SearchIcon}
                        width={36}
                        height={36}
                        alt="Search"
                        className="mr-3 cursor-pointer"
                    />
                    <Image 
                        src={LoginIcon}
                        width={36}
                        height={36}
                        alt="Login"
                        className="cursor-pointer"
                    />
            </section>

        </header>
    )
}

export default Header