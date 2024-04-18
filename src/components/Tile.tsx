type TileProps = {
    cell: string,
    index: number, 
    cellClicked: (index : number) => void,
}

const Tile = ({cell, index, cellClicked}: TileProps) => {
  return (
    <div className="tile" onClick={() => cellClicked(index)}>
        {cell}
    </div>
  )
}
export default Tile
