import {Route,Routes} from "react-router-dom"
import Contacts from "./Contacts"
import Dashboard from "./Charts_and_Maps"
import EditContact from "../components/EditContact"
import ContactForm from "../components/ContactForm"
const AllRoutes=()=>{


    return(
        <Routes >
            <Route path="/" element={<Contacts/>}/>
            <Route path="/contact_form" element={<ContactForm/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/edit/:id" element={<EditContact/>}/>
        </Routes>
    )
}

export default AllRoutes