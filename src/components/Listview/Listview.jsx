import  React from "react";
import "./Listview.css"
import SearchBar from "../SearchBar/SearchBar"
import { SortAZ } from "../../asset/asset";
import ListviewItem from "../ListviewItem/ListviewItem"
import DetailPanel from "../DetailPanel/DetailPanel"

const Listview = () => {
    const [searchState, setSearch] = React.useState("")
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
                <div className="master">
                    <div className="listview-item-content">

                    <div className="list-header">
                        <div>
                            <span>Name</span>
                            <SortAZ className="SortAZ"></SortAZ>
                        </div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div>Status</div>
                    </div>
                        <ListviewItem></ListviewItem>
                        <ListviewItem></ListviewItem>
                        <ListviewItem></ListviewItem>
                        <ListviewItem></ListviewItem>
                        <ListviewItem></ListviewItem>
                        <ListviewItem></ListviewItem>
                        <ListviewItem></ListviewItem>
                        <ListviewItem></ListviewItem>
                        <ListviewItem></ListviewItem>
                        <ListviewItem></ListviewItem>
                        <ListviewItem></ListviewItem>
                        <ListviewItem></ListviewItem>
                        <ListviewItem></ListviewItem>
                        <ListviewItem></ListviewItem>
                        <ListviewItem></ListviewItem>
                        <ListviewItem></ListviewItem>
                        <ListviewItem></ListviewItem>
                        <ListviewItem></ListviewItem>
                        <ListviewItem></ListviewItem>
                        <ListviewItem></ListviewItem>
                    </div>
                </div>
                <DetailPanel></DetailPanel>
            </div>
        </div>
    )
}

export default Listview;