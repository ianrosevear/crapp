const Clues = ( {puz, isAcross} ) => {

    let clues;
    let idval;
    if (isAcross) {
        console.log("true");
        clues = puz.clues.Across;
        idval = "across";
    } else {
        console.log("false");
        clues = puz.clues.Down;
        idval = "down";
    }
    console.log(idval);

    return (  
        <div className="clue-container">

            {clues.map(clue => (
                <div className="clue" id={clue[0]+idval}>
                    <p>{clue[0]} {idval}: {clue[1]}</p>
                </div>
            )
            )
            }

        </div>
    );
}
 
export default Clues;