import React, {Component} from "react";
import Card from "./Card";

export default class CardGroup extends Component {
    render() {
        return (
            <div style={styles.container}>
                <Card
                    text={"BOX 1"}
                    buttonText={"Button 1"}
                    content={"Nostrud ipsum nostrud eu occaecat."}
                />
                <Card
                    text={"BOX 2"}
                    buttonText={"Button 2"}
                    content={"Nostrud ipsum nostrud eu occaecat."}
                />
                <Card
                    text={"BOX 3"}
                    buttonText={"Button 3"}
                    content={"Nostrud ipsum nostrud eu occaecat."}
                />
            </div>
        );
    }
}

const styles = {
    container: {
        display: "flex",
        background-attachment:fixed;
	background-size:cover;
        width: "80%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 30
    }
};
