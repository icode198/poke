import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  pokeColumnBlock: {
    marginVertical: 10,
    flexDirection: 'column', 
    alignItems: 'center', 
    justifyContent: 'center', 
    height: 100, 
    borderRadius: 20,
    backgroundColor: 'white', 
    marginHorizontal: 5
  },
  titleColumn: { 
    marginBottom: 5, 
    fontFamily: 'FingerPaint-Regular',
    fontSize: 15
  },
  pokemonGenerationImage: {
    height: 40,
    width: 40,
    borderRadius: 5,
  }  
});