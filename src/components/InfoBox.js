import { Card, CardContent, Typography } from "@material-ui/core";
import numeral from "numeral";
import "../styles/InfoBox.css";

const InfoBox = ({ title, dailyCase, totalCase }) => {
    return (
        <Card className="infoBox">
            <CardContent className="infoBox__content">
                <Typography color="textSecondary" className="infoBox__title">
                    {title}
                </Typography>

                <Typography
                    variant="h2"
                    color="textSecondary"
                    className="infoBox__dailyCase"
                >
                    {numeral(dailyCase).format("0.a")}
                </Typography>

                <Typography
                    color="textSecondary"
                    className="infoBox__totalCase"
                >
                    Total Cases : {numeral(totalCase).format("0.a")}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default InfoBox;
