import Grid from './Grid';
import Clues from './Clues';

const Crossword = () => {

    const puz = require('./CrappTest.json');
    puz.solution.map(value => console.log(value));
    console.log("hi");

    return (  
        <div className="crossword">
            <Grid puz={puz}/>
            <Clues puz={puz} isAcross={true}/>
            <Clues puz={puz} isAcross={false}/>
        </div> 
    );
}
 
export default Crossword;