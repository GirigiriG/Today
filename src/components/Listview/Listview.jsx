import  React, {useEffect, useState} from "react";
import "./Listview.css"
import SearchBar from "../SearchBar/SearchBar"
import ListviewItem from "../ListviewItem/ListviewItem"
import DetailPanel from "../DetailPanel/DetailPanel"
import Card from '../../components/Card/Card'

const Listview = () => {
    const  [detail, setdetail] = useState({
        detailIsvisible : false,
        record: {},
        cssProperties: {},
        "toggleDisplay": {'display':'block'}
    });

    const [searchState, setSearch] = React.useState("")
    const [tasks, setTask] = React.useState([])
        
    const loadData = async () => {
        const url = `http://localhost:3001/task/project/b4ec0fe0-4d69-4bd1-bb89-fb40fea02c7c`
        const resp = await fetch(url, {method: "GET"}).catch(() => console.error())
        if(resp != null) {
            const tasks = await resp.json();
            setTask(tasks);
        }
    } 
     useEffect(() => {
         loadData()
    },[])

    const detailPanel = () => {
        
        if(detail.detailIsvisible) 
            return (
            <DetailPanel
                id={detail.record.ID}
                record={detail.record}
                dispatchCSSState={setdetail} 
                cssprop={detail.cssProperties}>
            </DetailPanel>
        )
        return <div></div>;
    }

    return(
        <Card>
            <div className="listview">
                <header>
                    <h3>My Current Tasks</h3>
                </header>
                <div className="search-newtask">
                    <div className="search-wrapper">
                        <SearchBar
                            handleChange={e => setSearch(e.target.value)}
                            searchValue={searchState}
                            placeholderText="Search task...">
                        </SearchBar>
                    </div>
                    <button>+</button>
                </div>
                <div className="list-header" style={detail.cssProperties}>
                    <div>Name</div>
                    <div style={detail.toggleDisplay}>Estimate</div>
                    <div style={detail.toggleDisplay}>Remaining</div>
                    <div style={detail.toggleDisplay}>Owner</div>
                    <div>Status</div>
                </div>

                <div className="master-detail">
                    <div className="master" style={detail.cssProperties}>
                        <div className="listview-item-content">
                        {tasks.map((task, key) => {    
                            return <ListviewItem
                                key={key}
                                record={task}
                                dispatchToggleState={setdetail}
                                detail={detail}>
                            </ListviewItem>
                        })}    
                        </div>
                    </div>
                    {detailPanel(detail)}
                </div>
            </div>
        </Card>
    )
}

export default Listview;