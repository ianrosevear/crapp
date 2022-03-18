const Grid = ( {puz} ) => {

    return (        
        <div className="cell-container">

            {puz.solution.map((row, rindex) => (
                row.map((value, vindex) => (
                    <div className="cell" key={rindex.toString() + vindex.toString()}>
                        <div className="content">
                            <span>{value}</span>
                        </div>
                    </div>
                ))
            ))}

        </div>
    );
}
 
export default Grid;