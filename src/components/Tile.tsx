type TileProps = {
    cell: string,
    index: number, 
    cellClicked: 
}

const Tile = ({cell, index, cellClicked}: {index: number}) => {


  return (
    <div 
        className="tile"
        onClick={() => cellClicked(index)}
    >
        {cell}
    </div>
  )

}
export default Tile
