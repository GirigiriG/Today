import  React, {useEffect} from "react";
import "./Listview.css"
import SearchBar from "../SearchBar/SearchBar"
import ListviewItem from "../ListviewItem/ListviewItem"
import DetailPanel from "../DetailPanel/DetailPanel"

const Listview = () => {
    const  [detail, setdetail] = React.useState({
        detailIsvisible : false,
        id: "",
        cssProperties: {},
        "toggleDisplay": {'display':'block'}
    });

    const [searchState, setSearch] = React.useState("")
    const [tasks, setTask] = React.useState({})
        
    const loadData = async () => {
        const url = `http://localhost:3001/task/find/429f981f-f458-4479-96dd-ff8e1880de0c`
        const resp = await fetch(url, {method: "GET"}).catch(() => console.error())
        const task = await resp.json();
        setTask(task);
    } 
     useEffect(() => {
         loadData()
    },[])

    const detailPanel = () => {
        if(detail.detailIsvisible) 
            return (
            <DetailPanel
                id={detail.id}
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
                            id={tasks.ID}
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