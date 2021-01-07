import  React, {useEffect} from "react";
import "./Listview.css"
import SearchBar from "../SearchBar/SearchBar"
import ListviewItem from "../ListviewItem/ListviewItem"
import DetailPanel from "../DetailPanel/DetailPanel"

const Listview = () => {
    const  [detail, setdetail] = React.useState({
        detailIsvisible : false,
        cssProperties: {},
        "toggleDisplay": {'display':'block'}
    });
    const [searchState, setSearch] = React.useState("")
    
    
    const [tasks, setTask] = React.useState({})
    

    
    const loadData = async () => {
        const url = `http://localhost:3001/task/find/e0cd74b1-5522-4dd9-8211-3e2b171c061e`
        const resp = await fetch(url, {method: "GET"}).catch(() => console.error())
        const task = await resp.json();
        console.log(task)
        setTask(task);
    } 
     useEffect(() => {
         loadData()
    },[])

    const detailPanel = () => {
        if(detail.detailIsvisible) 
            return (
            <DetailPanel
                dispatchCSSState={setdetail} 
                cssprop={detail.cssProperties}>
            </DetailPanel>
        )
        return <div></div>;
    }

    return(
        
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
            <div className="master-detail">
                <div className="master" style={detail.cssProperties}>
                    <div className="listview-item-content">
                    <div className="list-header">
                        <div>Name</div>
                        <div style={detail.toggleDisplay}>Estimate</div>
                        <div style={detail.toggleDisplay}>Remaining</div>
                        <div style={detail.toggleDisplay}>Owner</div>
                        <div>Status</div>
                    </div>
                        <ListviewItem
                            title={tasks.TaskName}
                            estimate={tasks.Estimate}
                            remaining={tasks.Remaining}
                            ownerName={tasks.OwnerName}
                            status={tasks.Status} 
                            dispatchToggleState={setdetail}
                            detail={detail}>
                        </ListviewItem>
                    </div>
                </div>
                {detailPanel(detail)}
            </div>
        </div>
    )
}

export default Listview;