import { useEffect, useState } from "react";
import { ProfileCard } from "../../components"
import './staff.scss';
import { getSearchProfiles, getSubjects } from "../../services/Search";

const Staff = ()=>{

    const [ search, setSearch ] = useState({name:'',subject:'',field:''});
    const [subjects, setSubjects] =  useState([]);
    const [ error, setError] = useState('');

    const [ profiles, setProfiles ] = useState([]);
    const updateSearch =  async (field, value)=>{
        const newSearch = {...search,[field]:value};
        console.log("newSearch", newSearch)
        await fetchProfiles(newSearch)
        setSearch(newSearch)
    }
    const fetchSubjects = async()=>{
        const { error, data } = await getSubjects();
        if(error){
            setError(data.message);
            return;
        }
        setSubjects(data.subjects);
    }
    const fetchProfiles = async(search)=>{
        const { error, data } = await  getSearchProfiles(search);
        if(error) return ;
        console.log(data) ;
        setProfiles(data.accounts);
    }
    useEffect(()=>{
       fetchProfiles(search);
    },[])
    useEffect(()=>{
        fetchSubjects();
    },[])
    return (
       <div className="staff">
            <div className="search">
                <input type="text" placeholder="Search By Name" value={search.name} onChange={(e)=>updateSearch("name",e.target.value)}/>
                <select className="input" name="subject" onChange={(e)=>updateSearch("subject",e.target.value)} >
                    {error && <option value="">{error}</option>}
                    <option value="">All Subjects</option>
                    {
                        subjects.map((subject,index)=>(
                            <option value={subject} key={index}>{subject}</option>
                        ))
                    }
                </select>
                <select  className="input" name="field" onChange={(e)=>updateSearch("field",e.target.value)}  >
                    <option value="">All Fields</option>
                    <option value="Teaching">Teaching</option>
                    <option value="Non-Teaching">Non-Teaching</option>
                </select>

            </div>
            <div className="staff-row">
                { profiles.length===0 && <span className="success">No Faculty  is There....</span>}
                {
                    profiles.map((profile)=>(
                        <ProfileCard profile={profile} />
                    ))
                }
            </div>
       </div>
    )
}
export default Staff;
