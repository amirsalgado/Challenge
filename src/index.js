import "./styles.css";

document.getElementById("app").innerHTML = `
<div class="rectangle1">
        <div class="rectangle2">
            <div class="content">
                <div class="pokemonImage">
                    <img src="https://res.cloudinary.com/dpsitqprf/image/upload/v1675862809/HTML%20CSS%20CHALLENGE/toppng.com-imagenes-de-bulbasaur-371x397_emf1k5.png" alt="Bulbasaur image"></img>
                </div>

                <div class="pokemonInformation">
                    <div class="labelTitle">NAME</div>

                    <div class="labelValue labelValue-1">BULBASAUR</div>
                
                    <div class="labelTitle">TYPES</div>
                    
                    <div class="labelValue labelValue-2">
                        <span class="pokemonType plant">Plant</span>
                    
                        <span class="pokemonType venom">Venom</span>
                    </div>
                
                    <div class="labelTitle">HEIGHT</div>

                    <div class="labelValue">0,7m</div>

                    <div class="labelTitle">WEIGHT</div>

                    <div class="labelValue">6,9kg</div>
                </div>
            </div>
            
            <div class="pokemonWeaknesses">
                <p>WEAKNESSES</p>

                <div class="weaknessesContent">
                    <div class="pokemonType fire">FIRE</div>

                    <div class="pokemonType psy">PSY</div>

                    <div class="pokemonType fly">FLY</div>

                    <div class="pokemonType ice">ICE</div>
                </div>
            </div>
        </div>
    </div>
`;
