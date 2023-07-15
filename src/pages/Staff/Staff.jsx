import { ProfileCard } from "../../components"
import './staff.scss';

const Staff = ()=>{
    return (
       <div className="staff">
            <div className="search">
                <input type="text" placeholder="Search faculty"/>

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