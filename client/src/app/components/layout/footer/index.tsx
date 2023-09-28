import Link from "next/link"
import TelegramIcon from '@/assets/TelegramIcon.svg'
import Image from "next/image"

const Footer = () => {
    return (
        <footer className="flex justify-between items-baseline px-9 py-10 text-white bg-black">
            <section>
                <Link href='/'>
                    <h2 className="text-4xl">Лого</h2>
                </Link>
                <span className="text-xs mt-6">&copy; НАЗВАНИЕ 2023. Все права защищены</span>
            </section>
            <section>
                <ul>
                    <li className="mb-3">Контакты</li>
                    <li>Редакция</li>
                </ul>
            </section>
            <section>
                <ul>
                    <li className="mb-3">Политика конфиденциальности</li>
                    <li className="mb-3">Условия использования</li>
                    <li>Реклама</li>
                </ul>
            </section>
            <section>
                <p 
                    className="max-w-[200px] text-sm"
                >
                   {' По любым вопросам пишите на '} 
                    <span 
                        className="text-[#FF6B00] underline"
                    >
                            privet@yandex.com
                    </span>
                </p>
                <a href="https://web.telegram.org/" className="flex items-center mt-[21px]">
                    <Image  
                        src={TelegramIcon}
                        width={24}
                        height={24}
                        alt="Telegram"
                    />
                    <span className="ml-2">Подписаться</span>
                </a>
            </section>
            <section className="flex items-end">
                <Link 
                    href='/'
                    className="bg-[#FF6B00] px-4 py-3 rounded-lg"
                >
                    Предложить новость
                </Link>
            </section>
        </footer>
    )
}

export default Footer