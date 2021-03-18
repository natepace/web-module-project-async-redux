import { connect } from 'react-redux'; 
import { fetchData } from '../store';
import { useEffect } from 'react';



const CharacterList = (props) => {

    useEffect(()=>{
        props.fetchData();


    },[])
    return(
        <div className="characterList">
            {props.isLoading ? <h1>l o a d i n g . . .</h1> : null}
            {props.error ? <h1>{props.error}</h1> : null}
            {props.characters.map((char) => (
                <div className="characterbox" key={char.index}>
                     <p>{char.name}</p>
                     <img src={char.image}/>
                     </div>
                
            ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        isLoading:state.isLoading,
        characters:state.characters,
        error:state.error
    }
}

export default connect(mapStateToProps, { fetchData })(CharacterList)