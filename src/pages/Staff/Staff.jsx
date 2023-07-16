import { ProfileCard } from "../../components"
import './staff.scss';
import { FaSearch} from 'react-icons/fa';
const Staff = ()=>{
    return (
       <div className="staff">
            <div className="search">
                <div className="input">
                    <input type="text" placeholder="Search faculty"/><FaSearch className="search_btn" />
                </div>
                <div className="dropdown">
                <select className="choices">
                <option value="none" selected disabled hidden>Select an Option</option>
                    <option >Teaching</option>
                    <option>Non-Teaching</option>
                </select>
                <select className="choices">
                <option value="none" selected disabled hidden>Select Subject</option>
                    <option>Compiler Design</option>
                    <option>Computer Networks</option>
                    <option>DBMS</option>
                </select>
                </div>
                

            </div>
            <div className="staff-row">
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
                <ProfileCard />
            </div>
       </div>
    )
}
export default Staff;