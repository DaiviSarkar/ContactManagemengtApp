import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Popup from "../components/Popup"
import { removeContact } from "../Redux/action"

const Contacts = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [singleContact, setSingleContact] = useState({})
    let data = undefined
    const AllContacts = useSelector((store) => store.contacts)
    const dispatch = useDispatch()
    

    const togglePopup = (contact) => {

        setSingleContact(contact)

        setIsOpen(!isOpen)


    }
    useEffect(() => {

    }, [dispatch, AllContacts.length])
    return (
        <div className="justify-center pt-16 text-gray-50   p-4  w-full ">
            <div className="m-4">
                <button className="rounded-t-lg rounded-b-lg bg-amber-600 p-2 text-xl">
                    <Link to="/contact_form">
                        Create Contact
                    </Link>
                </button>

            </div>
            {AllContacts.length == 0 && <div className=" m-auto w-fit p-4 align-middle text-blue-500 justify-center">

                

<svg className="m-auto" fill="#3048a6" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" width="280" height="280" viewBox="0 0 612 612" space="preserve">

	<path d="M273.053,273.046c75.399,0,136.524-61.124,136.524-136.523S348.454,0,273.053,0c-75.4,0-136.522,61.124-136.522,136.523
		S197.654,273.046,273.053,273.046z M338.347,191.161c-6.209,20.535-32.814,35.971-64.698,35.971
		c-31.885,0-58.489-15.437-64.699-35.971H338.347z M566.878,582.625l-52.115-52.102c16.502-18.348,26.629-42.539,26.629-69.158
		c0-57.199-46.369-103.568-103.57-103.568c-57.199,0-103.568,46.369-103.568,103.568c0,57.201,46.369,103.57,103.568,103.57
		c16.871,0,32.748-4.119,46.824-11.275l55.605,55.594c3.662,3.662,9.654,3.66,13.314,0l13.312-13.312
		C570.54,592.279,570.54,586.287,566.878,582.625z M437.823,527.273c-36.4,0-65.908-29.508-65.908-65.908
		c0-36.398,29.508-65.906,65.908-65.906c36.398,0,65.908,29.508,65.908,65.906C503.731,497.766,474.222,527.273,437.823,527.273z
		 M310.716,461.363c0,16.277,3.188,31.795,8.787,46.113c-14.46,0.613-29.923,0.955-46.45,0.955
		c-131.637,0-196.056-21.51-219.673-32.02c-6.094-2.711-11.004-10.463-11.004-17.133v-45.002
		c0-67.436,51.344-123.381,116.86-130.874c1.991-0.228,4.943,0.624,6.565,1.799c30.208,21.87,67.191,34.92,107.25,34.92
		c40.06,0,77.042-13.051,107.251-34.92c1.621-1.175,4.574-2.027,6.564-1.799c39.754,4.547,74.201,26.995,95.215,58.962
		c-13.807-5.154-28.68-8.109-44.262-8.109C367.735,334.256,310.716,391.271,310.716,461.363z" />

</svg>
                
                

        <h1 className="text-2xl">No Contact found <br /> Please add new contacts using <br /> Create Contact Button</h1>
            </div>}
            <div id="contact_list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

                {
                    AllContacts.map((el) => {
                        return <div key={el.id} className="bg-blue-950 rounded-lg shadow-md m-4 p-4 text-white">
                            <div onClick={() => togglePopup(el)} className="w-3/4 m-auto  ">
                                <img className="w-full rounded-full" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIEAAACBCAMAAADQfiliAAAANlBMVEWVu9////+QuN6Mtt3K3O7j7Pby9vvE2OyavuCvy+akxOPY5fLp8Pj6/P260umqyOWFstvR4PDphOmSAAADqElEQVR4nO1b27KiMBCECbkCgfz/zy43dT0HyTRmdGuLfrJKyzSTuXZIVV24cOFCARCpGURfWVy54G3TzmisD059lMb00LE19d8wOlafs8UY2noPbRg/sj45vbv+DO0+YAayL9efYcUp0GsDbGYQpqBMhsDkk0qSAHVZAnXdCVqB9mPgJ1oxChRZBOo6ilHomQx6ofVVYhKo6yTjjcQmUNci20ANwKARoZBPBQ8YCQIDQKCuh/IEoE0Q2YZsQXiGQHlwiBtMjuCKM8DcQMIRPMjAlyZAKIPitSHTGn2CARaMAuF4MTjhB8WbZnZ/dEN5T4TzQfG0/P2cGLhN4oo+FGfw/crEGlYeEBhbFG9auUGX75bBcJQYWgLEoLwjVvyJaYbI1AQ1iiIqwj8wsSCOIOIG1QgwkBHVCJidhQQEfnESmNkWMGSsFWJiFrtPEhQVeUYQqIs3KJ4RRHVVjhFE1IsbWAVSTsubMeb7lE5Y4ne5CtnLueGK7D7I7sFC4dvnC1NIHlXpRlTav1N4vRFRnMBqYvL7acFsk5rcRlBl1fZhr1CnbWllZTiQctPE0G5mVi49h2Wf3PbVOP+s+AEoqSquueh+fkI0JG1mGr3RaXicdq6TTRerciSmp/f6vvOde3Ag50IIztF9fXL3pGm0L2OJ6VnbJ4P3/rXDq/j803Z4+ySYyP72ex32Oajwe6Qw9j07kN8vA3r49b+TrfZHmv4dNeVgSOma4GZPWFG50LyumufHl8zRltGtjd77aFt93LmcPfiCBbzXOFmvsHH9GKeaBvBQ5RinZmlUvjvGiSlKlTTBKV0J1A9zwPXFgoGwAg6HERMw8zBoE+8KE4ADEhbz8wDbeEAv4QLUVUAVmQNQaUbeduACY1A2Ia6A0mLxbDADygiglM9DCyXm8o44uSJCADzS4QESuEo2Jw8AxQk+XOQBaJpFQgEKBpFQgIJBSYTCFAx8BiQRClMw8HchK9mdAyD0Fe4R7wz44SgTjMAbQkLpAEgIAi3aCnajJpSQgJQEv3fDBVtIEEqJQFK8GEAvJmNgqznfj8ay8skDkJCSyleGPgHrz9r5jpb6Dox1qIpCozsQKTF0jRtP6XlEzma0yjyMtu4deZuUG5ruLAvTNUMJhZ9UNfy8wsVYvY1DwUOO5Q5dsElzQqTXyQaZ+3aLij7EpDuzx6Q3nU7TgxMJX3AjtZzuDD42KS13+1Jqoh+W056P3vCbH1Wp7YLjd644Xrhw4T/DHzhTKer8tGZTAAAAAElFTkSuQmCC" alt="" />
                                <div className="p-4">
                                    {isOpen &&
                                        <Popup close={() => togglePopup(data)} el={singleContact} />

                                    }
                                </div>    
                                <div className="text-left text-sm">
                                    <p>First Name : {el.first_name}</p>
                                    <p>Last Name  : {el.last_name}</p>
                                    <p>Mobile   : {el.mob}</p>
                                    <p>Status     : {el.status == "active" ? "Active" : "Inactive"}</p>
                                </div>

                            </div>

                            <div className="flex justify-between my-2">
                                <Link to={`edit/${el.id}`}>
                                    <button className="rounded p-2 bg-violet-600 text-black">

                                        Edit
                                    </button>
                                </Link>

                                <button onClick={() => dispatch(removeContact(el.id))} className="rounded p-2 bg-red-600 text-white">Delete</button>
                            </div>
                        </div>
                    })
                }
                
            


            </div>

        </div>
    )
}

export default Contacts;