import contact from '../utils/contact-book.png';
import bar from '../utils/bar-chart.png';
import { Link } from "react-router-dom"
export default function Sidebar() {
    return (
        <div className="flex border-r-2">
            <div className="flex pt-16 flex-col h-screen p-3 bg-white shadow w-60">
                <div className="space-y-3">
                    <div className="flex-1">
                        <ul className="pt-2 pb-4 space-y-1 text-sm">
                            <li className="rounded-sm">
                                <Link
                                    to="/"
                                    className="flex items-center p-2 space-x-3 rounded-md"
                                >
                                    <img className="contactImg" src={contact} />
                                    <span className="font-semibold text-l hover:bg-violet-900 hover:text-white">Contacts</span>
                                </Link>
                            </li>
                            <li className="rounded-sm">
                                <Link
                                    to="/dashboard"
                                    className="flex items-center p-2 space-x-3 rounded-md">
                                    <img className='barImg' src={bar} alt="" />
                                    <span className="font-semibold text-l hover:bg-violet-900 hover:text-white">Charts And Maps</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}