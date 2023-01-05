import React, { useContext, useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import { CurrencyContext } from "../context/CurrencyContext";

const LandingPage = () => {
    
    const { getCurrenciesPairs } = useContext(CurrencyContext);

    useEffect(() => {
        try {
            getCurrenciesPairs()
        }
        catch(e) {

        }
    },[])
    
    return <Text>Landing page</Text>
}

const styles = StyleSheet.create({
    
});

export default LandingPage;