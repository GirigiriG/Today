import  React from "react";
import "./Listview.css"
import SearchBar from "../SearchBar/SearchBar"
import { SortAZ } from "../../asset/asset";
import ListviewItem from "../ListviewItem/ListviewItem"
const Listview = () => {
    const [searchState, setSearch] = React.useState("")
    return(
        <div className="listview">
            <div>

                <header>
                    <h2>My Current Tasks</h2>
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
                <div className="list-header">
                    <div>
                        <span>Name</span>
                        <SortAZ className="SortAZ"></SortAZ>
                    </div>
                    <div></div>
                    <div></div>
                    <div>Owner</div>
                    <div>Status</div>
                </div>
                <div className="listview-item-content">
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
        </div>
    )
}

export default Listview;