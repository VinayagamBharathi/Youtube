const Button=()=>{
    return<div className="btn-flex">
        <div>
            <button className="btn-items">All</button>
        </div>
        <div>
            <button className="btn-items">Music</button>
        </div>
        <div>
            <button className="btn-items">Tamil cinema</button>
        </div>
        <div>
            <button className="btn-items">Data Structures</button>
        </div>
        <div>
            <button className="btn-items">Mixes</button>
        </div>
        <div>
            <button className="btn-items">Tamil television drama</button>
        </div>
        <div>
            <button className="btn-items">Telugu cinema</button>
        </div>
        <div>
            <button className="btn-items">News</button>
        </div>
        <div>
            <button className="btn-items">Bowling</button>
        </div>
        <div>
            <button className="btn-items">MS Dhoni</button>
        </div>
        
        
    </div>
}
const ButtonContainer=()=>{
  return <div className="buttoncontainer">
    <Button/>
  </div>
}
export default ButtonContainer
