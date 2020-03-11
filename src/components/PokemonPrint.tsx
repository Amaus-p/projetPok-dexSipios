import React, { Component } from "react";


interface Props {
    ID: string;
    handleClick: (change?: boolean, id?: React.Key) => () => void;
    handleChange: (input: string | number) => (event: any) => void;
    values : {
        pokeId : number, 
        pokeName: string;
        pokeType: string;
        pokeAbility1: string;
        pokeAbility2: string;
        pokeCategory: string;
        pokeDescription: string;
        pokeHeight: string;
        pokeWeight: string;
        pokePhotoBack: string;
        pokePhotoFront: string,
        familyID : Array<number>,
        familyName : Array<string>,
        familyPhoto : Array<string>, 
        loadingData : boolean,
        loadingFamilyData: boolean;}
    
  }

class PokemonPrint extends Component<Props>{

    
    render (){
        const { values, ID, handleClick, handleChange} = this.props
        const {pokeId, pokeName, pokeType, pokeAbility1, pokeAbility2, pokeCategory,pokeDescription, pokeHeight,pokeWeight, 
            pokePhotoBack, pokePhotoFront,familyID,familyName,familyPhoto } = values;
        

            return(
            <div style={{textAlign: "center",}}>
            <h1> Pokédex </h1> <br/>
            <input type="text" placeholder = 'ID ou nom du pokemon' value={ID} onChange={handleChange('ID')}/>
            <button onClick={handleClick()} >Rechercher</button>
            <h2> {pokeName} No {pokeId} </h2><br/>
            <img src = {pokePhotoFront} alt={pokeName}/>
            <img src = {pokePhotoBack} alt={pokeName}/>
            <h3> Description: {pokeDescription}</h3>
            <h3>Taille : {pokeHeight}m</h3>
            <h3>Poids : {pokeWeight}kg</h3>
            <h3>Catégorie : {pokeCategory}</h3>
            <h3>Talent : {pokeAbility1} , {pokeAbility2}</h3>
            <h3>Type : {pokeType}</h3> <br/>
            <h2> Evolution </h2>
            <button onClick ={handleClick(true,familyID[1])}>
                <img src = {familyPhoto[1]} alt = {familyName[1]}/> 
                <h3>{familyName[1]} No {familyID[1]}</h3>
            </button>
            <button onClick ={handleClick(true,familyID[2])}>
                <img src = {familyPhoto[2]} alt = {familyName[2]}/> 
                <h3>{familyName[2]} No {familyID[2]}</h3>
            </button>
            <button onClick ={handleClick(true,familyID[3])}>
                <img src = {familyPhoto[3]} alt = {familyName[3]}/> 
                <h3>{familyName[3]} No {familyID[3]}</h3>
            </button>
            </div>
            )
    }
}

export default PokemonPrint;

